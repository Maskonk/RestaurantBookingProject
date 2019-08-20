import React from "react";
import CustomerForm from './CustomerForm';

const NewCustomer = (props) => (

 <div style={{ backgroundColor: "lightblue"}}>
   <h1 style={{paddingTop:10, textAlign:"center"}}>Add a New Customer to our database:</h1>
   <div style={{marginLeft: 450, marginTop: 30, position:"absolute", width: 350, backgroundColor: "white", border: '3px solid black'}}>
   <CustomerForm onCustomerSubmit={props.onCustomerSubmit}/>
   </div>
 </div>

);

export default NewCustomer;
