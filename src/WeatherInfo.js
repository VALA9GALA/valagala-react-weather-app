import React from "react";
import FomattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Phrase from "./Phrase";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="description-info">
        <li>
          <FomattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row">
        <div className="col main-temp-info">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col main-temp-info">
          <WeatherTemperature fahrTemp={Math.round(props.data.temp)} />
        </div>
      </div>
      <ul className="details">
        <li>
          <span className="hum-wind">Humidity: {props.data.humidity}%</span>
        </li>
        <li>
          <span className="hum-wind">Wind: {props.data.wind} m/h</span>
        </li>
      </ul>
      <Phrase description={props.data.description} />
      {/*<hr />*/}
     
    </div>
  );
}
