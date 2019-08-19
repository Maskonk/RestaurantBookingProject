import React, {Fragment} from 'react';

const CustomersTable = ({customers}) => {
  const customerTable = customers.map(customer =>
  {return <tr>
    <td>{customer.name}</td>
    <td>{customer.contact}</td>
    <td>{customer.noOfVisits}</td>
  </tr>});
  return (
      <Fragment>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Number of Visits</th>
          </tr>
          {customerTable}
        </table>
      </Fragment>
  )
};


export default CustomersTable;
