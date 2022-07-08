import { WEATHER_KEY } from "../keys";
export async function getWeatherApi(cityValue, countryValue) {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;

  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    return result;
  } catch (err) {
    return err;
  }
}
