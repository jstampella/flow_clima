import React, { useState, useEffect } from 'react';

// add Api
import { getWeatherApi, getWeatherCurrentApi } from '../../../api/weatherApi';

// import scss
import './weatherSearch.scss';

/**
 * Componente que se utiliza para obtener de la api del clima la informacion de la ciudad
 *
 */
export default function weatherSearch({ setData }) {
	// Constantes
	const [cord, setCord] = useState({ latitude: 0, longiude: 0 });
	const [city, setCity] = useState('');
	// Cambios de estados
	useEffect(() => {
		if ((cord.latitude !== 0 && cord.longiude !== 0) || city !== '')
			getWeather();
	}, [cord]);

	const getWeather = () => {
		console.log('city', city);
		const { latitude, longitude } = cord;
		if (city !== '' || (latitude !== 0 && longitude !== 0)) {
			// obtener datos actuales
			getWeatherCurrentApi(city, cord).then(result => {
				console.log(result);
				if (result.cod === 200) {
					setData({
						temperature: result.main.temp,
						description: result.weather[0].description,
						humidity: result.main.humidity,
						wind_speed: result.wind.speed,
						city: result.name,
						country: result.sys.country,
						error: null,
					});
				} else {
					setData({
						error: 'Error al obtener datos',
					});
				}
			});
			// obtener los datos extendidos
			getWeatherApi(city, cord).then(result => {
				// 	// muestra los resultados si el cod de peticion es 200
				if (result.cod === '200') {
					const dataList = categorizeResults(result.list);
					console.log(dataList);
					// 		setData({
					// 			temperature: 10,
					// 			description: 0,
					// 			humidity: 0,
					// 			wind_speed: 0,
					// 			city: result.city.name,
					// 			country: result.city.country,
					// 			error: null,
					// 		});
				} else if (result.cod === '404' || result.error) {
					// 		// if not found
					setData({
						error: result.error
							? result.error
							: 'Ocurrio un error al obtener los datos',
					});
				}
			});
		} else {
			setData({
				error: 'ingrese una ciudad',
			});
		}
	};

	return (
		<div className='card card-body'>
			<form
				onSubmit={e => {
					e.preventDefault();
					getWeather();
				}}
			>
				<div className='form-group d-flex'>
					<input
						defaultValue={city}
						onChange={e => setCity(e.target.value)}
						type='text'
						name='city'
						placeholder='ingrese una ciudad'
						className='form-control'
						autoFocus
					/>

					<button
						className='btn-geo'
						type='button'
						onClick={e => {
							setCity('');
							getGeolocation(setCord);
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 16 16'
						>
							<path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
						</svg>
					</button>
				</div>
				<button type='submit' className='btn btn-block btn-success'>
					Buscar
				</button>
			</form>
		</div>
	);
}

// funcion que refactoriza los datos del tiempo en formato de array
const categorizeResults = list => {
	const dates = list
		.map((item, i) => {
			return item.dt_txt.split(' ')[0];
		})
		.filter((item, i, currArr) => {
			return currArr.indexOf(item) === i;
		});

	// console.log('dates', dates);

	// create a new object with those dates as keys
	const sortedResults = [];
	for (const theDate of dates) {
		sortedResults.push({
			name: theDate,
			weathers: [],
		});
	}

	// for each item in the json.list
	for (const item of list) {
		const itemDate = item.dt_txt.split(' ')[0]; // get the date in string form

		// if sortedResults.name = itemDate then push that item into that sortedResult's weathers array
		for (const result of sortedResults) {
			if (result.name === itemDate) {
				result.weathers.push(item);
			}
		}
	}

	// console.log('sortedResults', sortedResults);
	return sortedResults;
};

const getGeolocation = setCord => {
	navigator.geolocation.getCurrentPosition(function (position) {
		setCord({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		});
	});
};
