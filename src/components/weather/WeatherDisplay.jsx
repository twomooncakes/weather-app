import css from "./WeatherDisplay.module.css";
import { useWeatherCtx } from "../../store/WeatherContext";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ForecastItem from "./ForecastItem";

const WeatherDisplay = () => {
  const { weatherData, weatherOptions } = useWeatherCtx();
  const { temp, conditions, windspeed } = weatherData.currentConditions;
  const { distanceUnit , tempUnit } = weatherOptions.unitGroup;
  const fortnightForecast = weatherData.days.slice(1,15);
  return (
    <div className={css.weatherDisplay}>
      <section className={css.today}>
        
        <div className={css.today_left}>
          <h1>{temp} {tempUnit}</h1>
          <p>{conditions}</p>
        </div>

        <div className={css.today_right}>
          <p><WbSunnyOutlinedIcon /> {weatherData.days[0].tempmax + tempUnit}</p>
          <p><NightlightOutlinedIcon /> {weatherData.days[0].tempmin + tempUnit}</p>
          <p><AirOutlinedIcon /> {windspeed ? `${windspeed} ${distanceUnit}/h` : "N/A"}</p>
        </div>
      </section>

      <section className={css.fortnightForecast}>
        {fortnightForecast.length !== 0 && fortnightForecast.map(day => <ForecastItem key={day.datetime} item={day} />)}
      </section>

    </div>
  )
}

export default WeatherDisplay;