import React, {Component} from "react";
import AllBookingsTable from "./AllBookingsTable";

class AllBookings extends Component {

    constructor(props) {
        super(props);
        this.handleDateFilterSubmit = this.handleDateFilterSubmit.bind(this);
    }

    render() {

        return (
            <div style={{backgroundColor: "lightblue"}}>
                <h1 style={{paddingTop: 10, textAlign: "center"}}>Display bookings</h1>
                <form onSubmit={this.handleDateFilterSubmit}>
                <label htmlFor="dateFilter"> Filter by date: </label>
                <input type="date" className="dateFilter" placeholder="yyyy-mm-dd" name="date"/>
                <input type="submit" value="Filter"/>
                </form>
                <br/>
                <AllBookingsTable bookings={this.props.bookings}/>
            </div>
        )
    }

    handleDateFilterSubmit(event) {
        event.preventDefault();
        const date = event.target.date.value;
        console.log(date);
        if (date !== "") {
            this.props.handleDateFilter(date);
        }
        else {
            window.location = "/bookings"
        }
    }
};



export default AllBookings;
