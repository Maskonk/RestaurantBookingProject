import React from "react";
import plan from '../Pictures/Tables_plan_ready.jpg';


const NewBooking = () => (

 <div style={{ backgroundColor: "lightblue"}}>

   <h1 style={{paddingTop:10, textAlign:"center"}}>Page allowing to create a new booking</h1>

   <center>
   <img src={plan} width="950" height="550" border="2"/>
   </center>
 </div>
)

export default NewBooking;
