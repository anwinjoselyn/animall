import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="main-header">
          <div className="logo">
            <a href="/">
              <img
                src="https://static-assets.animall.in/static/images/animall-india-logo.png"
                alt="Animall"
                crossOrigin="anonymous"
              />
            </a>
            <h1 className="tagline">Bharat ka online pashupalan parivaar.</h1>
          </div>
          <div className="header1">
            <a href="/sell" className="btn-sell">
              पशु बेचें
            </a>
          </div>
        </div>
        <div className="sticky-header">
          <div className="location">
            <img
              src="https://static-assets.animall.in/static/images/location.png"
              alt="location"
              crossOrigin="anonymous"
              style={{ opacity: "0.5" }}
            />
            <span>Maharashtra 411057</span>
          </div>
          <div className="selector">
            <img
              src="https://static-assets.animall.in/static/images/filter-type.png"
              alt="filter type"
            />
            <span>पशु फिल्टर</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
