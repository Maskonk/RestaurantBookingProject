import React, {Fragment} from 'react';

  const EditBooking = ({booking}) => {

    if (!booking) {
      return <p>Booking not found.</p>
    }
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
            <tr>
              <td>{booking.customer.name}</td>
              <td>{booking.table.id}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.partySize}</td>
              <td>{booking.comments}</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    )

  }

export default EditBooking;
