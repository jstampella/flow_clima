import React, { useState } from 'react';
// import components
import WeatherInfo from '../components/weather/weatherInfo';
import WeatherSearch from '../components/weather/weatherSearch';
import WeatherExtra from '../components/weather/weatherExtra';

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
	const [dataExtra, setDataExtra] = useState([]);
	return (
		<div>
			<WeatherSearch setData={setData} setDataExtra={setDataExtra} />
			<WeatherInfo dataInfo={data} />
			<WeatherExtra dataExtra={dataExtra} />
		</div>
	);
}
