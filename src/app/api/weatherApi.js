import axios from 'axios';

import { WEATHER_KEY } from '../keys';

export async function getWeatherApi(cityValue, countryValue) {
	const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&units=imperial&appid=${WEATHER_KEY}`;
	//   const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;

	return axios
		.get(API_URL)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return { error: 'Verifique los datos', extra: error };
		});
}
