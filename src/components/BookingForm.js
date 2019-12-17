import React, { Component } from 'react';

class BookingForm extends Component {
  constructor(props) {
    super();

    this.state = {
      customer: null,
      table: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[evnt.target.name] = parseInt(event.target.value);
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onsubmit(this.state);
  }

  render() {
    return (
      <form>
        <div className="form-wrap">
          <label htmlfor="customerName">Customer Name</label>
          <input
            onChange={this.handleChange}
            name="customerName"
            id="customerName"
            type="String"
            value={this.state.customerName} />
        </div>

        <div className="form-wrap">
          <label htmlfor="customerContactNumber">Customer Number</label>
          <input
            onChange={this.handleChange}
            name="customerContactNumber"
            id="customerContactNumber"
            type="numnber"
            value={this.state.customerContactNumber} />
        </div>

        <div className="form-wrap">
          <label htmlfor="customerEmail">Customer Email</label>
          <input
            onChange={this.handleChange}
            name="customerEmail"
            id="customerEmail"
            type="String"
            value={this.state.customerEmail} />
        </div>

        <input onClick={this.handleSubmit} type="submit" value="submit" />
      </form>
    );
  }
}

export default CustomerForm;
