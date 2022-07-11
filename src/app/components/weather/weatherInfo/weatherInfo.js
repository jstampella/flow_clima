import React from 'react';

// add scss
import './weatherInfo.scss';

/**
 * Componente que muestra la informacion del clima
 * a su vez comprueba si contiene error la consulta y muestra el error
 */
export default function WeatherInfo({ data }) {
	return (
		<div className='weather-info'>
			{data.error && (
				<div className='alert alert-danger'>
					<p>{data.error}</p>
				</div>
			)}
			{data.temperature ? (
				<div className='card card-body mt-2 animated fadeInUp'>
					<div className='titulo'>Datos actuales</div>
					{data.city && data.country && (
						<p>
							<i className='fas fa-location-arrow'></i> Ubicacion: {data.city},{' '}
							{data.country}
						</p>
					)}
					{data.temperature && (
						<p>
							<i className='fas fa-temperature-low'></i> Temperatura:{' '}
							{data.temperature} ℃, {data.description}
						</p>
					)}
					{data.humidity && (
						<p>
							<i className='fas fa-water'></i> Humedad: {data.humidity}%
						</p>
					)}
					{data.wind_speed && (
						<p>
							<i className='fas fa-wind'></i> Velocidad viento:{' '}
							{data.wind_speed} m/s
						</p>
					)}
				</div>
			) : data.loading ? (
				<div className='card card-body mt-2 text-center'>
					<i className='fas fa-spinner fa-spin fa-6x'></i>
				</div>
			) : !data.error ? (
				<div className='card card-body mt-2 text-center'>
					<i className='fas fa-sun fa-10x'></i>
				</div>
			) : null}
		</div>
	);
}
