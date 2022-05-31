import { useEffect, useState } from "react";
import css from "./Weather.module.css";
import { useWeatherCtx } from "../../store/WeatherContext";
import WeatherDisplay from "./WeatherDisplay";
import Geocode from "react-geocode";
import { getUserLocation } from "../../utils/helpers";
import Button from "../UI/Button";

const Weather = () => {
  const { weatherData, weatherOptions, changeWeatherData } = useWeatherCtx();
  const [location, setLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");


  const getNewLocation = async () => {
    // if(location.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)) {
    //   const res = await Geocode.fromLatLng("48.8583701", "2.2922926");
    //   const data = await res.json();
    //   console.log(data);
    // }
    await getData(location);
    setLocation("")
  }

  const getData = async (locationStr) => {
    const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationStr}?unitGroup=${weatherOptions.unitGroup.name}&key=MCEQ5R2WXTX6M8XNYFVTJYXEL&contentType=json`);
    const data = await res.json();
    console.log(data);
    changeWeatherData(data);
  }
  
  useEffect(() => {
    const getInitialLocation = async () => {
      navigator.geolocation.getCurrentPosition(async function(position) {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`)
        setCurrentLocation(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }
    
    getInitialLocation();

    // getData("54.6906,25.2698");
    getData(location ? location : "Vilnius");

  }, [])

  useEffect(() => {
    if(currentLocation.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)) {
      getData(currentLocation);
      setLocation("")
    }
  }, [currentLocation])
  
  

  return (
    <main className={css.weather_container}>
      <section className={`${css.weather}`}>
        <div className={css.weather_title}>
          <h1>Weather in {weatherData.resolvedAddress}</h1>
        </div>

        {Object.keys(weatherData).length !== 0 && <WeatherDisplay />}
      </section>


      <section className={css.input_container}>
        <h2>Choose new location</h2>
        <input className={css.input} value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter city name or coordinates" />
        <Button onClick={getNewLocation}>Let's go</Button>
      </section>

    </main>
  )
}

export default Weather;