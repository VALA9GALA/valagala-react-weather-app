import React, { useState } from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      precipitation: response.data.precipitation,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control shadow-sm"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="buttons">
              <button className="btn btn-info me-3 shadow-sm">Search</button>
              <button className="btn btn-warning shadow-sm">Current</button>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Hourglass">
        <Hourglass
          visible={true}
          height="140"
          width="140"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass="hourglass"
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }
}
