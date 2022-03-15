import React, { useState } from "react";
import CalenderFilter from "./Calender-filter";
import DatePicker from "./Datepicker";
import "./DateRangeCalender.css"


function MembersRightSide({facet}) {
  const [calenderClick, setcalenderClick] = useState(false);
  function calenderOnClick(e) {
    setcalenderClick(!calenderClick);
  }

  return (

    <div style={{top : "10px"}} >
    <div className="rdrDateRangePickerWrapper">

 
    <CalenderFilter  calenderOnClick={calenderOnClick} />
     
      {calenderClick && (
        <div className="Datepicker" >
          <DatePicker  facet={facet}/>
        </div>
      )}

      </div>
      </div>


  );
}

export default MembersRightSide;

