import React, { Component } from 'react';
import Request from '../../helpers/Request.js';

class CustomerEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      tables: [],
      bookings: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    const tablePromise = request.get('/api/tables');
    const bookingPromise = request.get('/api/bookings');
    Promise.all([tablePromise, bookingPromise])
    .then((data) => {
      this.setState({tables: data[0]._embedded.tables, bookings: data[1]._embedded.bookings})
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const bookings = [...event.target.bookings.options].filter((option) => {
      return option.selected
    }).map((option) => {
      return option.value
    })

    const customer = {
      "name": this.target.name.value,
      "email": this.target.email.value,
      "numberOfVisits": this.target.numberOfVisits.value,
      "table": event.target.table.value,
      "bookings": bookings
    }
    this.props.onUpdate(customer, this.props.customer.id)
  }

  render() {
    if(this.state.tables.length === 0 || this.state.bookings.length === 0 || !this.props.customer){
      return null
    }

    const tableOptions = this.state.tables.map((table, index) => {
      return <option key={index} value={table._links.self.href}>{table.number}</option>
    })

    const bookingOptions = this.state.bookings.map((booking, index) => {
      return <option key={index} value={booking._links.self.href}>{booking.date}</option>
    })

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" defaultValue={this.props.customer.name}/>
      <input type="text" name="email" defaultValue={this.props.customer.email}/>
      <input type="text" name="numberOfVisits" defaultValue={this.props.customer.numberOfVisits}/>

      <select name="table">
      {tableOptions}
      </select>

      <select multiple={true} name="bookings">
      {bookingOptions}
      </select>

      <button type="submit"> Save Update </button>
      </form>
      </div>
    )
  }
}

export default CustomerEditForm;
