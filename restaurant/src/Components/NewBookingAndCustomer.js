import React, {Fragment} from 'react';
import NewForm from "./NewForm";

const NewBookingAndCustomer = (props) => (
    <Fragment>
        <h2>New Booking</h2>
        <NewForm customers={props.customers} />
    </Fragment>
);

export default NewBookingAndCustomer;
