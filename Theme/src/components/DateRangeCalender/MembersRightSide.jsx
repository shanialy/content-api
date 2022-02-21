import React, { useState } from "react";
// import Topbtns from "./Topbtns";
// import ShowingResults from "./ShowingResults";
// import MembersEveryoneBox from "./Membereveryonebox";
// import DownloadBtn from "./DownloadBtn";
import CalenderFilter from "./Calender-filter";
import DatePicker from "./Datepicker";
//import MembersCard from "./MembersCard";
function MembersRightSide() {
  const [calenderClick, setcalenderClick] = useState(false);
  function calenderOnClick(e) {
    setcalenderClick(!calenderClick);
  }
  return (
    <div className="reporting-section">
      {/* <Topbtns
        id="new-clicked-class"
        class="reporting-btntext reporting-btn1"
        name="everyone"
      />
      <ShowingResults from="1" to="100" total="1000" />
      <hr className="horizontal-line" /> */}

      <CalenderFilter calenderOnClick={calenderOnClick} />
      {/* <DownloadBtn />
      <FilterBtn /> */}
      {/* <MembersEveryoneBox /> */}
      {calenderClick && (
        <div className="Datepicker">
          <DatePicker />
        </div>
      )}
    </div>
  );
}

export default MembersRightSide;
//      <div className="Datepicker">
//<DatePicker />
//</div>
//      <div className="members-card">
//<MembersCard />
// </div>
