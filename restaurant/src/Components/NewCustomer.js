import React from "react";
import CustomerForm from './CustomerForm';

const NewCustomer = (props) => (
 <div>
   <h4>Page for adding New Customer</h4>
   <CustomerForm onCustomerSubmit={props.onCustomerSubmit}/>
   <p>{props.onCustomerSubmit}</p>
 </div>
);


export default NewCustomer;
