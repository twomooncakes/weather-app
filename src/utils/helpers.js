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