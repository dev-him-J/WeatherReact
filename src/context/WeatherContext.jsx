import { createContext, useContext, useState } from "react";
import { getDefaultWeatherData, getWeatherDataForCity } from "../api";

const weatherContext = createContext(null);

export const useWeather = () => {
  return useContext(weatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const getWeatherData = () => {
    if (!searchCity) {
      return;
    }
    getWeatherDataForCity(searchCity)
      .then((res) => {
        setData(res);
      })
      .catch(() => alert("City not found"));
  };

  const fetchCurrentCityData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getDefaultWeatherData(
        position.coords.latitude,
        position.coords.longitude
      ).then((res) => {
        setData(res);
      });
    });
  };

  return (
    <weatherContext.Provider
      value={{
        data,
        searchCity,
        getWeatherData,
        setSearchCity,
        fetchCurrentCityData,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};
