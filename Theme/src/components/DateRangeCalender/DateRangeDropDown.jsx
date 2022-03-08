import React, { FC } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
// import { ListBoxItemType } from "components/NcListBox/NcListBox";
import DateRangeCalender from "./DateRangeCalender";
import ButtonDropdown from "../../components/ButtonDropdown/ButtonDropdown";
import "./DateRangeCalender.css"
// export interface ArchiveFilterListBoxProps {
//   className?: string;
//   lists: ListBoxItemType[];
// }

const DateRangeDropDown = ({
  className = "",
}) => {
  

  return (
    <div
      className={`nc-ArchiveFilterListBox ${className}`}
      data-nc-id="ArchiveFilterListBox"
    >
      <Listbox >
        <div className="relative md:min-w-[200px]">
          <Listbox.Button as={"div"}>
            <ButtonDropdown>DateRangeCalender</ButtonDropdown>
          </Listbox.Button>
          {/* <Transition
           // as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          > */}
            <Listbox.Options className="absolute right-0 z-20 w-52 py-1 mt-1 overflow-auto text-sm text-neutral-900 dark:text-neutral-200 bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900 dark:ring-neutral-700">

                <Listbox.Option
            
                  className={({ active }) =>
                    `${
                      active
                        ? "text-primary-700 dark:text-neutral-200 bg-danger-50 dark:bg-neutral-700"
                        : ""
                    } cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                //  value={<DateRangeCalender/>}
                >
                  
                      <span
                        className={` block truncate`}
                      >
                       <DateRangeCalender/>
                      </span>
                   
                </Listbox.Option>
              
            </Listbox.Options>
          {/* </Transition> */}
        </div>
      </Listbox>
    </div>
  );
};

export default DateRangeDropDown
