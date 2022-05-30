import { useWeatherCtx } from "../../store/WeatherContext";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';

const ForecastItem = (props) => {
  const { weatherOptions } = useWeatherCtx();
  const { distanceUnit , tempUnit } = weatherOptions.unitGroup;
  return (
    <div>
      <div>
        <p><WbSunnyOutlinedIcon /> {props.item.tempmax + tempUnit}</p>
        <p><NightlightOutlinedIcon /> {props.item.tempmin + tempUnit}</p>
      </div>

      <div>
        <p><AirOutlinedIcon /> {props.item.windspeed ? `${props.item.windspeed} ${distanceUnit}/h` : "N/A"}</p>
      </div>
    </div>
  )
}

export default ForecastItem;