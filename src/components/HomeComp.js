import React, {Fragment, useEffect, useState} from "react";
import rhlogo from "./static/rhlogo.png";

const Home = () => {

  /*
  const [hours, sethours] = useState ([]);
  const [minutes, setminutes] = useState ([]);
  const [seconds, setseconds] = useState ([]);

  const expiretimer = () =>{
    document.querySelector(".timer").innerHTML = "<div style='margin-top: 60px;'><h1 class='ta_center'>Time's Up</h1></div>";
  }

  const timer = () =>{

    setInterval( ()=>{
      var countDownDate = new Date("Nov 7, 2020 20:00:00").getTime();

      var now = new Date().getTime();
  
      var distance = countDownDate - now;

      if(distance<0){
        clearInterval();
        expiretimer();
      }
  
      sethours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setminutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setseconds(Math.floor((distance % (1000 * 60)) / 1000));  

    }, 1000);
  }

  useEffect(() => {
      timer();
  }, []);
  */

  return(
    <Fragment>

        <div className="column lg-5 md-7 sm-9 primary_inverted page_container fullheight">
            <h4>Welcome !!</h4>

            <h6>Final Round Is Here</h6>
            <div className="horizontal">
              <a href="https://youtu.be/x2mB3G1aDd0">
              <div className="sch_event">
                    <h6 style={{fontSize: "2.8vh", lineHeight: "1.4"}}>REVA HACK &lt;/&gt; 2020 Live Event</h6>
                    <h5 style={{fontSize: "5vh", lineHeight: "1.8"}}>Final Round</h5>
                    <h6 className="time" style={{width: "150px"}}>4:30PM to 7:30PM IST</h6>
                </div>
              </a>
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