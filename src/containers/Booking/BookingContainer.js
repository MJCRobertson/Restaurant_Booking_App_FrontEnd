import React, { Component, Fragment } from 'react';
import CustomersForm from '../../components/customers/CustomersForm.js';
import Request from '../../helpers/Request.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class BookingContainer extends Component{
  constructor(props) {
    super(props);
    this.state= {
      customers: []
      // bookings: []
    }
  }

  componentDidMount() {
     const request = new Request();

     request.get('/api/customers')
     .then((data) => {
       this.setState({customers: data._embedded.customers})
     }
   )
  }
  //
  // onSubmit(data) {
  //   this.setState([...this.state.customers, data]);
  //   // use the spread operator with t
  // }

  render(){
    return(
      // <div>
      // <h1>Bugz N Sh*t</h1>
      // <CustomersForm onSubmit={this.onSubmit}/>
      // </div>
      <Router>
      <Fragment>
      <Switch>
      <Route render={(props) => {
        return <CustomerList customers={this.state.customers}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default BookingContainer;
