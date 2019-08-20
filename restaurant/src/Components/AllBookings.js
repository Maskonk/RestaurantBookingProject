import React, {Component} from "react";
import AllBookingsTable from "./AllBookingsTable";

class AllBookings extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div style={{backgroundColor: "lightblue"}}>
                <h1 style={{paddingTop: 10, textAlign: "center"}}>Display bookings</h1>
                <form>
                <label htmlFor="dateFilter"> Filter by date: </label>
                <input type="text" className="dateFilter" placeholder="yyyy-mm-dd"/>
                <input type="submit" value="Filter"/>
                </form>
                <br/>
                <br/>
                <AllBookingsTable bookings={this.props.bookings}/>
            </div>
        )
    }
};



export default AllBookings;
