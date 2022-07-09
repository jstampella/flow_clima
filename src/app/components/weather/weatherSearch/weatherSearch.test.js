import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import WeatherSearch from './WeatherSearch';

test('render test', () => {
	const setData = {
		temperature: '',
		description: '',
		himidity: '',
		wind_speed: '',
		city: '',
		country: '',
		error: null,
	};

	const setDataExtra = [];

	const component = render(
		<WeatherSearch setData={setData} setDataExtra={setDataExtra} />
	);

	console.log(component);
});
