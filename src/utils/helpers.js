export async function getUserLocation() {
  let coordinates;
  navigator.geolocation.getCurrentPosition(async function(position) {
    coordinates = [position.coords.latitude, position.coords.longitude];
    console.log(coordinates);
    //console.log("Latitude is :", position.coords.latitude);
    //console.log("Longitude is :", position.coords.longitude);
    //coordinates = `${position.coords.latitude},${position.coords.longitude}`;
  });
  console.log(coordinates);
  return coordinates;
}

export const metric = { name: "metric", tempUnit: "°C", distanceUnit: "km" }
export const us = { name: "us", tempUnit: "°F", distanceUnit: "m" }

export const weekdayNamesShort = [  
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
]

export const weekdayNamesFull = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const monthNamesShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

// export function getWeatherClass(str) {
//   let classTitle = "";
//   str.toLowerCase().includes("clear") ? classTitle = "clear" : (str.toLowerCase().includes("rain") ? classTitle = "rain" : (str.toLowerCase().includes("cloudy") ? "cloudy" : "default" ))
//   return classTitle;
// }