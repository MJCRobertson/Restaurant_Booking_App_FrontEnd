import React, { Component } from 'react';
import Request from '../../helpers/Request.js';

class CustomerEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      tables: [],
      bookings: []
    }
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
      <form>
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
