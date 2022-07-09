import React from 'react';

import './itemWeather.scss';

/**
 * Componente que renderiza item de clima por hora
 */
export default function ItemWeather({
	date,
	icon,
	main,
	description,
	max,
	min,
}) {
	return (
		<li>
			<span>
				<strong>{date}</strong>
			</span>
			<img src={`http://openweathermap.org/img/w/${icon}.png`} alt={main} />
			<span className='description'>{description}</span>
			<div className='info_temp'>
				<span className='high'>Max: {max}℃</span>
				<span className='low'>Min: {min}℃</span>
			</div>
		</li>
	);
}
