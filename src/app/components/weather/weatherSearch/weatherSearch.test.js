import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
// import { prettyDOM } from '@testing-library/dom';
import WeatherSearch from './WeatherSearch';
import { useWeather } from '../../../hooks/useWeather';

test('render test', () => {
	const { setData, setDataExtra, getDataApi, getDataExtraApi } = renderHook(
		() => useWeather()
	);

	const component = render(
		<WeatherSearch
			setData={setData}
			setDataExtra={setDataExtra}
			getDataApi={getDataApi}
			getDataExtraApi={getDataExtraApi}
		/>
	);
	// component.getByText('Buenos Aires');
	expect(component.container).toHaveTextContent('Buenos Aires');
	const select = component.getByTestId('select-city');
	expect(select).toHaveAttribute('disabled');
	// (component.getAllByTestId('select-city')).toHaveAttribute('disabled');
	// console.log(data, dataExtra);
});

test('clicking the button checkbox', () => {
	const { setData, setDataExtra, getDataApi, getDataExtraApi } = renderHook(
		() => useWeather()
	);

	const component = render(
		<WeatherSearch
			setData={setData}
			setDataExtra={setDataExtra}
			getDataApi={getDataApi}
			getDataExtraApi={getDataExtraApi}
		/>
	);

	// const submit = component.getByText(/Buscar/i);
	// fireEvent.click(submit);

	const checkbox = component.getByTestId('checkbox');
	fireEvent.click(checkbox);
});

test('clicking the button submit', () => {
	const { getDataApi, getDataExtraApi } = renderHook(() => useWeather());

	const setData = jest.fn();
	const setDataExtra = jest.fn();
	const component = render(
		<WeatherSearch
			setData={setData}
			setDataExtra={setDataExtra}
			getDataApi={getDataApi}
			getDataExtraApi={getDataExtraApi}
		/>
	);

	const submit = component.getByText(/Buscar/i);
	fireEvent.click(submit);
});
