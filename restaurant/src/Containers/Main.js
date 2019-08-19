import React, {Component, Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import AllBooking from "../Components/AllBookings";
import AllCustomers from "../Components/AllCustomers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewCustomer from "../Components/NewCustomer";
import NewBooking from "../Components/NewBooking";

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }

    componentDidMount() {
        let url = "http://localhost:8080/bookings";
        fetch(url).then(res => res.json()).then(data => this.setState({bookings: data}, () => { console.log("bookings that louise wants", this.state.bookings)})).catch(err => console.error())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/customers/new" component={NewCustomer}/>
                        <Route path="/customers" component={AllCustomers}/>
                        <Route path="/bookings/new" component={NewBooking}/>
                        <Route path="/bookings" component={AllBooking}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }

}
export default Main;