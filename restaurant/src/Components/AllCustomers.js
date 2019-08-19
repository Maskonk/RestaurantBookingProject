import React from "react";
import CustomersTable from "./CustomersTable";

const AllCustomers = ({customers}) => (
 <div>
   <h4>Page for displaying list of all customers</h4>
     <CustomersTable customers={customers}/>

 </div>
);


export default AllCustomers;
