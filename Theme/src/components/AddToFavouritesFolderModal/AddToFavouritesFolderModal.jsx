import React, { useEffect, useRef, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import NcModal from "../NcModal/NcModal";
import Textarea from "../Textarea/Textarea";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import { RadioGroup } from "@headlessui/react";
import twFocusClass from "../../utils/twFocusClass";
import { useCreateFolderMutation } from "../../app/Api/contentApi";
import ArchiveFilterListBox from "../ArchiveFilterListBox/ArchiveFilterListBox";
import Input from "../Input/Input";
import ScrollableSelectBox from "../ScrollableSelectBox/ScrollableSelectBox";

const AddToFavouritesFolderModal = ({ id, show, onCloseModalReportItem }) => {
  const textareaRef = useRef(null);
  const history = useHistory();
  const [folderName, setFolderName] = useState();
  const [createFolder, createFolderObj] = useCreateFolderMutation();
  const [showAddFolder, setShowAddFolder] = useState(false);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element = textareaRef.current;
        if (element) {
          element.focus();
        }
      }, 400);
    }
  }, [show]);

  // handlers
  const handleClickSubmitForm = (e) => {
    setShowAddFolder(false);
    // e.preventDefault();
    // createFolder({ folderName: folderName });
    // history.push("/topics");
  };

  const handelShowAddFolder = (e) => {
    e.preventDefault();
    setShowAddFolder(true);
  };

  const renderContent = () => {
    return (
      <form action="#">
        {/* TEXAREA MESSAGER */}

        <ScrollableSelectBox />

        {!showAddFolder ? (
          <ButtonPrimary
            onClick={(e) => handelShowAddFolder(e)}
            className="bg-green-500 hover:bg-green-600 rounded-lg h-11 mt-3"
          >
            Add Folder
          </ButtonPrimary>
        ) : (
          <>
            <div className="mt-4">
              <h6 className="text-md text-neutral-700">Folder Name</h6>

              <Input
                type="text"
                placeholder="Enter Folder Name"
                className="mt-1 rounded-lg border-slate-300"
                required={true}
                id="report-message"
                onChange={(e) => setFolderName(e.target.value)}
              />
            </div>
            <div className="mt-4 space-x-6">
              <ButtonPrimary
                onClick={(e) => handleClickSubmitForm(e)}
                type="submit"
              >
                Create
              </ButtonPrimary>
              <ButtonSecondary type="button" onClick={onCloseModalReportItem}>
                Cancel
              </ButtonSecondary>
            </div>
          </>
        )}
      </form>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      className="h-140 w-80 my-5 overflow-visible text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300"
      isOpenProp={show}
      onCloseModal={onCloseModalReportItem}
      contentExtraClass="h-[30rem] w-[85%] sm:w-96"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle="Add To Favourites"
    />
  );
};

export default AddToFavouritesFolderModal;
