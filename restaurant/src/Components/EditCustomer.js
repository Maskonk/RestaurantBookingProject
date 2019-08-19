import React, {Fragment} from 'react';

const EditCustomer = ({customer}) => {
    if (!customer) {
        return <p> Not found </p>
    }
    return (
        <Fragment>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Number of visits</th>
                    </tr>
                <tr>
                    <td>{customer.name}</td>
                    <td>{customer.contact}</td>
                    <td>{customer.noOfVisits}</td>
                </tr>
                </tbody>
            </table>
        </Fragment>
    )
};

export default EditCustomer;