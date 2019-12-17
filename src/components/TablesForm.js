import React, { Component } from 'react';

class TableForm extends Component {
  constructor(props) {
    super();

    this.state = {
      tableNumber: null,
      tableAvailable: true,
      tableCapacity: null
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
          <label htmlfor="tableNumber">Table Number</label>
          <input
            onChange={this.handleChange}
            name="tableNumber"
            id="tableNumber"
            type="number"
            value={this.state.tableNumber} />
        </div>

        <div className="form-wrap">
          <label htmlfor="tableCapacity">Table Capacity</label>
          <input
            onChange={this.handleChange}
            name="tableCapacity"
            id="tableCapacity"
            type="number"
            value={this.state.tableCapacity} />
        </div>

        <input onClick={this.handleSubmit} type="submit" value="submit" />
      </form>
    );
  }
}

export default TableForm;
