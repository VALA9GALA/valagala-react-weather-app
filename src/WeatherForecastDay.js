import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}`;
  }
  function minTemp() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        
        className="forecast-icon"
      />
      <div className="ForecastTemps">
        <span className="ForecastTempsMax">{maxTemp()}</span>{" "}
        <span className="ForecastTempsMin">/{minTemp()}</span>
      </div>
    </div>
  );
}
