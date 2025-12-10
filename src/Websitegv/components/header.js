import React, { useState } from "react";
import '../assets/stylesheet/header.css';
import LogoImg from "../assets/images/react-native.jpg";


 function Forheader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container header-row">

        {/* Logo */}
        <div className="logo">
          <img src={LogoImg} alt="Website Logo" />
        </div>

        {/* Desktop + Mobile Menu */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger Button */}
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
