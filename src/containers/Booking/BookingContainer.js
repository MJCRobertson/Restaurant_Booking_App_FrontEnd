import React, { Component, Fragment } from 'react';
import CustomersForm from '../../components/customers/CustomersForm.js';
import Request from '../../helpers/Request.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class BookingContainer extends Component{
  constructor(props) {
    super(props);
    this.state= {
      customers: [],
      bookings: []
    }
  }

  componentDidMount() {
    const request = new Request();

      request.get('/api/bookings')
      .then((data) => {
        this.setState({bookings: data._embedded.bookings})
      })
  }

  onSubmit(data) {
    this.setState([...this.state.customers, data]);
    // use the spread operator with t
  }

  render(){
    return(
      <div>
      <h1>Bugz N Sh*t</h1>
      <CustomersForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default BookingContainer;
