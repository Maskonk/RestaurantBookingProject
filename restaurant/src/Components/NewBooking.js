import React from "react";
import plan from '../Pictures/Tables_plan_ready.jpg';
import BookingForm from './BookingForm';
import "../styles/Form.css";

const NewBooking = (props) => (
 <div>
   <h1 style={{paddingTop:10, textAlign:"center"}}>Page allowing to create a new booking</h1>

   <div style={{marginLeft: 50, marginTop: 30, position:"absolute", width: 350, backgroundColor: "white", border: '3px solid black'}}>
   <BookingForm customers={props.customers} tables={props.tables}/>
   </div>


   <center style={{marginLeft:450, marginTop:50, marginBottom:100 }}>
   <img src={plan} width="750" height="450" border="3"/>
   </center>


 </div>
)

export default NewBooking;
