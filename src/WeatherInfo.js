import React from "react";
import FomattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul className="description-info">
        <li>
          <FomattedDate date={props.data.date} />
        </li>
        <li className="description">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col main-temp-info">
          {props.data.iconUrl}
          <span className="main-temp">{Math.round(props.data.temp)}</span>
          <span className="unit">°F</span>
        </div>
      </div>
      <ul className="details">
        <li>
          <span className="emoji" role="img" aria-label="Rain-cloud emoji">
            🌧️
          </span>
          {props.data.precipitation}mm
        </li>
        <li>
          <span className="emoji" role="img" aria-label="Water-drops emoji">
            💦{props.data.humidity}%
          </span>
        </li>
        <li>
          <span className="emoji" role="img" aria-label="Wind-blow emoji">
            🌬️{props.data.wind} m/h
          </span>
        </li>
      </ul>
      <h5>
        <em>It's always sunny in...</em>
      </h5>
      <hr />
    </div>
  );
}
