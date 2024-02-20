import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus
              />
            </div>
          </div>
          <div className="buttons">
            <button className="btn btn-info me-3">Search</button>
            <button className="btn btn-warning">Current</button>
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
            <div className="main-temp">11℃</div>
          </div>
        </div>
        <ul className="details me-5">
          <li>🌧️11%</li>
          <li>💦11%</li>
          <li>🌬️11km/h</li>
        </ul>
        <h5>
          <em>It's always sunny in...</em>
        </h5>
        <hr />
      </div>
    </div>
  );
}
