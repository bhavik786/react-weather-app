import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import tempLogo from "../asset/TempLogo.png";
import { convertKelvinToCelsius } from "../utils/index.js";

/**
 * WeatherSummary component displays the current weather summary, including the
 * location name and temperature.
 *
 * @param {Object} props - The props for the component.
 * @param {Object} props.weatherData - The weather data object containing temperature and location.
 * @param {boolean} props.isLoading - Boolean indicating if the data is currently loading.
 */
const WeatherSummary = ({ weatherData, isLoading }) => {
  // Calculate temperature in Celsius if available, otherwise return 'N/A'
  const temperature = weatherData?.main?.temp
    ? convertKelvinToCelsius(weatherData.main.temp).toFixed(2) + "°C"
    : "N/A";

  return (
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-semibold">
        {isLoading ? (
          <Skeleton width={100} />
        ) : (
          weatherData?.name || "Location Unknown"
        )}
      </h2>
      <div className="flex items-center justify-center space-x-4">
        <span className="text-6xl font-bold">
          {isLoading ? <Skeleton width={100} height={70} /> : temperature}
        </span>
        <img src={tempLogo} alt="Temperature icon" className="w-16 h-16" />
      </div>
    </div>
  );
};

export default WeatherSummary;
