import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahr(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="main-temp">{Math.round(props.fahrTemp)}</span>
        <span className="unit">
          °F |
          <a href="/" onClick={showCel}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrTemp - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <span className="main-temp">{Math.round(celsius)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showFahr}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
