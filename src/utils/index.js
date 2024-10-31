export const convertKelvinToCelsius = (kelvin) => kelvin - 273.15;
export const convertToReadableTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const convertToKmh = (speed) => (speed * 3.6).toFixed(2);
export const convertToKm = (meters) => (meters / 1000).toFixed(2);
