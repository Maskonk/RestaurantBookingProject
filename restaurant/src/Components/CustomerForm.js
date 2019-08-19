import React, {Component, Fragment} from 'react';

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: ''
    };
  }


  render() {
    return (
      <Fragment>
        <p>I'm a comment form </p>
        <form className="customer-form">
          <label for="name-input">Customer Name:</label>
          <input
            type="text"
            placeholder="Customer Name..."
            id="name-input"
            value={this.state.name}
          />
          <br/>
          <label for="tel-number-input">Telephone Number:</label>
          <input
            type="text"
            placeholder="Telephone Number..."
            value={this.state.contact}
          />
          <br/>
          <input type="submit" value="Add new customer"/>


        </form>
      </Fragment>
    )
  }
}


export default CustomerForm;
