import axios from 'axios';

import { WEATHER_KEY } from '../keys';

export async function getWeatherCurrentApi(cityValue, cord) {
	let API_URL = null;
	if (cityValue)
		API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${WEATHER_KEY}&units=metric&lang=es`;
	else
		API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${cord.latitude}&lon=${cord.longitude}&appid=${WEATHER_KEY}&units=metric&lang=es`;

	if (API_URL)
		return axios
			.get(API_URL)
			.then(response => {
				return response.data;
			})
			.catch(error => {
				return { error: 'Verifique los datos', extra: error };
			});
	else return { error: 'Verifique los datos' };
}

// Obtener 5 dias extendido clima
export async function getWeatherApi(cityValue, cord) {
	let API_URL = null;
	if (cityValue)
		API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&units=metric&appid=${WEATHER_KEY}&lang=es`;
	else
		API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${cord.latitude}&lon=${cord.longitude}&units=metric&appid=${WEATHER_KEY}&lang=es`;
	if (API_URL)
		return axios
			.get(API_URL)
			.then(response => {
				return response.data;
			})
			.catch(error => {
				return { error: 'Verifique los datos', extra: error };
			});
	else return { error: 'Verifique los datos' };
}
