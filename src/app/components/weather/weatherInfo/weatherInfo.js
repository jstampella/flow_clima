import React, { useEffect } from "react";

export default function weatherInfo({ dataInfo }) {
  useEffect(() => {
    console.log(dataInfo);
  }, [dataInfo]);
  return (
    <div>
      {dataInfo.error && (
        <div className="alert alert-danger">
          <p>{dataInfo.error}</p>
        </div>
      )}
      {dataInfo.temperature ? (
        <div className="card card-body mt-2 animated fadeInUp">
          {dataInfo.city && dataInfo.country && (
            <p>
              <i className="fas fa-location-arrow"></i> Location:{" "}
              {dataInfo.city}, {dataInfo.country}
            </p>
          )}
          {dataInfo.temperature && (
            <p>
              <i className="fas fa-temperature-low"></i> Temperature:{" "}
              {dataInfo.temperature} ℃, {dataInfo.description}
            </p>
          )}
          {dataInfo.humidity && (
            <p>
              <i className="fas fa-water"></i> Humidity: {dataInfo.humidity}
            </p>
          )}
          {dataInfo.wind_speed && (
            <p>
              <i className="fas fa-wind"></i> Wind Speed: {dataInfo.wind_speed}
            </p>
          )}
        </div>
      ) : (
        <div className="card card-body mt-2 text-center">
          <i className="fas fa-sun fa-10x"></i>
        </div>
      )}
    </div>
  );
}
