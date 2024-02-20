import React from "react";

export default function Weather() {
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

        <h2>New York</h2>
        <ul className="description">
          <li>Monday 09:25PM</li>
          <li>Sun and Rainbows</li>
        </ul>
        <div className="row">
          <div className="col main-temp-info">
            <img
              src={require("./sun-fun-rnbw-no-bkgrnd.png")}
              alt="Sun and Rainbows"
            />
            <span className="main-temp">11</span>
            <span className="unit">°C | °F</span>
          </div>
        </div>
        <ul className="details">
          <li>
            <span className="emoji" role="img" aria-label="Rain-cloud emoji">
              🌧️
            </span>
            11%
          </li>
          <li>
            <span className="emoji" role="img" aria-label="Water-drops emoji">
              💦11%
            </span>
          </li>
          <li>
            <span className="emoji" role="img" aria-label="Wind-blow emoji">
              🌬️11km/h
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
}
