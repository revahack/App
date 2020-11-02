import React, {Fragment} from "react";
import rhlogo from "./static/rhlogo.png";

const Home = () => {

  return(
    <Fragment>

        <div className="column lg-5 md-7 sm-9 primary_inverted page_container fullheight">
            <h4>Welcome !!</h4>
            <h6>Upcoming Events</h6>
            <div className="horizontal">
              <a href="https://www.youtube.com/watch?v=3j2uYQDVLHM">
              <div className="sch_event">
                    <h6 className="title">REVA HACK &lt;/&gt; 2020 Live Event Session A</h6>
                    <h5 className="speaker">Punit Chawla &amp; Aqib Ahmed</h5>
                    <h6 className="time">10AM to 12PM IST</h6>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=kSiK-b5TclA">
                <div className="sch_event">
                    <h6 className="title">REVA HACK &lt;/&gt; 2020 Live Event Session B</h6>
                    <h5 className="speaker">Akash James, Singam Mohit Reddy &amp; Kunal Kushwaha</h5>
                    <h6 className="time">04PM to 06PM IST</h6>
                </div>
              </a>

            </div>

            <br /><br />
            <h6>Polls</h6>
            <div className="sch_event dlevel2 def">
                <h6 className="title">Are you excited for REVA HACK &lt;/&gt; 2020?</h6>
                <br/>
                <button className="small">Yes</button>
                <button className="small">No</button>
                <br/>
                <br/>
                <span className="primary_red" style={{padding: "2px", margin: "4px"}}>
                  Polls are not active currently
                </span>

            </div>

            <br /><br />
            <h6>Want More Info??</h6>
            <a href="https://revahack.com/">
              <img src={rhlogo} className="sch_event dlevel2 def" alt="rhlogo" />
            </a>

          <br /><br />
          <br /><br />
        </div>

    </Fragment>
  );

}

export default Home;