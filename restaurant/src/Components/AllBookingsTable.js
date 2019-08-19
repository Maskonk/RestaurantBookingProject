import React, {Fragment} from 'react';

const AllBookingsTable = (props) => {
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
          </tbody>
        </table>
      </Fragment>
)
};


export default AllBookingsTable;
