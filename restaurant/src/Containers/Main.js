import React, {Component, Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import AllBooking from "../Components/AllBookings";
import AllCustomers from "../Components/AllCustomers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewCustomer from "../Components/NewCustomer";
import NewBooking from "../Components/NewBooking";
import EditCustomer from "../Components/EditCustomer"

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            customers: []
        }
    }

    findCustomerById(id) {
        for (let customer in this.state.customers) {
            if (this.state.customers[customer].id === parseInt(id)) {
                console.log(this.state.customers[customer]);
                return this.state.customers[customer];
            }
        }
        return null;
    }

    componentDidMount() {
        let url = "http://localhost:8080/";
        fetch(url + "bookings").then(res => res.json()).then(data => this.setState({bookings: data})).catch(err => console.error())
        fetch(url + "customers/by-visits-desc").then(res => res.json()).then(data => this.setState({customers: data})).catch(err => console.error())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/customers/new" component={NewCustomer}/>
                        <Route path="/customers/edit/:id" render={(props) =>{
                            const id = props.match.params.id;
                            const customer = this.findCustomerById(id);
                            return <EditCustomer customer={customer} />
                        }}/>
                        <Route path="/customers" render={() => <AllCustomers customers={this.state.customers} />} />
                        <Route path="/bookings/new" component={NewBooking}/>
                        <Route path="/bookings" component={AllBooking}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}
export default Main;