import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class AllBookingsTable extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dateFilter: ""
    }
  }

  render() {
    const bookingTable = this.props.bookings.map(booking => {
      return <tr>
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
          <label htmlFor="dateFilter"> Filter by date: </label>
          <input type="text" className="dateFilter" placeholder="yyyy-mm-dd"/>
          <br/>
          <br/>
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
  }
};


export default AllBookingsTable;
