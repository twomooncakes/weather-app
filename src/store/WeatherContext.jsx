import React, { useContext, useState } from 'react';
import { metric } from "../utils/helpers";

const WeatherContext = React.createContext({});

function WeatherProvider({ children }) {
  
  const [weatherOptions, setWeatherOptions] = useState({
    unitGroup: metric
  });
  const [weatherData, setWeatherData] = useState({});

  const changeWeatherData = (newData) => {
    setWeatherData(newData);
  }

  const changeWeatherOptions = (newOptions) => {
    setWeatherOptions(newOptions);
  }

  return (
    <WeatherContext.Provider 
      value={{
        weatherData,
        weatherOptions,
        changeWeatherData,
        changeWeatherOptions,
      }}
    >
        {children}
    </WeatherContext.Provider>
);
}

export default WeatherProvider;

export function useWeatherCtx() {
  return useContext(WeatherContext);
}