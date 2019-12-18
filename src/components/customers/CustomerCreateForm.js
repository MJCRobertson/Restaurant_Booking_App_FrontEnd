import React, { Component } from 'react';
import './CustomerFormStyle.css'
import Request from '../../helpers/Request.js'

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      name: "",
      email: "",
      numberOfVisits: 0
    }
  }
}
//test entry
this.handleName = this.handleName.bind(this);
this.handleEmail = this.handleEmail.bind(this);
this.handleNumberOfVisits = this.handleNumberOfVisits.bind(this);

componentDidMount(){
  const request = new Request();
  request.get('/api/tables').then((data) => {
    this.setState({tables: data._embedded.tables})
  })
}

handleName(event){
  this.setState({name: event.target.value})
}

handleEmail(event){
  this.setState({email: event.target.value})
}

handleNumberOfVisits(event){
  this.setState({numberOfVisits: event.target.value})
}

render(){
  if(!this.state.tables.length === 0){
    return <p>Loading...</p>
  }

  const tableOptions = this.state.tables.map((table, index) => {
    return <option key={index} value={table._links.self.href}>{table.name}</option>
  })

  return(
    <div>
    <form>
    <input type="text" placeholder="Name" onChange={this.handleName} value={this.state.name}/>
    <input type="text" placeholder="Email" onChange={this.handleEmail} value={this.state.email}/>
    <input type="number" placeholder="Number Of Visits" onChange={this.handleNumberOfVisits} value={this.state.numberOfVisits}/>
    <select name="table">
    {tableOptions}
    </select>
    <button type="submit">Submit new Customer</button>
    </form>
    </div>
  )
}


//     this.state = {
//       customerName: "",
//       customerContactNumber: 0,
//       customerEmail: ""
//         }
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
// // could be refactored as a ternary
//   handleChange(event) {
//     const newState = {};
//     if(event.target.name === "customerContactNumber") {
//     newState[event.target.name] = parseInt(event.target.value);
//   } else {
//     newState[event.target.name] = event.target.value
//   }
//     this.setState(newState);
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     const customerObject = {Name: this.customerName, Number: this.customerContactNumber, Email: this.customerEmail}
//     this.props.onSubmit(customerObject);
//   }
//
//   render() {
//     return (
//       <form>
//         <div className="form-wrap">
//           <label htmlFor="customerName">Customer Name</label>
//           <input
//             onChange={this.handleChange}
//             name="customerName"
//             id="customerName"
//             type="text"
//             value={this.state.customerName} />
//         </div>
//
//         <div className="form-wrap">
//           <label htmlFor="customerContactNumber">Customer Number</label>
//           <input
//             onChange={this.handleChange}
//             name="customerContactNumber"
//             id="customerContactNumber"
//             type="number"
//             value={this.state.customerContactNumber} />
//         </div>
//
//         <div className="form-wrap">
//           <label htmlFor="customerEmail">Customer Email</label>
//           <input
//             onChange={this.handleChange}
//             name="customerEmail"
//             id="customerEmail"
//             type="text"
//             value={this.state.customerEmail} />
//         </div>
//
//         <input onClick={this.handleSubmit} type="submit" value="submit" />
//       </form>
//     );
//   }
// }

export default CustomerCreateForm;
