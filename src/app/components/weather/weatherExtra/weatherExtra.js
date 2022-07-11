import React from 'react';

// import component
import ItemWeather from './ItemWeather';
// import utils
import { formatDate, formatTime } from '../../../utils/helpers';

import './weatherExtra.scss';
export default function WeatherExtra({ dataExtra }) {
	return !dataExtra.error && dataExtra.length > 0 ? (
		<div className='weatherExtra'>
			{dataExtra.loading ? (
				<div className='card card-body mt-2 text-center'>
					<i className='fas fa-spinner fa-spin fa-1x'></i>
				</div>
			) : (
				<div className='card card-body mt-2 animated fadeInUp'>
					{dataExtra.map((result, i) => {
						return (
							<div className='date' key={i}>
								<h3>{formatDate(result.name)}</h3>
								<ul>
									{result.weathers
										.slice(0, 4) // the first 4
										.map((weatherItem, i) => (
											<ItemWeather
												key={i}
												date={formatTime(weatherItem.dt_txt.split(' ')[1])}
												icon={weatherItem.weather[0].icon}
												main={weatherItem.weather[0].main}
												description={weatherItem.weather[0].description}
												max={Math.round(weatherItem.main.temp_max)}
												min={Math.round(weatherItem.main.temp_min)}
											/>
										))}
								</ul>

								<ul>
									{result.weathers
										.slice(4) // the remaining
										.map((weatherItem, i) => (
											<ItemWeather
												key={i}
												date={formatTime(weatherItem.dt_txt.split(' ')[1])}
												icon={weatherItem.weather[0].icon}
												main={weatherItem.weather[0].main}
												description={weatherItem.weather[0].description}
												max={Math.round(weatherItem.main.temp_max)}
												min={Math.round(weatherItem.main.temp_min)}
											/>
										))}
								</ul>
							</div>
						);
					})}
				</div>
			)}
		</div>
	) : null;
}
