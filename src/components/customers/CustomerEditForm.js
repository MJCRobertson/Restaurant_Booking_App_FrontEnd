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
      console.log(data);
    })
  }

  render() {
    return null
  }
}

export default CustomerEditForm;
