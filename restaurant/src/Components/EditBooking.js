import React, {Component, Fragment} from 'react';

class EditBooking extends Component {

    constructor(props) {
      super(props);
      this.state = {
        editable: false,
        name: null,
        number: null,
        date: null,
        time: null,
        partySize: null,
        comments: null
      };
      this.handleEdit = this.handleEdit.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
      if ((prevProps !== this.props) && (this.props.booking !== null)) {
        this.setState({
          name: this.props.booking.customer.name,
          number: this.props.booking.table.id,
          date: this.props.booking.date,
          time: this.props.booking.time,
          partySize: this.props.booking.partySize,
          comments: this.props.booking.comments
        })
      }
    }

    render() {

    if (!this.props.booking) {
      return <p>Booking not found.</p>
    }
    return (
      <Fragment>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Table Nr.</th>
              <th>Date</th>
              <th>Time</th>
              <th>Party Size</th>
              <th>Comments</th>
            </tr>
            <tr>
              <td>{this.props.booking.customer.name}</td>
              <td>{this.props.booking.table.id}</td>
              <td>{this.props.booking.date}</td>
              <td>{this.props.booking.time}</td>
              <td>{this.props.booking.partySize}</td>
              <td>{this.props.booking.comments}</td>
              <td><button onClick={this.handleEdit}>Edit</button></td>
            </tr>
          </tbody>
        </table>

        { this.state.editable ?
        <div> <br />
            <h4> Edit Booking </h4>
        <form onSubmit={this.handleSubmit}>

            <label htmlFor="date"> Date: </label>
            <input type="text" defaultValue={this.props.booking.date} name="date" />
            <br />

            <label htmlFor="time"> Time: </label>
            <input type="text" defaultValue={this.props.booking.time} name="time" />
            <br />

            <label htmlFor="partySize"> Party Size: </label>
            <input type="number" defaultValue={this.props.booking.partySize} name="partySize" />
            <br />

            <label htmlFor="comments"> Comments: </label>
            <input type="text" defaultValue={this.props.booking.comments} name="comments" />

            <input type="submit" value="Save" />
        </form>
        </div> : null
    }

      </Fragment>
    )
  }
  handleSubmit(event) {
    event.preventDefault();
    this.handleEdit();
    const bookingSend = {
      id: this.props.booking.id,
      name: this.props.customer,
      number: this.props.table,
      date: event.target.date.value,
      time: event.target.time.value,
      partySize: event.target.partySize.value,
      comments: event.target.comments.value
    };
    this.props.handleBookingUpdate(bookingSend)
  }

  handleEdit() {
      this.setState({editable: !this.state.editable})
  }
}

export default EditBooking;
