import React, {Component, Fragment} from 'react';

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    // TODO: input validation
    fetch("http://localhost:8080/customers", {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(customer => {
        console.log(customer)
        this.props.onCustomerSubmit(customer)
      })


    this.setState({name: '', contact:''})
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleContactChange(event){
    this.setState({contact: event.target.value})
  }

  render() {
    return (
      <Fragment>
        <form className="customer-form" onSubmit={this.handleSubmit}>
          <label for="name-input">Customer Name:</label>
          <input
            type="text"
            placeholder="Customer Name..."
            id="name-input"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br/>
          <label for="tel-number-input">Telephone Number:</label>
          <input
            type="text"
            placeholder="Telephone Number..."
            value={this.state.contact}
            onChange={this.handleContactChange}
          />
          <br/>
          <input type="submit" value="Add new customer"/>


        </form>
      </Fragment>
    )
  }
}


export default CustomerForm;
