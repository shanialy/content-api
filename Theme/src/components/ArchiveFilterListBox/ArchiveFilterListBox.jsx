import React, { FC } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import ButtonDropdown from "../../components/ButtonDropdown/ButtonDropdown";
import { useGetAllFoldersQuery } from "../../app/Api/contentApi";

const ArchiveFilterListBox = (className = "", lists) => {
  const getAllFolders = useGetAllFoldersQuery();
  const [selected, setSelected] = useState(lists[0]);
  return (
    <div
      className={`nc-ArchiveFilterListBox ${className}`}
      data-nc-id="ArchiveFilterListBox"
    >
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative md:min-w-[200px]">
          <Listbox.Button as={"div"}>
            <ButtonDropdown>{selected}</ButtonDropdown>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Data for the DropDown */}
            <Listbox.Options className="absolute right-0 z-20 w-52 py-1 mt-1 overflow-auto text-sm text-neutral-900 dark:text-neutral-200 bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900 dark:ring-neutral-700">
              {getAllFolders.data?.map(({ folderName }, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-primary-700 dark:text-neutral-200 bg-primary-50 dark:bg-neutral-700"
                        : ""
                    } cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={folderName}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {folderName}
                      </span>
                      {selected ? (
                        <span className="text-primary-700 absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-200">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ArchiveFilterListBox;
