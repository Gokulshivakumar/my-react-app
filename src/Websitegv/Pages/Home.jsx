import Banner from '../components/banner.js';
import Section from '../components/partone.js';
import Carousel from '../components/Carousel.js'
import React from "react";


function Homepage(){
    return (
        <div className="page-container">
      <Banner />
       <Section />
       <Carousel />
       </div>
   
    );
}

export default Homepage;