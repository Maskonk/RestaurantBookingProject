import React from "react";
import CustomerForm from './CustomerForm';

const NewCustomer = (props) => (
 <div>
   <h4>Add Details of New Customer Below</h4>
   <CustomerForm onCustomerSubmit={props.onCustomerSubmit}/>
 </div>
);


export default NewCustomer;
