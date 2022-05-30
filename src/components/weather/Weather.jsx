import { useEffect, useState } from "react";
import css from "./Weather.module.css";
import { useWeatherCtx } from "../../store/WeatherContext";
import WeatherDisplay from "./WeatherDisplay";

const Weather = () => {
  const { weatherData, changeWeatherData } = useWeatherCtx();


  const [location, setLocation] = useState("");

  const getNewLocation = () => {
    getData(location)
  }

  const getData = async (locationStr) => {
    const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationStr}?unitGroup=metric&key=MCEQ5R2WXTX6M8XNYFVTJYXEL&contentType=json`);
    const data = await res.json();
    console.log(data);
    changeWeatherData(data)
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });

    getData("54.6906,25.2698");

  }, [])
  

  return (
    <div className={css.weather_container}>
      <div>
        <h2>Weather in {weatherData.resolvedAddress}</h2>
        <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter your location. Use city name or geographical coordinates" />
        <button onClick={getNewLocation}>Enter</button>
      </div>
      {Object.keys(weatherData).length !== 0 && <WeatherDisplay data={weatherData.currentConditions} />}
    </div>
  )
}

export default Weather;