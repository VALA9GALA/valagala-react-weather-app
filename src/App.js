import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
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
  );
}
