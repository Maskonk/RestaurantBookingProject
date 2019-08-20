import React from "react";
import CustomersTable from "./CustomersTable";

const AllCustomers = ({customers}) => (
 <div style={{ backgroundColor: "lightblue"}}>
   <h1 style={{paddingTop:10, textAlign:"center"}}>List of Customers</h1>
   <center>
     <CustomersTable customers={customers}/>
  </center>
 </div>
);


export default AllCustomers;
