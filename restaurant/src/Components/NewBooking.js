import React from "react";
import BookingForm from './BookingForm'

const NewBooking = (props) => (
 <div>
   <h4>Page allowing to create a new booking</h4>
   <BookingForm customers={props.customers} tables={props.tables}/>
 </div>
);


export default NewBooking;
