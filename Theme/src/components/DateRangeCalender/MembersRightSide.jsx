import React, { useState } from "react";
import CalenderFilter from "./Calender-filter";
import DatePicker from "./Datepicker";
import "./DateRangeCalender.css"


function MembersRightSide() {
  const [calenderClick, setcalenderClick] = useState(false);
  function calenderOnClick(e) {
    setcalenderClick(!calenderClick);
  }
  return (

    <div className="reporting-section" >
    <div className="rdrDateRangePickerWrapper">
 
      <CalenderFilter calenderOnClick={calenderOnClick} />
     
      {calenderClick && (
        <div className="Datepicker">
          <DatePicker />
        </div>
      )}
      </div>
    </div>
  );
}

export default MembersRightSide;

