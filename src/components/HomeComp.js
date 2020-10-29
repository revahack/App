import React, {Fragment} from "react";
import echo from "./static/echoar.jfif";

const Home = () => {

  return(
    <Fragment>

        <span className="column lg-2 md-1 sm-0"></span>
        <div className="column lg-5 md-7 sm-9 primary_inverted page_container">
            <h2>Welcome !!</h2>
            <h6>Upcoming Events</h6>
            <div className="dlevel2">
                <img src={echo} alt="Echo AR" className="event_card" />
            </div>
        </div>

    </Fragment>
  );

}

export default Home;