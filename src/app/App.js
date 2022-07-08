import React from "react";

//import components
import WeatherInfo from "./components/weather/weatherInfo";
import WeatherSearch from "./components/weather/weatherSearch";

const App = () => (
  <div className="container p-4">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <WeatherSearch />
        <WeatherInfo />
      </div>
    </div>
  </div>
);

export default App;
