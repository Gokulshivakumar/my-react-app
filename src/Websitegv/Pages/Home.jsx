import Banner from '../components/banner.js';
import Section from '../components/partone.js';
import LogoCarousel from '../components/Carousel.js'
import React from "react";


function Homepage(){
    return (
        <div className="page-container">
      <Banner />
       <Section />
       <LogoCarousel />
       </div>
   
    );
}

export default Homepage;