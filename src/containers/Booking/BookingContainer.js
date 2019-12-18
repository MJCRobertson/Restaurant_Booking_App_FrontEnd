import React, { Component, Fragment } from 'react';
import Request from '../../helpers/Request.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerDetail from '../../components/customers/CustomerDetail.js';
import CustomerCreateForm from '../../components/customers/CustomerCreateForm.js';
import CustomerEditForm from '../../components/customers/CustomerEditForm.js';
import CustomerList from '../../components/customers/CustomerList.js'

class BookingContainer extends Component{
  constructor(props) {
    super(props);
    this.state= {
      customers: []
      // bookings: []
    }
    this.findCustomerById = this.findCustomerById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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

  handleDelete(id){
    const request = new Request();
    const url = '/api/customers/' + id;
    request.delete(url).then(() => {
      window.location = '/customers';
    })
  }

  handlePost(customer) {
    const request = new Request();
    request.post('/api/customers', customer).then(() => {
      window.location = '/customers'
    })
  }

  handleUpdate(customer, id){
    const request = new Request();
    request.patch('/api/customers/', customer).then(() => {
      window.location = '/customers'
    })
  }
  
  render(){
    return(
      // <div>
      // <h1>Bugz N Sh*t</h1>
      // <CustomersForm onSubmit={this.onSubmit}/>
      // </div>
      <Router>
      <Fragment>
      <Switch>
      <Route exact path = '/customers/new' render={(props) => {
        return <CustomerCreateForm onFormSubmit={this.handlePost}/>
      }}/>
      <Route exact path = "/customers" render={(props) => {
        return <CustomerList customers={this.state.customers}/>
      }}/>

      <Route exact path = "/customers/:id" render={(props) => {
       const customer = this.findCustomerById(props.match.params.id)
       return <CustomerDetail customer={customer} onDelete={this.handleDelete}/>
     }}
      />

      <Route render={(props) => {
        return <CustomerList customers={this.state.customers}/>
      }}/>
      <Route exact path = "/customers/:id/edit" render = {(props) => {
        const id = props.match.params.id;
        const customer = this.findCustomerById(id);
        return <CustomerEditForm customer={customer} handleCustomerUpdate={this.handleUpdate}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }
}
export default BookingContainer;
