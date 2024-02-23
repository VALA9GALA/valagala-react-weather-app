import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="pink"
      size={100}
      animate={true}
      className="weather-icon"
    />
  );
}
