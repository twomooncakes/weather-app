import { useWeatherCtx } from "../../store/WeatherContext";
import css from "./ForecastItem.module.css";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import { monthNamesShort, weekdayNamesShort } from "../../utils/helpers";
import { motion } from "framer-motion";

const ForecastItem = (props) => {
  const { weatherOptions } = useWeatherCtx();
  const { distanceUnit , tempUnit } = weatherOptions.unitGroup;
  const date = new Date(props.date);

  return (
    <motion.div
      className={`${css.forecastItem} bg ${props.item.icon}`}
    >
      <div className={css.forecastItem_date}>
        <h2>{weekdayNamesShort[date.getDay()]}</h2>
        <p>{`${date.getDate()} ${monthNamesShort[date.getMonth()]}`}</p>
      </div>
      
      <div>
        <WbSunnyOutlinedIcon className={css.icon} />
        <p>{`${props.item.tempmax} ${tempUnit}`}</p> 
      </div>

      <div>
        <NightlightOutlinedIcon className={css.icon} />
        <p>{`${props.item.tempmin} ${tempUnit}`}</p> 
      </div>

      <div>
        <AirOutlinedIcon className={css.icon} />
        <p>{props.item.windspeed ? `${props.item.windspeed} ${distanceUnit}/h` : "N/A"}</p> 
      </div>

      <div className={css.forecastItem_desc}>
        <p>
          {props.item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default ForecastItem;