import React, { useEffect, useState } from "react";
import html from '../assets/images/Html.png';
import CSS from '../assets/images/Css.png';
import js from '../assets/images/JS.png';
import PHP from '../assets/images/Php.png';
import WP from '../assets/images/Wp.jpg';
import react from '../assets/images/react-native.jpg';
import '../assets/stylesheet/Carousel.css';

const images  =[html,CSS,js,PHP,WP,react];

function LogoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-carousel">
      <div
        className="logo-track"
        style={{ transform: `translateX(-${current * 120}px)` }}
      >
        {images.map((logo, index) => (
          <img key={index} src={logo} alt="tech logo" />
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;

