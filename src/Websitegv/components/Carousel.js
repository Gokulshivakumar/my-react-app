import React, { useEffect, useState } from "react";
import html from '../assets/images/Html.png';
import CSS from '../assets/images/Css.png';
import js from '../assets/images/JS.png';
import PHP from '../assets/images/Php.png';
import WP from '../assets/images/Wp.jpg';
import react from '../assets/images/react-native.jpg';
import '../assets/stylesheet/Carousel.css';

const images  =[html,CSS,js,PHP,WP,react];

function Carousel(){
      const [current, setCurrent] = useState(0);
useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
  <div
    className="carousel-track"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {images.map((img, index) => (
      <img key={index} src={img} alt="slide" />
    ))}
  </div>
</div>

  );
}



export default Carousel;