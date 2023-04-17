import React from "react";
import { Link } from "react-router-dom";

function SiteNav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/landing">
          <img
            src="https://tinyurl.com/y8yfedj6"
            alt="Logo"
            width="45"
            height="35"
            className="d-inline-block align-text-center"
          />
          Spectacle
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/home" className="nav-link px-2 text-black link-button">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/specs"
                href="#"
                className="nav-link px-2 text-black link-button"
              >
                Specs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                href="#"
                className="nav-link px-2 text-black link-button"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}
export default SiteNav;
