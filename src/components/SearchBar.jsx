import { useWeather } from "../context/WeatherContext";

const SearchBar = () => {
  const { setSearchCity, searchCity } = useWeather();

  return (
    <>
      <input
        className="input_field"
        placeholder="Search city"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
