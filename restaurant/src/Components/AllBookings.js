import React from "react";
import AllBookingsTable from "./AllBookingsTable";

const AllBookings = ({bookings}) => (
 <div style={{ backgroundColor: "lightblue"}}>
   <h1 style={{paddingTop:10, textAlign:"center"}}>Display all Bookings</h1>
    <div>
       <center>
       <AllBookingsTable bookings={bookings}/>
       </center>
    </div>
 </div>
);


export default AllBookings;
