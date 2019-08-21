import React, {Component, Fragment} from 'react';

class NewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCustomer: {name: "", contact: 0}
        };
        this.findCustomerByContact = this.findCustomerByContact.bind(this);
    }

    findCustomerByContact(event) {
        for (let customer of this.props.customers) {
            console.log("Customer: ", customer);

            if (customer.contact === event.target.value) {
                console.log("Contact: ", event.target.value);
                this.setState({selectedCustomer: customer});
                return null;

            }
        }
        this.setState({selectedCustomer: {name: "", contact: 0}})
    }

    render() {
        let contactOptions = null;
        if (!this.props.customers) {contactOptions = null;}
        else {
            contactOptions = this.props.customers.map((customer, index) => {return <option value={customer.contact} key={index}/>});
        }
        return (
            <Fragment>
                <form className="booking-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="tel-number-input">Telephone Number:</label>
                    <input type="text" list="customer-contacts" onChange={this.findCustomerByContact}/>
                    <datalist id="customer-contacts">
                        {contactOptions}
                    </datalist>
                    <br/>

                    <label htmlFor="name-input">Customer Name:</label>
                    <input
                        type="text"
                        placeholder="Customer Name..."
                        id="name-input"
                        defaultValue={this.state.selectedCustomer.name}
                        // onChange={this.handleNameChange}
                    />
                    <br/>
                    <label htmlFor="booking-time">Booking Time: </label>
                    <input
                        type="time"
                        id="booking-time"
                        // value={this.state.time}
                        // onChange={this.handleTimeChange}
                    />
                    <br/>
                    <label htmlFor="booking-date">Booking Date: </label>
                    <input
                        type="date"
                        id="booking-date"
                        // value={this.state.date}
                        // onChange={this.handleDateChange}
                    />
                    <br/>
                    <label htmlFor="booking-size">Booking Size: </label>
                    <input
                        type="number"
                        id="booking-size"
                        min="1"
                        // value={this.state.partySize}
                        // onChange={this.handlePartySizeChange}
                    />

                    <br/>

                    <label htmlFor="table-selector">Table: </label>
                    <select id="table-selector"
                        // value={this.state.table} onChange={this.handleTableChange}
                    >
                        <option value="">Choose a Table...</option>
                        {/*{tableOptions}*/}
                    </select>

                    <br/>

                    <label htmlFor="booking-comments">Booking Comments: </label>
                    <input
                        type="text"
                        id="booking-comments"
                        placeholder="Enter comments here..."
                        // value={this.state.comments}
                        // onChange={this.handleCommentsChange}
                    />


                </form>
            </Fragment>
        );
    }
};

export default NewForm;