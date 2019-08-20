import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const CustomersTable = ({customers}) => {
  const customerTable = customers.map((customer, index) =>
  {return <tr key={index}>
    <td>{customer.name}</td>
    <td>{customer.contact}</td>
    <td>{customer.bookings.length}</td>
    <td><Link to={"/customers/edit/" + customer.id}><button>Show details</button></Link></td>
  </tr>});
  return (
      <Fragment>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Number of Visits</th>
          </tr>
          {customerTable}
          </tbody>
        </table>
      </Fragment>
  )
};


export default CustomersTable;
