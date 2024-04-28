//Issue with this API, forecast does not display-- try again later

import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    /*let apiKey = "2422156241635a837d6a6ff48a8ca511";*/
    /*let apiKey = "f0efa0c4ee97ade1319bdb7e57ff8b3a";*/
    let apiKey = "b404f89dde9b99c52a483f46e792a205";
    /*let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";*/
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (daily, index, props) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={daily} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
