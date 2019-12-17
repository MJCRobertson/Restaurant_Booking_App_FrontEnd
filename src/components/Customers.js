import React, { Component } from 'react';
import CustomersForm from './CustomersForm.js';

class CustomerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(data) {
  //   const customerObject = {Name: this.customerName, Number: this.customerContactNumber, Email: this.customerEmail}
  //   this.setState(this.customer.push(customerObject));
  // }
}

export default CustomerComponent;
