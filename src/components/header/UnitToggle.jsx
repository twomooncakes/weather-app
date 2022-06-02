import Button from "../UI/Button";
import { useWeatherCtx } from "../../store/WeatherContext";
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import { metric, us } from "../../utils/helpers";
import { useState } from "react";
import toast from "react-hot-toast";

const UnitToggle = () => {
  const { weatherOptions, changeWeatherOptions } = useWeatherCtx();
  const [useMetric, setUseMetric] = useState(true);

  const toggleUnit = () => {
    changeWeatherOptions({ unitGroup: (useMetric ? us : metric) });
    setUseMetric(!useMetric);
    toast(`Units changed!`,
    {
      icon: '🌡️',
      style: {
        borderRadius: '2rem',
        background: 'var(--secondaryColor)',
        color: 'var(--textColorLight)',
        fontFamily: 'var(--mainFont)',
      },
    }
  );
  }

  return (
    <Button onClick={toggleUnit} isBubble={true}>
      <DeviceThermostatOutlinedIcon />
      {weatherOptions.unitGroup.tempUnit}
    </Button>
  )
}

export default UnitToggle;