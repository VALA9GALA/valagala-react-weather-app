import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control ms-3"
                autoFocus
              />
            </div>
            <div className="col-3">
              <button className="btn btn-info me-3">Search</button>
            </div>
            <div className="col-3">
              <button className="btn btn-warning">Current</button>
            </div>
          </div>
        </form>

        <h2 className="ms-4">New York</h2>
        <ul>
          <li>Monday 09:25PM</li>
          <li>Sun and Rainbows</li>
          <div className="row">
            <div className="col-6">
              <img src={require("./sun-fun-rnbw-no-bkgrnd.png")} />
              <span className="main-temp">11℃</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 11%</li>
                <li>Humidity: 11%</li>
                <li>Wind: 11 km/h</li>
              </ul>
            </div>
            <hr />
            <h4>
              <em>It's always sunny in...</em>
            </h4>
          </div>
        </ul>
      </div>
    </div>
  );
}
