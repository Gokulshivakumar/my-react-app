import { useState } from "react";

function Aboutus(){
    const [color,setcolor]=useState("green");
    const [count,setcount]=useState(0);

    const setvalue= ()=>{
      setcolor(color=="red"? "blue": "yellow");
    }

  
    return (
      <div className="page-container" >
    <h1> About page </h1>
    <p>My inisutial color was {color}</p>
   <button onClick={setvalue}>Click me</button>
   <h1>Working on counter mode</h1>
   <h1>default counter value {count}</h1>
   <button  onClick={()=>setcount(count+1)}>Increase</button><br></br>
   <button onClick={()=>setcount(count-1)}>Decrease</button><br></br>
   <button onClick={()=>setcount(0)}>Reset</button>

    </div>);
};

export default Aboutus;