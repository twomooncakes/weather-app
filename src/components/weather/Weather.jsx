import { useEffect, useState } from "react";
import css from "./Weather.module.css";
import { useWeatherCtx } from "../../store/WeatherContext";
import WeatherDisplay from "./WeatherDisplay";
import Button from "../UI/Button";
import { motion } from "framer-motion";
import Loader from "../UI/Loader";
import toast from "react-hot-toast";

const Weather = () => {
  const { weatherData, weatherOptions, changeWeatherData } = useWeatherCtx();
  const [location, setLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  }

  const getNewLocation = async () => {
    if(location.length <= 1) {
      toast(`Invalid or empty location!`,
        {
          icon: '❌',
          style: {
            borderRadius: '2rem',
            background: 'var(--secondaryColor)',
            color: 'var(--textColorLight)',
            fontFamily: 'var(--mainFont)',
          },
        }
      );
      return;
    }
    setLoading(true);
    scrollToTop();
    await getData(location);
    setLocation("");
    setLoading(false);
  }

  const getData = async (locationStr) => {
    const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationStr}?unitGroup=${weatherOptions.unitGroup.name}&key=MCEQ5R2WXTX6M8XNYFVTJYXEL&contentType=json`);
    if(res.status === 200) {
      const data = await res.json();
      console.log(data);
      changeWeatherData(data);
      setLocation("");
      setLoading(false);
      return;
    }

    if(res.status === 400) {
      setLoading(false);
      toast(`Invalid location!`,
        {
          icon: '❌',
          style: {
            borderRadius: '2rem',
            background: 'var(--secondaryColor)',
            color: 'var(--textColorLight)',
            fontFamily: 'var(--mainFont)',
          },
        }
      );
      return;
    }

    toast(`Something went wrong!`,
      {
        icon: '❌',
        style: {
          borderRadius: '2rem',
          background: 'var(--secondaryColor)',
          color: 'var(--textColorLight)',
          fontFamily: 'var(--mainFont)',
        },
      }
    );
  }
  
  useEffect(() => {
    const getInitialLocation = async () => {
      navigator.geolocation.getCurrentPosition(async function(position) {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`)
        setCurrentLocation(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }
    getInitialLocation();
    getData(location ? location : "Vilnius");
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(currentLocation.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)) {
      getData(currentLocation);
      setLocation("")
    } // eslint-disable-next-line
  }, [currentLocation]) 
  
  

  return (
    <main className={css.weather_container}>
      {loading ? <Loader /> :
      <>
        <section className={`${css.weather}`}>
          <div className={css.weather_title}>
            <h1>Weather in <br/>{weatherData.resolvedAddress}</h1>
          </div>

          {Object.keys(weatherData).length !== 0 && <WeatherDisplay />}
        </section>

        <section className={css.input_container}>
          <h2>Choose new location</h2>
          <motion.input 
            whileFocus={{ scale: 1.1 }} 
            className={css.input} 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} type="text" 
            placeholder="Enter city name or coordinates" 
          />
          <Button onClick={getNewLocation}>Let's go</Button>
        </section>
      </>}


    </main>
  )
}

export default Weather;