import React from "react";
import "./pro.css";

const Project = () => {
  return (
    <div>
      <h1 className="pro">Project</h1>
      <p className="pro-c">Simple project that i made using bootsrap</p>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <a
            href="https://zlhyd.github.io/vr/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-1"
          >
            <div className="card">
              <div className="card-body">
                {" "}
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">
                  Simple Portfolio website using Bootsrap
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a
            href="https://zlhyd.github.io/apiBored/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-1"
          >
            <div className="card">
              <div className="card-body">
                {" "}
                <h5 className="card-title">React App API</h5>
                <p className="card-text">
                  A simple project using React is to create a Todo List whose
                  data list is retrieved in a public API using the fetch method
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <a href="/" className="card-1">
            <div className="card">
              <div className="card-body">
                {" "}
                <h5 className="card-title">React App</h5>
                <p className="card-text">
                  Some quick example text to build on the card title
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a href="/" className="card-1">
            <div className="card">
              <div className="card-body">
                {" "}
                <h5 className="card-title">React App</h5>
                <p className="card-text">
                  Some quick example text to build on the card title
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <a href="/" className="card-1">
            <div className="card">
              <div className="card-body">
                {" "}
                <h5 className="card-title">React App</h5>
                <p className="card-text">
                  Some quick example text to build on the card title
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a href="/" className="card-1">
            <div className="card">
              <div className="card-body">
                {" "}
                <h5 className="card-title">React App</h5>
                <p className="card-text">
                  Some quick example text to build on the card title
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <p className="foot2">
        ©️2022 Create With <i className="bi bi-heart-fill"></i> zLhYd
      </p>
    </div>
  );
};

export default Project;
