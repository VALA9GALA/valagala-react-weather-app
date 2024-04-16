import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row ms-5 me-5 ps-5 pe-5">
          <div className="col-md ms-5 ps-5 mt-5">
            <h1 className="mt-5">
              VALAGALA
              <br />
              <br />
              <span className="title">WEATHER</span>
              <br />
              <span className="title">REACT</span>
            </h1>
          </div>
          <div className="col-md me-5 pe-5">
            <Weather defaultCity="New York" />
          </div>
          <footer>
            Coded by{" "}
            <a
              href="https://valagala.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              VALAGALA
            </a>{" "}
            See{" "}
            <a
              href="https://github.com/VALA9GALA/valagala-react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              HERE
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
