import React, {Component, Fragment} from 'react';

class NewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCustomer: {name: "", contact: 0}
        };
        this.findCustomerByContact = this.findCustomerByContact.bind(this);
        this.customerExists = this.customerExists.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    findCustomerByContact(event) {
        for (let customer of this.props.customers) {
            if (customer.contact === event.target.value) {
                this.setState({selectedCustomer: customer});
                return true;

            }
        }
        this.setState({selectedCustomer: {name: "", contact: 0}});
    }

    customerExists(customer) {
        for (let cus of this.props.customers) {
            console.log("cus: ", cus);
            console.log("customer: ", customer);
            if ((cus.name === customer.name)&&(cus.contact === customer.contact)) {
                console.log("match");
                return true;
            }
        }
        return false;
    }

    handleSubmit(event) {
        event.preventDefault();
        event.persist();
        let customer = {};
        if (this.customerExists({name: event.target.name.value, contact: event.target.contact.value})) {
            customer = this.state.selectedCustomer;
            this.postBooking(event, customer);
        }
        else {
            customer = {
                name: event.target.name.value,
                contact: event.target.contact.value
            };
            console.log("Customer: ", customer);
            fetch("http://localhost:8080/customers", {
                method: 'POST',
                body: JSON.stringify(customer),
                headers: { 'Content-Type': 'application/json'}
            }).then(res => res.json()).then(data =>
            { this.postBooking(event, data)
            })
        }
        }

    postBooking(event, customer) {
        const booking = {
            date: event.target["booking-date"].value,
            time: event.target["booking-time"].value,
            partySize: event.target.partysize.value,
            comments: event.target.comments.value,
            table: event.target.tableselect.value,
            customer: "http://localhost:8080/customers/" + customer.id
        }; console.log("Booking: ", booking);
        fetch("http://localhost:8080/bookings", {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: { 'Content-Type': 'application/json'}
        }).then(window.location = "/bookings")
    }

    render() {
        let contactOptions = null;
        if (!this.props.customers) {contactOptions = null;}
        else {
            contactOptions = this.props.customers.map((customer, index) => {return <option value={customer.contact} key={index}/>});
        }

        let tableOptions;
        if (this.props.tables !== null) {
            this.tableOptions = this.props.tables._embedded.tables.map((table, index) => {
                return <option
                    value={"http://localhost:8080/tables/" + table.id}
                    key={index}
                >Table: {table.id}, Capacity: {table.capacity}</option>
            });
        }

        return (
            <Fragment>
                <form className="booking-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="contact">Telephone Number:</label>
                    <input type="text" list="customer-contacts" onChange={this.findCustomerByContact} id="contact"/>
                    <datalist id="customer-contacts">
                        {contactOptions}
                    </datalist>
                    <br/>

                    <label htmlFor="name">Customer Name:</label>
                    <input
                        type="text"
                        placeholder="Customer Name..."
                        id="name"
                        defaultValue={this.state.selectedCustomer.name}/>
                    <br/>
                    <label htmlFor="booking-time">Booking Time: </label>
                    <input
                        type="time"
                        id="booking-time"/>
                    <br/>
                    <label htmlFor="booking-date">Booking Date: </label>
                    <input
                        type="date"
                        id="booking-date" min="2019-01-01" max="2019-12-31"/>
                    <br/>
                    <label htmlFor="partysize">Booking Size: </label>
                    <input
                        type="number"
                        id="partysize"
                        min="1"/>

                    <br/>

                    <label htmlFor="tableselect">Table: </label>
                    <select id="tableselect">
                        <option value="">Choose a Table...</option>
                        {this.tableOptions}
                    </select>

                    <br/>

                    <label htmlFor="comments">Booking Comments: </label>
                    <input
                        type="text"
                        id="comments"
                        placeholder="Enter comments here..."/>

                    <input type="submit" value="Make booking"/>
                </form>
            </Fragment>
        );
    }
}

export default NewForm;