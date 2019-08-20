import React, {Component, Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import AllBookings from "../Components/AllBookings";
import AllCustomers from "../Components/AllCustomers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewCustomer from "../Components/NewCustomer";
import NewBooking from "../Components/NewBooking";
import EditCustomer from "../Components/EditCustomer"
import EditBooking from "../Components/EditBooking"

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            customers: [],
            tables: null
        };
        this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this);
        this.handleCustomerUpdate = this.handleCustomerUpdate.bind(this);
    }

    handleCustomerSubmit(submittedCustomer) {
      const updatedCustomers = [...this.state.customers, submittedCustomer];
      this.setState({customers: updatedCustomers})
    }

    handleCustomerUpdate(customer) {
        console.log("Customer:", customer);
        fetch('http://localhost:8080/customers/' + customer.id, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)
            }).then(() => {
            window.location = '/customers/edit/' + customer.id
        })
    }


    findCustomerById(id) {
        for (let customer of this.state.customers) {
            if (customer.id === parseInt(id)) {
                return customer;
            }
        }
        return null;
    }

    findBookingsById(id) {
        for (let booking of this.state.bookings) {
            if (booking.id === parseInt(id)) {
              return booking;
            }
        }
    }

    componentDidMount() {
        let url = "http://localhost:8080/";
        fetch(url + "bookings/").then(res => res.json()).then(data => this.setState({bookings: data})).catch(err => console.error())
        fetch(url + "customers/by-visits-desc").then(res => res.json()).then(data => this.setState({customers: data})).catch(err => console.error())
        fetch(url + "tables").then(res => res.json()).then(data =>
        this.setState({tables: data})).catch(err => console.error())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/customers/new" render={() => <NewCustomer onCustomerSubmit={this.handleCustomerSubmit} />} />
                        <Route path="/customers/edit/:id" render={(props) =>{
                            const id = props.match.params.id;
                            const customer = this.findCustomerById(id);
                            return <EditCustomer customer={customer} handleCustomerUpdate={this.handleCustomerUpdate}/>
                        }}/>
                        <Route path="/customers" render={() => <AllCustomers customers={this.state.customers} />} />
                        <Route path="/bookings/new"
                          render={() => <NewBooking
                            customers={this.state.customers}
                            tables={this.state.tables}
                            />}
                        />
                        <Route path="/bookings/edit/:id" render={(props) => {
                          const id = props.match.params.id;
                          const booking = this.findBookingsById(id);
                          return <EditBooking booking={booking} />
                        }}/>
                        <Route path="/bookings" render={() => <AllBookings bookings={this.state.bookings} />} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}
export default Main;
