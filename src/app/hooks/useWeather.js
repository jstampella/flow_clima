import { useState } from 'react';

// add Api
import { getWeatherApi, getWeatherCurrentApi } from '../api/weatherApi';

export const useWeather = () => {
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

	const getDataApi = (city, cord) => {
		getWeatherCurrentApi(city, cord).then(result => {
			if (result.cod === 200) {
				setData({
					temperature: result.main.temp,
					description: result.weather[0].description,
					humidity: result.main.humidity,
					wind_speed: result.wind.speed,
					city: result.name,
					country: result.sys.country,
					error: null,
				});
			} else {
				setData({
					error: 'Error al obtener datos',
				});
			}
		});
	};

	const getDataExtraApi = (city, cord) => {
		getWeatherApi(city, cord).then(result => {
			// 	// muestra los resultados si el cod de peticion es 200
			if (result.cod === '200') {
				const dataList = categorizeResults(result.list);
				setDataExtra(dataList);
			} else if (result.cod === '404' || result.error) {
				// 		// if not found
				setDataExtra({
					error: result.error
						? result.error
						: 'Ocurrio un error al obtener los datos',
				});
			}
		});
	};
	return {
		data,
		setData,
		dataExtra,
		setDataExtra,
		getDataApi,
		getDataExtraApi,
	};
};

// funcion que refactoriza los datos del tiempo en formato de array
const categorizeResults = list => {
	const dates = list
		.map((item, i) => {
			return item.dt_txt.split(' ')[0];
		})
		.filter((item, i, currArr) => {
			return currArr.indexOf(item) === i;
		});

	// console.log('dates', dates);

	// create a new object with those dates as keys
	const sortedResults = [];
	for (const theDate of dates) {
		sortedResults.push({
			name: theDate,
			weathers: [],
		});
	}

	// for each item in the json.list
	for (const item of list) {
		const itemDate = item.dt_txt.split(' ')[0]; // get the date in string form

		// if sortedResults.name = itemDate then push that item into that sortedResult's weathers array
		for (const result of sortedResults) {
			if (result.name === itemDate) {
				result.weathers.push(item);
			}
		}
	}

	// console.log('sortedResults', sortedResults);
	return sortedResults;
};
