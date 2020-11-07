import React, {Fragment, useEffect, useState} from "react";
import rhlogo from "./static/rhlogo.png";

const Home = () => {

  const [hours, sethours] = useState ([]);
  const [minutes, setminutes] = useState ([]);
  const [seconds, setseconds] = useState ([]);

  const timer = () =>{
    setInterval( ()=>{
      var countDownDate = new Date("Nov 7, 2020 18:00:00").getTime();

      var now = new Date().getTime();
  
      var distance = countDownDate - now;
  
      sethours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setminutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setseconds(Math.floor((distance % (1000 * 60)) / 1000));  
    }, 1000);
  }

  useEffect(() => {
      timer();
  }, []);

  return(
    <Fragment>

        <div className="column lg-5 md-7 sm-9 primary_inverted page_container fullheight">
            <h4>Welcome !!</h4>

            <h6>Video Submission Ends In</h6>
              <div className="sch_event" style={{padding: "20px", background: "#ff4455"}}>
                <div className="column large6 medium6 small6">
                  <h1 className="ta_center" style={{fontSize: "12vh", lineHeight: "1.0"}}>{hours}</h1>
                  <h6 className="ta_center" style={{lineHeight: "0.4"}}>Hours</h6>
                </div>
                <div className="column large6 medium6 small6" style={{paddingTop: "6px"}}>
                  <h1 className="ta_center">{minutes} <span style={{fontSize: "2vh", lineHeight: "1.6"}}>Minutes</span></h1>
                  <h1 className="ta_center">{seconds} <span style={{fontSize: "2vh", lineHeight: "1.6"}}>Seconds</span></h1>
                </div>
              </div>

            <br /><br />
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