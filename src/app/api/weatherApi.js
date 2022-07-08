import axios from 'axios';

import { WEATHER_KEY } from '../keys';

export async function getWeatherCurrentApi(cityValue) {
	const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${WEATHER_KEY}&units=metric&lang=es`;

	return axios
		.get(API_URL)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return { error: 'Verifique los datos', extra: error };
		});
}

// Obtener 5 dias extendido clima
export async function getWeatherApi(cityValue) {
	const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&units=metric&appid=${WEATHER_KEY}&lang=es`;

	return axios
		.get(API_URL)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return { error: 'Verifique los datos', extra: error };
		});
}
