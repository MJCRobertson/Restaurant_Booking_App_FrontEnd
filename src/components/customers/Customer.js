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

  return(
    <Fragment>
    <p>
    {props.customer.name}
    {props.customer.email}
    {props.customer.numberOfVisits}
    </p>
    </Fragment>
  )
}

export default Customer;
