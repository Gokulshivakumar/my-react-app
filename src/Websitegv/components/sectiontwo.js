import section2 from '../assets/images/section2.jpg'
import './sectiontwo.css';

function Sectionlayerthree(){
    return(
        <div className = "containerz"> 
            <div className="leftside">
            <img src={section2} alt='Feature-Img' />
        </div>
         <div myclass="rightside">
            <h1>Loading</h1>
            </div>

        </div>
    )
};

export default Sectionlayerthree;