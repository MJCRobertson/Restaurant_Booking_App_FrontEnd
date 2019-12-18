import React {Component} from 'react';
import Customer from './customer.js';
import {Link} from 'react-router-dom';

const CustomerDetail = (props) => {
  if (!props.customer){
    return "Loading..."
  }

   const bookings = props.customers.bookings.map((booking, index) => {
     return <li key={index}>{booking.date}</li>
   })

   const editUrl = "/customers/" + props.customer.id + "/edit";

   return(
     <div className = "component">
      <Customer customer = {props.customer}/>
        <p>Bookings:</p>
          <ul>
            {bookings}
          </ul>
          <button onClick={handleDelete}>Delete {props.customer.name}</button>
          <Link to={editUrl}><button type="button">Edit Customer {props.customer.name}</button></Link>
     </div>
   )
}

export default CustomerDetail
