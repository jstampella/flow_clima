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
			<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={main} />
			<span className='description'>{description}</span>
			<div className='info_temp'>
				<span className='high'>Max: {max}°C</span>
				<span className='low'>Min: {min}°C</span>
			</div>
		</li>
	);
}
