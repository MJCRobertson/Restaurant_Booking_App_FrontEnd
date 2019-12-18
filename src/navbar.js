import React from 'react';

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li className="navLink">
          <a href="/customers">Customers</a>
        </li>
        <li className="navLink">
          <a href="/tables">Table</a>
        </li>
        <li className="navLink">
          <a href="/bookings">Booking</a>
        </li>
        <li className="navLink">
          <a href="/customers/new">Create Customer</a>
        </li>
      </ul>

      </header>
  )
}

export default NavBar;
