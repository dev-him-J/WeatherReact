const base_url =
  "https://api.weatherapi.com/v1/current.json?key=bd8398e38cc74761ace111223240705";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${base_url}&q=${city}&aqi=yes`);

  return await response.json();
};

export const getDefaultWeatherData = async (lat, long) => {
  const response = await fetch(`${base_url}&q=${lat},${long}&aqi=yes`);

  return await response.json();
};
