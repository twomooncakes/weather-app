import React, { useContext, useState } from 'react';

const WeatherContext = React.createContext({});

function WeatherProvider({ children }) {
  // move to utils
  const metric = { name: "metric", tempUnit: "°C", distanceUnit: "km" }
  const us = { name: "us", tempUnit: "°F", distanceUnit: "m" }

  const [weatherOptions, setWeatherOptions] = useState({
    unitGroup: metric
  });
  const [weatherData, setWeatherData] = useState({});

  const changeWeatherData = (newData) => {
    setWeatherData(newData);
  }

  const changeWeatherOptions = (newOptions) => {
    setWeatherData(newOptions);
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