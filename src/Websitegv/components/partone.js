import section2 from '../assets/images/Part1.jpg'
import '../assets/stylesheet/partone.css';

function Section(){
    return(
        <div className = "containerz"> 
            <div className="leftside">
            <img src={section2} alt='Feature-Img' />
        </div>
         <div className="rightside">
            <h2>Build. Break. Learn. Repeat.<br></br>
            <br></br>
           Code is not just syntax, it’s problem-solving.<br></br>
              <br></br>
           Turning ideas into interactive experiences.</h2>
            </div>

        </div>
    )
};

export default Section;