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
                <center>
                  <div style={{display:"inline-block", marginTop: 30, width: 350, backgroundColor: "white", border: '3px solid black'}}>
                    <form onSubmit={this.handleDateFilterSubmit}>
                      <label htmlFor="dateFilter"> Filter by date: </label>
                      <input type="date" className="dateFilter" placeholder="yyyy-mm-dd" name="date"/>
                      <input type="submit" value="Filter"/>
                    </form>
                  </div>
                </center>
                <br/>
                <center>
                <AllBookingsTable bookings={this.props.bookings}/>
                </center>
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
