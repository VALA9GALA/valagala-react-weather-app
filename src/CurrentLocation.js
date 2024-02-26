/*import React from "react";

export default function CurrentLocation() {

}

function getPositionWeather(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiEndpoint =
    "https://api.openweathermap.org/data/2.5/weather?";
  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";

  let apiUrl = `${apiEndpoint}lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature, displayForecast);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPositionWeather);
}

let locationButton = document.querySelector("#location-btn");
locationButton.addEventListener("click", getPosition);*/
