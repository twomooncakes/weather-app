import css from "./WeatherDisplay.module.css";
import { useWeatherCtx } from "../../store/WeatherContext";

const WeatherDisplay = () => {
  const { weatherData, weatherOptions } = useWeatherCtx();
  const { temp, conditions, windspeed } = weatherData.currentConditions;
  const unit = weatherOptions.unitOfMeasurement === "metric" ? "°C" : "°F";
  return (
    <div className={css.weatherDisplay}>
      <h1>{temp} {unit}</h1>
      <div>
        <p>{conditions}</p>
      </div>

      <div>
        <p>Day: {weatherData.days[0].tempmax + unit}</p>
        <p>Night: {weatherData.days[0].tempmin + unit}</p>
      </div>

      <div>
        <p>Wind Speeds {windspeed}</p>
      </div>
    </div>
  )
}

export default WeatherDisplay;