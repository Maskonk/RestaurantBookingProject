import React from "react";
import AllBookingsTable from "./AllBookingsTable";

const AllBookings = ({bookings}) => (
 <div style={{ backgroundColor: "lightblue"}}>
   <h1 style={{paddingTop:10, textAlign:"center"}}>Display all Booking</h1>
   <AllBookingsTable bookings={bookings}/>
 </div>
);


export default AllBookings;
