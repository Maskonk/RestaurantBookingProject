import React, {Component, Fragment} from 'react';

class BookingForm extends Component {


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
            />
            <br/>
            <label htmlFor="booking-date">Booking Date: </label>
            <input
              type="date"
              id="booking-date"
            />
            <br/>
            <label htmlFor="booking-size">Booking Size: </label>
            <input
              type="number"
              id="booking-size"
              min="1"
            />
            <br/>

            <label htmlFor="booking-comments">Booking Comments: </label>
            <input
              type="text"
              id="booking-comments"
              placeholder="Enter comments here..."
            />
            <br/>

            <label htmlFor="customer-selector">Customer: </label>
            <select id="customer-selector" defaultValue="defaultValue">
              <option disabled value="default">Choose a Customer...</option>
              {customerOptions}
            </select>

            <br/>

            <label htmlFor="table-selector">Table: </label>
            <select id="table-selector" defaultValue="defaultValue">
              <option disabled value="default">Choose a Table...</option>
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
