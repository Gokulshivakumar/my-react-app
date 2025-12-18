import { useState } from "react";

function Testpage() {
  const [students,setstudents]=useState(["Gokul", "Mouz"]);
  return(
 <div>
   {students.map((students,index)=>(
    <P key={index} > {students}</P>
   ))}
 </div>
  );
}

export default Testpage;
