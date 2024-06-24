import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}

        <ul
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <li className="nav-item">
            {/* <a className="nav-link" aria-current="page" href="">
                Home
              </a> */}

            <a className="nav-link" aria-current="page" href="">
              Home
            </a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link> */}
          </li>
        </ul>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable DarkMode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
