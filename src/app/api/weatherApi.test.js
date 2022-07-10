// api/getParticipants.test.js
import { getWeatherCurrentApi, getWeatherApi } from './weatherApi';

jest.spyOn(window, 'fetch');

const cityValue = 'parana';

describe('get Api weather', () => {
	it('check property api getWeatherApi', async () => {
		const data = await getWeatherApi(cityValue);
		expect(data).toHaveProperty('list');
		expect(data).toHaveProperty('cod');
	});

	it('check property api getWeatherCurrentApi', async () => {
		const data = await getWeatherCurrentApi(cityValue);
		expect(data).toHaveProperty('main');
		expect(data).toHaveProperty('cod');
	});
});
