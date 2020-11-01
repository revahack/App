import React, {Fragment} from "react";

const Schedule = () => {

  return(
    <Fragment>

        <div className="column lg-5 md-7 sm-9 primary_inverted page_container">
            <h4>Schedule</h4>
            <br />
            <h6>30th October</h6>
            <a href="https://www.youtube.com/watch?v=nXoWfW4EMKU&feature=youtu.be">
                <div className="sch_event def">
                    <h6 className="title">Echo AR Workshop</h6>
                    <h5 className="speaker">Alon Grinshpoon</h5>
                    <h6 className="time">09PM to 10PM IST</h6>
                </div>
            </a>
            <br /><br />
            <h6>2nd November</h6>
            <div className="horizontal">
            <a href="https://www.youtube.com/watch?v=3j2uYQDVLHM">
              <div className="sch_event secondary_blue">
                    <h6 className="title">REVA HACK &lt;/&gt; 2020 Live Event Session A</h6>
                    <h5 className="speaker">Punit Chawla &amp; Aqib Ahmed</h5>
                    <h6 className="time">10AM to 12PM IST</h6>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=kSiK-b5TclA">
                <div className="sch_event secondary_green">
                    <h6 className="title">REVA HACK &lt;/&gt; 2020 Live Event Session B</h6>
                    <h5 className="speaker">Akash James, Singam Mohit Reddy &amp; Kunal Kushwaha</h5>
                    <h6 className="time">04PM to 06PM IST</h6>
                </div>
              </a>

            </div>

            <br /><br />
            <h6>3rd November</h6>
            <div className="horizontal">
                <a href="https://www.youtube.com/watch?v=3j2uYQDVLHM">
                <div className="sch_event secondary_red">
                        <h6 className="title">REVA HACK &lt;/&gt; 2020 Live Event Session C</h6>
                        <h5 className="speaker">Emily Perry, Sreevallabha &amp; Vishnu Sai</h5>
                        <h6 className="time">10AM to 12PM IST</h6>
                    </div>
                </a>
                <a href="https://www.youtube.com/watch?v=kSiK-b5TclA">
                <div className="sch_event primary_yellow">
                    <h6 className="title">REVA HACK &lt;/&gt; 2020 Live Event Session D</h6>
                    <h5 className="speaker">Himanhsu Ranjan</h5>
                    <h6 className="time">04PM to 06PM IST</h6>
                </div>
              </a>

            </div>

            <br /><br />
            <br /><br />
        </div>

    </Fragment>
  );

}

export default Schedule;