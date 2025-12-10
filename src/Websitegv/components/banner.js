import '../assets/stylesheet/banner.css';
import Bannertwo from '../assets/images/bannertwo.jpg';

function Banner(){

    return(
        <section className="banner-container">
      <img src={Bannertwo} alt="Banner" className="banner-image" />
      {/* Multicolor bubbles */}
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
    </section>
    );
}

export default Banner;