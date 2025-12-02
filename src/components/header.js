import React, { useState } from "react";
import ReactNative from '../assets/images/react-native.jpg';
import './header.css'; 

function Forheader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">

        {/* Logo */}
        <div className="logo">
          <img src={ReactNative} alt="Website Logo" />
        </div>

        {/* Menu */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}

export default Forheader;

