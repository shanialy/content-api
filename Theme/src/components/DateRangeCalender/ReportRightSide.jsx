import React, { useState } from "react";
import CalenderFilter from "./Calender-filter";
import DatePicker from "./Datepicker";

function ReportRightSide(props) {
  const [loggedIn, setloggedIn] = useState(true);

  const [buttonValue, setButtonValue] = useState("0");
  const [calenderClick, setcalenderClick] = useState(false);

  var firstbtnclass = true;
  var secondbtnclass = false;
  var thirdbtnclass = false;

  // function handleInput(e) {
  //   setButtonValue(e.target.value);
  // }
  function calenderOnClick(e) {
    setcalenderClick(!calenderClick);
  }

  if (buttonValue === "0") {
    firstbtnclass = true;
    secondbtnclass = false;
    thirdbtnclass = false;
  } else if (buttonValue === "1") {
    firstbtnclass = false;
    secondbtnclass = true;
    thirdbtnclass = false;
  } else {
    firstbtnclass = false;
    secondbtnclass = false;
    thirdbtnclass = true;
  }
  return (
    <div className="reporting-section">
  
      {loggedIn && buttonValue === "1" && (
        <div className="reporting-div">
          {/* //<ShowingResults from="1" to="100" total="1000" /> */}
          <CalenderFilter calenderOnClick={calenderOnClick} />
          {/* <DownloadBtn />
          <FilterBtn />
          <EventsIRightSideBox /> */}
          {calenderClick && (
            <div className="Datepicker">
              <DatePicker />
            </div>
          )}
        </div>
      )}
      {/* {!loggedIn && buttonValue === "2" && (
        <div>
          <EmailNIRightSideBox />
        </div>
      )} */}
      {loggedIn && buttonValue === "2" && (
        <div className="reporting-div">
         {/* // <ShowingResults from="1" to="100" total="1000" /> */}
          <CalenderFilter calenderOnClick={calenderOnClick} />
          {/* <DownloadBtn />
          <FilterBtn />
          <EmailIRightSideBox /> */}
          {calenderClick && (
            <div className="Datepicker">
              <DatePicker />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ReportRightSide;
//<EventsNIRightSideBox />
//<EventsIRightSideBox />
//<EmailIRightSideBox />
//<EmailNIRightSideBox />
//<FilterBtn />
/*  <div className="Datepicker">
        <DatePicker />
      </div> */

/*  <Topbtns
        id={secondbtnclass ? "new-clicked-class" : "null"}
        class="reporting-btntext reporting-btn2"
        name="events"
        value="1"
        clickbtn={handleInput}
      />
      <Topbtns
        id={thirdbtnclass ? "new-clicked-class" : "null"}
        class="reporting-btntext  reporting-btn3"
        name="e-mail"
        value="2"
        clickbtn={handleInput}
      /> */
