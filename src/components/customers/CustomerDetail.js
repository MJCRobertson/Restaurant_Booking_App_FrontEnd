import React {Component} from 'react';
import Customer from './customer.js';

const CustomerDetail = (props) => {
  if (!props.customer){
    return "Loading..."
  }

   const bookings = props.customers.bookings.map((booking, index) => {
     return <li key={index}>{booking.date}</li>
   })

   return(
     <div className = "component">
      <Customer customer = {props.customer}/>
        <p>Bookings:</p>
          <ul>
            {bookings}
          </ul>
          <button onClick={handleDelete}>Delete {props.customer.name}</button>
     </div>
   )
}

export default CustomerDetail
