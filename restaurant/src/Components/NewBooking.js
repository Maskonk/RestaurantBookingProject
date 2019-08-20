import React from "react";
import plan from '../Pictures/Tables_plan_ready.jpg';
import BookingForm from './BookingForm'

const NewBooking = (props) => (
 <div>
   <h4>Page allowing to create a new booking</h4>
   <BookingForm customers={props.customers} tables={props.tables}/>
   <center>
   <img src={plan} width="950" height="550" align="center" border="3"/>
   </center>
 </div>
)


export default NewBooking;
