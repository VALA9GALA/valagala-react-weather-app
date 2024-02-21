import React, { useState } from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Tuesday 6:26PM",
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      precipitation: response.data.precipitation,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      iconUrl: (
        <img
          src={require("./sun-fun-rnbw-no-bkgrnd.png")}
          alt={weatherData.description}
        />
      ),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container shadow-lg">
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control shadow-sm"
                  autoFocus
                />
              </div>
            </div>
            <div className="buttons">
              <button className="btn btn-info me-3 shadow-sm">Search</button>
              <button className="btn btn-warning shadow-sm">Current</button>
            </div>
          </form>

          <h2>{weatherData.city}</h2>
          <ul className="description-info">
            <li>{weatherData.date}</li>
            <li className="description">{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col main-temp-info">
              {weatherData.iconUrl}
              <span className="main-temp">{Math.round(weatherData.temp)}</span>
              <span className="unit">°F</span>
            </div>
          </div>
          <ul className="details">
            <li>
              <span className="emoji" role="img" aria-label="Rain-cloud emoji">
                🌧️
              </span>
              {weatherData.precipitation}mm
            </li>
            <li>
              <span className="emoji" role="img" aria-label="Water-drops emoji">
                💦{weatherData.humidity}%
              </span>
            </li>
            <li>
              <span className="emoji" role="img" aria-label="Wind-blow emoji">
                🌬️{weatherData.wind} m/h
              </span>
            </li>
          </ul>
          <h5>
            <em>It's always sunny in...</em>
          </h5>
          <hr />
        </div>
      </div>
    );
  } else {
    const apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

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
        <h4>Loading...</h4>
      </div>
    );
  }
}
