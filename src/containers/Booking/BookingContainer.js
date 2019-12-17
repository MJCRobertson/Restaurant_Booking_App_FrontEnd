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
    this.findCustomerById = this.findCustomerById.bind(this);
  }

  componentDidMount() {
     const request = new Request();

     request.get('/api/customers')
     .then((data) => {
       this.setState({customers: data._embedded.customers})
     }
   )
  }

  findCustomerById(id){
    return this.state.customers.find((customer) => {
      return customer.id === parseInt(id);
    });
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
      <Route exact path = "/customers" render={(props) => {
        return <CustomerList customers={this.state.customers}
      }}/>
      <Route exact path = "/customers/:id" render={(props) => {
      const id = props.match.params.id;
      const customer = this.findCustomerById(id);}} />
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
