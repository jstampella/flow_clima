import React from 'react';
// import components
import WeatherInfo from '../components/weather/weatherInfo';
import WeatherSearch from '../components/weather/weatherSearch';
import WeatherExtra from '../components/weather/weatherExtra';

// import hooks
import { useWeather } from '../hooks/useWeather';

export default function Home() {
	const {
		data,
		dataExtra,
		setData,
		setDataExtra,
		getDataApi,
		getDataExtraApi,
	} = useWeather();
	return (
		<div>
			<WeatherSearch
				setData={setData}
				setDataExtra={setDataExtra}
				getDataApi={getDataApi}
				getDataExtraApi={getDataExtraApi}
			/>
			<WeatherInfo data={data} />
			<WeatherExtra dataExtra={dataExtra} />
		</div>
	);
}
