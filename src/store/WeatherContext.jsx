import React, { useContext, useState } from 'react';

const WeatherContext = React.createContext({});

function WeatherProvider({ children }) {
  const [weatherOptions, setWeatherOptions] = useState({
    unitOfMeasurement: "metric"
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