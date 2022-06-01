import Button from "../UI/Button";
import { useWeatherCtx } from "../../store/WeatherContext";
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import { metric, us } from "../../utils/helpers";
import { useState } from "react";

const UnitToggle = () => {
  const { weatherOptions, changeWeatherOptions } = useWeatherCtx();
  const [useMetric, setUseMetric] = useState(true);

  const toggleUnit = () => {
    changeWeatherOptions({ unitGroup: (useMetric ? us : metric) });
    setUseMetric(!useMetric);
  }

  return (
    <Button onClick={toggleUnit} isBubble={true}>
      <DeviceThermostatOutlinedIcon />
      {weatherOptions.unitGroup.tempUnit}
    </Button>
  )
}

export default UnitToggle;