import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap";
import logo from "./logo.svg";
import "./app.sass";

import

  class App extends Component {
    render() {
      return (
        <section>
          <nav className="gear6-nav">
            <div>
              <a href="#">
                Features
            </a>
              <a href="#">
                Help
            </a>
            </div>
          </nav>

          <div className="intro-box">
            <div>
              <h1>
                Gear<span style={{ color: 'green', }}>6</span>
              </h1>
              <p>
                Automotive statistics analysis and performance tracking, straight
                from your car
            </p>
              <a>
                See features
            </a>
            </div>
          </div>

          <div className="feature-box">
            <div className="bg-dark text-white">
              <div>
                <h2>Data Analysis</h2>
                <p>
                  Track car performance with advanced graphing
              </p>
              </div>
            </div>

            <div className="bg-light">
              <div className="my-3 p-3">
                <h2>GPS Tracking</h2>
                <p className="lead">
                  Attached location data to record track times and more
              </p>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default App;
