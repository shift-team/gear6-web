import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section>
        <nav className="sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2 d-none d-md-inline-block" href="#">
              Features
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#">
              Help
            </a>
          </div>
        </nav>

        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">
              Gear<span style={{ color: 'green', }}>6</span>
            </h1>
            <p className="font-weight-normal">
              Automotive statistics analysis and performance tracking, straight
              from your car
            </p>
            <a className="btn btn-outline-success" href="#">
              See features
            </a>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Data Analysis</h2>
              <p>
                Track car performance with advanced graphing
              </p>
            </div>
            <div
              className="bg-light box-shadow mx-auto"
              style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}
            />
          </div>

          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">GPS Tracking</h2>
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
