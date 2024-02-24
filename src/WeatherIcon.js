import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./App.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const colorTime = {
    "01d": "#f4a8b5",
    "01n": "#a06e77",
    "02d": "#f4a8b5",
    "02n": "#a06e77",
    "03d": "#f4a8b5",
    "03n": "#a06e77",
    "04d": "#f4a8b5",
    "04n": "#a06e77",
    "09d": "#f4a8b5",
    "09n": "#a06e77",
    "10d": "#f4a8b5",
    "10n": "#a06e77",
    "11d": "#f4a8b5",
    "11n": "#a06e77",
    "13d": "#f4a8b5",
    "13n": "#a06e77",
    "50d": "#f4a8b5",
    "50n": "#a06e77",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={colorTime[props.code]}
      animate={true}
      className="weather-icon"
    />
  );
}
