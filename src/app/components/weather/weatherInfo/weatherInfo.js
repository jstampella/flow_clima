import React from 'react';
// add scss
import './weatherInfo.scss';

/**
 * Componente que muestra la informacion del clima
 * a su vez comprueba si contiene error la consulta y muestra el error
 */
export default function weatherInfo({ dataInfo }) {
	return (
		<div className='weather-info'>
			{dataInfo.error && (
				<div className='alert alert-danger'>
					<p>{dataInfo.error}</p>
				</div>
			)}
			{dataInfo.temperature ? (
				<div className='card card-body mt-2 animated fadeInUp'>
					{dataInfo.city && dataInfo.country && (
						<p>
							<i className='fas fa-location-arrow'></i> Ubicacion:{' '}
							{dataInfo.city}, {dataInfo.country}
						</p>
					)}
					{dataInfo.temperature && (
						<p>
							<i className='fas fa-temperature-low'></i> Temperatura:{' '}
							{dataInfo.temperature} ℃, {dataInfo.description}
						</p>
					)}
					{dataInfo.humidity && (
						<p>
							<i className='fas fa-water'></i> Humedad: {dataInfo.humidity}
						</p>
					)}
					{dataInfo.wind_speed && (
						<p>
							<i className='fas fa-wind'></i> Velocidad viento:{' '}
							{dataInfo.wind_speed} m/s
						</p>
					)}
				</div>
			) : (
				<div className='card card-body mt-2 text-center'>
					<i className='fas fa-sun fa-10x'></i>
				</div>
			)}
		</div>
	);
}
