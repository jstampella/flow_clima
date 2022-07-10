import React, { useState, useEffect } from 'react';

// import scss
import './weatherSearch.scss';

/**
 * Componente que se utiliza para obtener de la api del clima la informacion de la ciudad
 *
 */
export default function weatherSearch({
	setData,
	setDataExtra,
	getDataExtraApi,
	getDataApi,
}) {
	// Constantes estados
	const [cord, setCord] = useState({ latitude: 0, longiude: 0 });
	const [city, setCity] = useState('');
	const [select, setSelect] = useState(false);
	// Cambios de estados
	useEffect(() => {
		if ((cord.latitude !== 0 && cord.longiude !== 0) || city !== '')
			getWeather();
	}, [cord]);

	// funcion para obtener desde las api los datos segun los valores ingresados
	const getWeather = () => {
		setData({ temperature: 0, loading: true });
		setDataExtra({ loading: true });
		const { latitude, longitude } = cord;
		if (city !== '' || (latitude !== 0 && longitude !== 0)) {
			// obtener datos actuales
			getDataApi(city, cord);
			// obtener los datos extendidos
			getDataExtraApi(city, cord);
		} else {
			setData({
				loading: false,
				error: 'ingrese una ciudad',
			});
			setDataExtra({
				loading: false,
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
						disabled={select}
						defaultValue={city}
						onChange={e => setCity(e.target.value)}
						type='text'
						name='city'
						placeholder='ingrese una ciudad'
						className='form-control'
						autoFocus
					/>

					<button
						disabled={select}
						className='btn-geo'
						type='button'
						onClick={e => {
							setCity('');
							getGeolocation(setCord);
						}}
					>
						<i className='fas fa-map-marker-alt'></i>
					</button>
				</div>
				<div className='form-group d-flex'>
					<select
						data-testid='select-city'
						disabled={!select}
						className='form-control'
						name='city_select'
						onChange={e => setCity(e.target.value)}
					>
						<option>Buenos Aires</option>
						<option>Santa Fe</option>
						<option>Parana</option>
						<option>Mendoza</option>
						<option>Cordoba</option>
					</select>
					<input
						onChange={e => setSelect(!select)}
						checked={select}
						data-testid='checkbox'
						type='checkbox'
					></input>
				</div>
				<button type='submit' className='btn btn-block btn-success'>
					Buscar
				</button>
			</form>
		</div>
	);
}

const getGeolocation = setCord => {
	navigator.geolocation.getCurrentPosition(function (position) {
		setCord({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		});
	});
};
