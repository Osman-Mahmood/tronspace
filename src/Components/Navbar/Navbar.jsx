import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
        <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand logo">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" aria-current="page" href="#">
                About Us
              </a>
              <a className="nav-link" href="#">
                Markrting Plan
              </a>
              <a className="nav-link" href="#">
                Personal Wallet
              </a>
              <button className="nav-link btn-menu mx-3" href="#">
                Contribution
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
