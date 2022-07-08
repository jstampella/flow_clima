import React from 'react';

// add Api
import { getWeatherApi, getWeatherCurrentApi } from '../../../api/weatherApi';

/**
 * Componente que se utiliza para obtener de la api del clima la informacion de la ciudad
 *
 */
export default function weatherSearch({ setData }) {
	const getWeather = e => {
		const { city } = e.target.elements;
		const cityValue = city.value;
		if (cityValue) {
			// obtener datos actuales
			getWeatherCurrentApi(cityValue).then(result => {
				if (result.cod === 200) {
					setData({
						temperature: result.main.temp,
						description: result.weather[0].description,
						humidity: result.main.humidity,
						wind_speed: result.wind.speed,
						city: result.name,
						country: result.country,
						error: null,
					});
				} else {
					setData({
						error: 'Error al obtener datos',
					});
				}
			});
			// obtener los datos extendidos
			getWeatherApi(cityValue).then(result => {
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
				error: 'ingrese una ciudad y pais',
			});
		}
		e.preventDefault();
	};

	return (
		<div className='card card-body'>
			<form onSubmit={getWeather}>
				<div className='form-group'>
					<input
						type='text'
						name='city'
						placeholder='ingrese una ciudad'
						className='form-control'
						autoFocus
					/>
				</div>
				<button className='btn btn-block btn-success'>Buscar</button>
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
