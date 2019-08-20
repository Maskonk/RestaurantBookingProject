import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const AllBookingsTable = ({bookings}) => {
    const bookingTable = bookings.map((booking, index) => {
      return <tr key={index}>
        <td>{booking.customer.name}</td>
        <td>{booking.table.id}</td>
        <td>{booking.date}</td>
        <td>{booking.time}</td>
        <td>{booking.partySize}</td>
        <td>{booking.comments}</td>
        <td><Link to={"/bookings/edit/" + booking.id}>
          <button>Show details</button>
        </Link></td>
      </tr>
    });

    return (
        <Fragment>
          <table>
            <tbody>
            <tr>
              <th>Name</th>
              <th>Table Nr.</th>
              <th>Date</th>
              <th>Time</th>
              <th>Party Size</th>
              <th>Comments</th>
            </tr>
            {bookingTable}
            </tbody>
          </table>
        </Fragment>
    )
};


export default AllBookingsTable;
