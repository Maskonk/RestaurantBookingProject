import React, {Fragment} from 'react';

const CustomersTable = ({customers}) => {
  const customerTable = customers.map(customer =>
  {return <tr>
    <td>{customer.name}</td>
    <td>{customer.contact}</td>
    <td>{customer.noOfVisits}</td>
    <td><button>Edit</button></td>
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
