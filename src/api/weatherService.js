import axios from "axios";

/**
 * Fetches weather data for a given city from the OpenWeather API.
 * @param {string} city - The name of the city for which to fetch weather data.
 * @returns {Promise<Object>} - The weather data for the specified city.
 * @throws Will throw an error if the API request fails.
 */
export const getWeatherData = async (city) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    await wait(500); // just for the skeleton to appear on screen
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
