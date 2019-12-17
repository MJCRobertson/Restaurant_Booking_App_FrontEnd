import React from 'react';
import Customer from './Customers.js';

const CustomerList = (props) => {

  if(props.customers.length === 0){
    return(<p>loading...</p>)
  }

  const customers = props.customers.map((customer, index) => {
    return (
      <li key = {index} className="component-items">
      <div className="component">
      <Customer customer={customer} />
      </div>
      </li>
    )
  })
  return(
    <ul className="component-list">
      {customers}
    </ul>
  )
}

export default CustomerList
