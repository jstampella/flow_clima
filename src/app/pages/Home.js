import React, { useState } from 'react';
// import components
import WeatherInfo from '../components/weather/weatherInfo';
import WeatherSearch from '../components/weather/weatherSearch';

export default function Home() {
	const [data, setData] = useState({
		temperature: '',
		description: '',
		himidity: '',
		wind_speed: '',
		city: '',
		country: '',
		error: null,
	});
	return (
		<div>
			<WeatherSearch setData={setData} />
			<WeatherInfo dataInfo={data} />
		</div>
	);
}
