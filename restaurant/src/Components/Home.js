import React, {Component, Fragment} from 'react';
import "../styles/HomePage.css";
import restaurant from '../Pictures/restaurant_for_homepage.jpg';





class Home extends Component {

    render() {
        return (
          <div style={{ backgroundColor: "lightblue"}}>
            <Fragment>
                <p> Welcome to Kyle Butchers shop </p>
                <h1> Welcome to Kyle Butchers shop </h1>
                <center>
                <img src={restaurant} width="950" height="550" align="center" border="3"/>
                </center>

            </Fragment>
          </div>
        )
    }
}

export default Home;
