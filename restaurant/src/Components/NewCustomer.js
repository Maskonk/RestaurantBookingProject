import React from "react";
import CustomerForm from './CustomerForm';

const NewCustomer = (props) => (
 <div style={{ backgroundColor: "lightblue"}}>
   <h1 style={{paddingTop:10, textAlign:"center"}}>Add a New Customer to our database:</h1>
   <CustomerForm onCustomerSubmit={props.onCustomerSubmit}/>
 </div>
);


export default NewCustomer;
