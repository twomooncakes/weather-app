import css from "./WeatherDisplay.module.css";
import { useWeatherCtx } from "../../store/WeatherContext";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ForecastItem from "./ForecastItem";
import { monthNamesShort, weekdayNamesFull } from "../../utils/helpers";

const WeatherDisplay = () => {
  const { weatherData, weatherOptions } = useWeatherCtx();
  const { temp, conditions, windspeed } = weatherData.currentConditions;
  const { distanceUnit , tempUnit } = weatherOptions.unitGroup;
  const fortnightForecast = weatherData.days.slice(1,15);
  const date = new Date(weatherData.days[0].datetime);
  return (
    <div className={css.weatherDisplay}>
      <section className={css.today}>
        
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
      </section>

      <section className={css.fortnightForecast_container}>
        <div className={css.fortnightForecast_title}>
          <h2>14 Day Forecast</h2>
        </div>
        <div className={css.fortnightForecast}>
          {fortnightForecast.length !== 0 && fortnightForecast.map(day => <ForecastItem key={day.datetime} date={day.datetime} item={day} />)}
        </div>
        
      </section>

    </div>
  )
}

export default WeatherDisplay;