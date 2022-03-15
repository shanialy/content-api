import React from "react";
import { Listbox } from "@headlessui/react";
import "./DateRangeCalender.css"
import MembersRightSide from './MembersRightSide'

const DateRangeDropDown = ({
  className = "",
  facet
}) => {
  

  return (
    <div
      className={`nc-ArchiveFilterListBox ${className}`}
      data-nc-id="ArchiveFilterListBox"
    >
      <Listbox >
        <div className="relative md:min-w-[200px] " >
    
           <MembersRightSide facet={facet}/>
          
    
         
        </div>
      </Listbox>
    </div>
  );
};

export default DateRangeDropDown
