import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <button onClick={() => setDarkMode(!darkMode)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            className="bi bi-emoji-sunglasses"
            viewBox="0 0 16 16"
          >
            <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
          </svg>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item ">
              <Link className="navLink nav-link" to="dee">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="navLink nav-link" to="blog">
                Blog
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="navLink2 nav-link" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navLink3 nav-link" to="project">
                Project
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
