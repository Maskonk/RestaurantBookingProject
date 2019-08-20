import React, {Component, Fragment} from 'react';
import "../styles/HomePage.css";
import "../styles/table.css";
import restaurant from '../Pictures/restaurant_for_homepage.jpg';


class Home extends Component {

    render() {
        return (

          <div style={{ backgroundColor: "lightblue"}}>
            <Fragment>
            <h1 style={{paddingTop:10, textAlign:"center"}}> Welcome to Kyle's Butcher's shop. </h1>
                <p style={{margin: 20, position:"absolute", width: 350}}> By using our online restaurant table booking system you can
                now build your own client database. So you can email your clients
                with some great promos to drive more business and boost sales
                whenever you want. </p>

                <center style={{marginLeft:300, marginTop:50, marginBottom:50 }}>
                <img src={restaurant} width="850" height="450" border="3" alt="dining_room"/>
                </center>
            </Fragment>
          </div>
        )
    }
}

export default Home;
