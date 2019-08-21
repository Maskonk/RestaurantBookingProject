import React, {Component, Fragment} from 'react';

class BookingForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: "",
      date: "",
      partySize: "",
      comments: "",
      customer: "",
      tables: null
    };
    this.handlePartySizeChange = this.handlePartySizeChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAvailClick = this.handleAvailClick.bind(this);
    this.buildPayLoad = this.buildPayLoad.bind(this);
  }

  buildPayLoad() {
    return (
        {
          time: this.state.time,
          date: this.state.date,
          partySize: this.state.partySize,
          comments: this.state.comments,
          customer: this.state.customer,
          table: "http://localhost:8080/tables/" + this.state.tables[0].id
        }
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    // TODO: input validation

    fetch("http://localhost:8080/bookings", {
      method: 'POST',
      body: JSON.stringify(this.buildPayLoad()),
      headers: {'Content-Type': 'application/json'}
    })
        .then(() => {
          window.location = '/bookings'
        });
    this.setState({
      time: "",
      date: "",
      partySize: "",
      comments: "",
      customer: ""
    })
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

  handleCustomerChange(event) {
    this.setState({customer: event.target.value})
  }

  handleCommentsChange(event) {
    this.setState({comments: event.target.value})
  }

  handleAvailClick(event) {
    console.log("I was clicked");
    let url = "http://localhost:8080/";
    fetch(url + "tables/bigenough/" + (this.state.partySize - 1))
        .then(res => res.json())
        .then(data =>
            this.setState({tables: data}))
        .catch(err => console.error())
  }

  render() {
    const customerOptions = this.props.customers.map((customer, index) => {
      return <option
          value={"http://localhost:8080/customers/" + customer.id}
          key={index}
      >{customer.name} ({customer.contact})</option>
    });

    if (this.props.tables !== null) {
      const tableOptions = this.props.tables._embedded.tables.map((table, index) => {
        return <option
            value={"http://localhost:8080/tables/" + table.id}
            key={index}
        >Table: {table.id}, Capacity: {table.capacity}</option>
      });

      return (
          <Fragment>
            <form className="booking-form" onSubmit={this.handleSubmit}>

              <label htmlFor="customer-selector">Customer: </label>
              <select id="customer-selector"
                      value={this.state.customer} onChange={this.handleCustomerChange}>
                <option value="">Choose a Customer...</option>
                {customerOptions}
              </select>
              <br/>
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

              {this.state.partySize &&
              <input type="button" onClick={this.handleAvailClick} value="Check Availability!"/>
              }
              <br/>

              {(this.state.tables != null && this.state.tables.length === 0) &&
              <p>No Availability</p>
              }

              {(this.state.tables != null && this.state.tables.length > 0) &&

              <div>
                <label htmlFor="booking-comments">Booking Comments: </label>
                <input
                    type="text"
                    id="booking-comments"
                    placeholder="Enter comments here..."
                    value={this.state.comments}
                    onChange={this.handleCommentsChange}
                />

                <input type="submit" value="Make booking"/>
              </div>
              }
            </form>
          </Fragment>
      )
    }
  }
}

export default BookingForm;
