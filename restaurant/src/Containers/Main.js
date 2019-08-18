import React, {Component, Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import AllBooking from "../Components/AllBookings";
import AllCustomers from "../Components/AllCustomers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/customers" component={AllCustomers}/>
                        <Route path="/bookings" component={AllBooking}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }

}
export default Main;