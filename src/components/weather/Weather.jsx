import { useEffect, useState } from "react";
import css from "./Weather.module.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});

  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");

  const getNewLocation = () => {
    getData(location)
  }

  const getData = async (locationStr) => {
    const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationStr}?unitGroup=metric&key=MCEQ5R2WXTX6M8XNYFVTJYXEL&contentType=json`);
    const data = await res.json();
    console.log(data);
    setCity(data.timezone.split("/")[1]);
    setWeatherData(data);
  }
  

  useEffect(() => {

    getData("54.6906,25.2698");
    
    return () => {
      setWeatherData({});
    }
  }, [])
  

  return (
    <div className={css.weather_container}>
      <h2>Weather in {city ? city : location }</h2>
      <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter your location. Use city name or geographical coordinates" />
      <button onClick={getNewLocation}>Enter</button>
    </div>
  )
}

export default Weather;