import React, {Component, Fragment} from 'react';

class BookingForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: "",
      date: "",
      partySize: "",
      comments: "",
      customer:"",
      table: ""
    }
    this.handlePartySizeChange = this.handlePartySizeChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleCommentsChange = this.handleCommentsChange.bind(this)
    this.handleCustomerChange = this.handleCustomerChange.bind(this)
    this.handleTableChange = this.handleTableChange.bind(this)
  }

  handleTimeChange(event) {
    this.setState({time: event.target.value})
  }

  handleDateChange(event) {
    this.setState({date: event.target.value})
  }

  handlePartySizeChange(event) {
    this.setState({partySize: event.target.value})
  }

  handleCommentsChange(event) {
    this.setState({comments: event.target.value})
  }

  handleCustomerChange(event) {
    this.setState({customer: event.target.value})
  }

  handleTableChange(event) {
    this.setState({table: event.target.value})
  }

  render() {
    const customerOptions = this.props.customers.map((customer, index) => {
    return <option
      value={"http://localhost:8080/customers/" + customer.id}
      key={index}
      >{customer.name} ({customer.contact})</option>
    })

    if (this.props.tables != null) {
      const tableOptions = this.props.tables._embedded.tables.map((table, index) => {
      return <option
        value={"http://localhost:8080/tables/" + table.id}
        key={index}
        >Table: {table.id}, Capacity: {table.capacity}</option>
      })


      return(
        <Fragment>
          <form className="booking-form">
            <label htmlFor="booking-time">Booking Time: </label>
            <input
              type="time"
              id="booking-time"
              value={this.state.time}
              onChange={this.handleTimeChange}
            />
            <br/>
            <label htmlFor="booking-date">Booking Date: </label>
            <input
              type="date"
              id="booking-date"
              value={this.state.date}
              onChange={this.handleDateChange}
            />
            <br/>
            <label htmlFor="booking-size">Booking Size: </label>
            <input
              type="number"
              id="booking-size"
              min="1"
              value={this.state.partySize}
              onChange={this.handlePartySizeChange}
            />
            <br/>

            <label htmlFor="booking-comments">Booking Comments: </label>
            <input
              type="text"
              id="booking-comments"
              placeholder="Enter comments here..."
              value={this.state.comments}
              onChange={this.handleCommentsChange}
            />
            <br/>

            <label htmlFor="customer-selector">Customer: </label>
            <select id="customer-selector"
            value={this.state.customer} onChange={this.handleCustomerChange}>
              <option value="">Choose a Customer...</option>
              {customerOptions}
            </select>

            <br/>

            <label htmlFor="table-selector">Table: </label>
            <select id="table-selector"
            value={this.state.table} onChange={this.handleTableChange}>
              <option value="">Choose a Table...</option>
              {tableOptions}
            </select>

            <br/>


            <input type="submit" value="Make booking"/>
          </form>

        </Fragment>
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }

}


// <label htmlFor="table-selector">Table: </label>
// <select id="table-selector" defaultValue="defaultValue">
//   <option disabled value="default">Choose a Table...</option>
//   {tableOptions}
// </select>
//
// <br/>

export default BookingForm;
