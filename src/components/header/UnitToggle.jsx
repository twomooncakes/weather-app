import Button from "../UI/Button";
import { useWeatherCtx } from "../../store/WeatherContext";

const UnitToggle = () => {
  const { weatherOptions } = useWeatherCtx();
  return (
    <Button>{weatherOptions.unitGroup.name}</Button>
  )
}

export default UnitToggle;