import React from "react";
import { getWeatherApi } from "../../../api/weatherApi";

export default function weatherSearch({ setData }) {
  const getWeather = (e) => {
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    getWeatherApi(cityValue, countryValue).then((result) => {
      setData({
        temperature: result.main.temp,
        description: result.weather[0].description,
        humidity: result.main.humidity,
        wind_speed: result.wind.speed,
        city: result.name,
        country: result.sys.country,
        error: null,
      });
    });
    e.preventDefault();
  };
  return (
    <div className="card card-body">
      <form onSubmit={getWeather}>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="ingrese una ciudad"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="ingrese su pais"
            className="form-control"
          />
        </div>
        <button className="btn btn-block btn-success">Buscar</button>
      </form>
    </div>
  );
}
