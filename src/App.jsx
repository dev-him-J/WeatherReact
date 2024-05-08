import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import "./App.css";
import { useWeather } from "./context/WeatherContext";
import { useEffect } from "react";
function App() {
  const weather = useWeather();
  useEffect(() => {
    weather.fetchCurrentCityData();
  }, []);
  console.log("weatherAppp", weather);
  return (
    <>
      <h1>Weather Forecast</h1>
      <SearchBar />
      <Button value="Search" onClick={weather.getWeatherData} />
      <Card />
      <Button value="Refresh" />
    </>
  );
}

export default App;
