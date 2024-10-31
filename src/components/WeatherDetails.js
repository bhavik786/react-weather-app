import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import sunriseLogo from "../asset/sunrise.png";
import sunsetLogo from "../asset/sunset.png";
import cloudsLogo from "../asset/clouds.png";
import feelsLikeLogo from "../asset/feelsLike.png";
import humidityLogo from "../asset/humidity.png";
import pressureLogo from "../asset/pressure.png";
import visibilityLogo from "../asset/visibility.png";
import windLogo from "../asset/wind.png";

import {
  convertKelvinToCelsius,
  convertToReadableTime,
  convertToKmh,
  convertToKm,
} from "../utils/index.js";

/**
 * WeatherDetails component to display detailed weather information.
 *
 * @param {Object} props - The props for the component.
 * @param {Object} props.weatherData - The weather data object.
 * @param {boolean} props.isLoading - Loading state to show skeletons.
 */
const WeatherDetails = ({ weatherData, isLoading }) => {
  // Array of weather details to be displayed
  const details = [
    {
      label: "Sunrise",
      value: convertToReadableTime(weatherData?.sys.sunrise),
      icon: sunriseLogo,
    },
    {
      label: "Sunset",
      value: convertToReadableTime(weatherData?.sys.sunset),
      icon: sunsetLogo,
    },
    {
      label: "Humidity",
      value: weatherData?.main.humidity + " %",
      icon: humidityLogo,
    },
    {
      label: "Pressure",
      value: weatherData?.main.pressure + " hPa",
      icon: pressureLogo,
    },
    {
      label: "Wind",
      value: convertToKmh(weatherData?.wind.speed) + " km/h",
      icon: windLogo,
    },
    {
      label: "Clouds",
      value: weatherData?.clouds.all + " %",
      icon: cloudsLogo,
    },
    {
      label: "Feels like",
      value: weatherData?.main.feels_like
        ? convertKelvinToCelsius(weatherData?.main.feels_like).toFixed(2) + "°C"
        : "N/A",
      icon: feelsLikeLogo,
    },
    {
      label: "Visibility",
      value: convertToKm(weatherData?.visibility) + " km",
      icon: visibilityLogo,
    },
  ];

  return (
    <div className="space-y-4 bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-gray-600 text-xl font-semibold text-center">
        Weather Details
      </h3>
      <div className="grid grid-cols-4 gap-6">
        {details.map((detail, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-xl flex flex-col items-center text-center"
          >
            <img
              src={detail.icon}
              alt={`${detail.label} icon`}
              className="mb-2 h-6 w-6"
            />
            <p className="text-gray-500 text-sm">{detail.label}</p>
            <p className="text-xl font-semibold">
              {isLoading ? <Skeleton width={50} /> : detail.value || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeatherDetails;
