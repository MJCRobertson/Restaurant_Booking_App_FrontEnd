import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

const Customer = (props) => {
  if (!props.customer) {
    return "loading..."
  }
  console.log(props.customer._links.bookings);

  const url = "/customers/" + props.customer.id;

  return(
    <Fragment>
    <Link to = {url} className="name">
    {props.customer.name}
    </Link>
    <p>{props.customer.email}</p>
    <p>{props.customer.numberOfVisits}</p>
    </Fragment>
  )
}

export default Customer;
