import React, { Component } from 'react';
import TablesForm from './TablesForm.js';

class CustomerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.customer.push(data)
    const customer
