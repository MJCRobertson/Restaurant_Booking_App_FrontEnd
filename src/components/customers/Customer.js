import React, { Component } from 'react';
// import CustomersForm from './CustomersForm.js';

// class CustomerComponent extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       customer: []
//     };
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   // handleSubmit(data) {
//   //   const customerObject = {Name: this.customerName, Number: this.customerContactNumber, Email: this.customerEmail}
//   //   this.setState(this.customer.push(customerObject));
//   // }
// }

const Customer = (props) => {

  if (!props.customer) {
    return "loading..."
  }

  const url = "/customers/" + props.customer.id;

  return(
    <Fragment>
    <Link to = {url} className="name">
    {props.customer.name}
    </Link>
    <p>{props.customer.booking.date}</p>
    <p>{props.customer.email}</p>
    <p>{props.customer.numberOfVisits}</p>
    </p>
    </Fragment>
  )
}

export default Customer;
