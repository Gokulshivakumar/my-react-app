import Banner from '../components/banner.js';
import Section from '../components/partone.js';
import TechCarousel from '../components/Carousel.js'



function Homepage(){
    return (
        <div className="page-container">
      <Banner />
       <Section />
       <TechCarousel />
       </div>
   
    );
}

export default Homepage;