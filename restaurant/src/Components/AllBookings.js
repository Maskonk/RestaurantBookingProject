import React from "react";
import AllBookingsTable from "./AllBookingsTable";

const AllBookings = ({bookings}) => (
 <div>
   <h4>Display all Booking</h4>
   <AllBookingsTable bookings={bookings}/>
 </div>
);


export default AllBookings;
