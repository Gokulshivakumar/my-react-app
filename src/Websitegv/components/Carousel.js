import React, { useEffect, useState } from "react";
import '../assets/stylesheet/Carousel.css';


function TechCarousel() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1); // move left
    }, 20); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {logos.concat(logos).map((Logo, index) => (
          <div className="logo" key={index}>
            <Logo />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechCarousel;

/* SVG LOGOS */
const logos = [
  () => (
    <svg viewBox="0 0 120 120">
      <rect width="120" height="120" rx="16" fill="#E44D26" />
      <text x="60" y="75" fontSize="42" fill="white" textAnchor="middle" fontWeight="bold">HTML</text>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 120 120">
      <rect width="120" height="120" rx="16" fill="#1572B6" />
      <text x="60" y="75" fontSize="42" fill="white" textAnchor="middle" fontWeight="bold">CSS</text>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 120 120">
      <rect width="120" height="120" rx="16" fill="#F7DF1E" />
      <text x="60" y="75" fontSize="42" fill="black" textAnchor="middle" fontWeight="bold">JS</text>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 120 120">
      <rect width="120" height="120" rx="16" fill="#777BB4" />
      <text x="60" y="75" fontSize="38" fill="white" textAnchor="middle" fontWeight="bold">PHP</text>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 120 120">
      <rect width="120" height="120" rx="16" fill="#21759B" />
      <text x="60" y="75" fontSize="36" fill="white" textAnchor="middle" fontWeight="bold">WP</text>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 120 120">
      <rect width="120" height="120" rx="16" fill="#20232A" />
      <text x="60" y="75" fontSize="34" fill="#61DAFB" textAnchor="middle" fontWeight="bold">REACT</text>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 120 120">
      <rect width="120" height="120" rx="16" fill="#00758F" />
      <text x="60" y="75" fontSize="30" fill="white" textAnchor="middle" fontWeight="bold">MYSQL</text>
    </svg>
  ),
];
