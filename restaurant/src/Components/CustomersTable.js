import React, {Fragment} from 'react';
import CustomersTableItem from './CustomersTableItem';

const CustomersTable = (props) => {
    return (
        <Fragment>
      <table>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Number of Visits</th>
        </tr>
      </table>
        </Fragment>
    )
  }


export default CustomersTable;
