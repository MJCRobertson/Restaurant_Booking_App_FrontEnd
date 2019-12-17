import React, { Component } from 'react';
import './CustomersFormStyle.css'

class CustomerForm extends Component {
  constructor(props) {
    super();

    this.state = {
      customerName: "",
      customerContactNumber: 0,
      customerEmail: ""
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// could be refactored as a ternary
  handleChange(event) {
    const newState = {};
    if(event.target.name === "customerContactNumber") {
    newState[event.target.name] = parseInt(event.target.value);
  } else {
    newState[event.target.name] = event.target.value
  }
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    const customerObject = {Name: this.customerName, Number: this.customerContactNumber, Email: this.customerEmail}
    this.props.onSubmit(customerObject);
  }

  render() {
    return (
      <form>
        <div className="form-wrap">
          <label htmlFor="customerName">Customer Name</label>
          <input
            onChange={this.handleChange}
            name="customerName"
            id="customerName"
            type="text"
            value={this.state.customerName} />
        </div>

        <div className="form-wrap">
          <label htmlFor="customerContactNumber">Customer Number</label>
          <input
            onChange={this.handleChange}
            name="customerContactNumber"
            id="customerContactNumber"
            type="number"
            value={this.state.customerContactNumber} />
        </div>

        <div className="form-wrap">
          <label htmlFor="customerEmail">Customer Email</label>
          <input
            onChange={this.handleChange}
            name="customerEmail"
            id="customerEmail"
            type="text"
            value={this.state.customerEmail} />
        </div>

        <input onClick={this.handleSubmit} type="submit" value="submit" />
      </form>
    );
  }
}

export default CustomerForm;
