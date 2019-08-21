import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
      <li>
          <Link to={"/customers/new"}> New Customer</Link>
      </li>
    <li>
      <Link to="/customers">All Customers</Link>
    </li>
      <li>
          <Link to="/bookings/new"> New Booking </Link>
      </li>
    <li>
      <Link to="/bookings"> All Bookings</Link>
    </li>
      <li>
          <Link to="/combined-bookings"> Combined Bookings </Link>
      </li>
  </ul>
);

export default NavBar;
