import { useWeather } from "../context/WeatherContext";

const Card = () => {
  const weather = useWeather();
  console.log("weather", weather);

  console.log("weather", weather);
  return (
    <div className="card">
      <img src={weather?.data?.current?.condition?.icon} alt="logo" />
      <h1>{weather?.data?.current?.temp_c}</h1>
      <h5>
        {weather?.data?.location?.name}, {weather?.data?.location?.region},
        {weather?.data?.location?.country}
      </h5>
    </div>
  );
};

export default Card;
