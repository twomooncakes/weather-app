import css from "./WeatherDisplay.module.css";
import { useWeatherCtx } from "../../store/WeatherContext";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ForecastItem from "./ForecastItem";
import { monthNamesShort, weekdayNamesFull } from "../../utils/helpers";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WeatherDisplay = () => {
  const { weatherData, weatherOptions } = useWeatherCtx();
  const { temp, conditions, windspeed, icon } = weatherData.currentConditions;
  const { distanceUnit , tempUnit } = weatherOptions.unitGroup;

  const fortnightForecast = weatherData.days.slice(1,15);
  const date = new Date(weatherData.days[0].datetime);

  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    console.log(slider.current.scrollWidth, slider.current.offsetWidth);
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, [])
  

  return (
    <div className={css.weatherDisplay}>
      <motion.section
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }} 
        className={`${css.today} bg ${icon}`}
      >
        
        <div className={css.today_left}>
          <h1>{temp} {tempUnit}</h1>
          <h2>{`${monthNamesShort[date.getMonth()]} ${date.getDate()}, ${weekdayNamesFull[date.getDay()]}`}</h2>
          <p>{conditions}</p>
        </div>

        <div className={css.today_right}>
          <div>
            <WbSunnyOutlinedIcon className={css.icon} />
            <p>{weatherData.days[0].tempmax + tempUnit}</p>
          </div>

          <div>
            <NightlightOutlinedIcon className={css.icon} />
            <p>{weatherData.days[0].tempmin + tempUnit}</p>
          </div>

          <div>
            <AirOutlinedIcon className={css.icon} />
            <p>{windspeed ? `${windspeed} ${distanceUnit}/h` : "N/A"}</p>
          </div>
          
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={css.fortnightForecast_container}
      >
        <div className={css.fortnightForecast_title}>
          <h2>14 Day Forecast</h2>
        </div>
        <motion.div ref={slider} className="slider">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={`${css.fortnightForecast} inner-slider`}>
            {fortnightForecast.length !== 0 && fortnightForecast.map(day => <ForecastItem key={day.datetime} date={day.datetime} item={day} />)}
          </motion.div>
        </motion.div>
        
      </motion.section>

    </div>
  )
}

export default WeatherDisplay;