import React, { useEffect, useRef, useState, } from "react";
import {useHistory, withRouter} from "react-router-dom"
import NcModal from "../NcModal/NcModal";
import Textarea from "../Textarea/Textarea";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import { RadioGroup } from "@headlessui/react";
import twFocusClass from "../../utils/twFocusClass";
import { useCreateFolderMutation } from "../../app/Api/contentApi";

const CreateFolderModal = ({ id, show, onCloseModalReportItem, }) => {
  const textareaRef = useRef(null);
  const history = useHistory();
  const [folderName, setFolderName] = useState();
  const [createFolder, createFolderObj] = useCreateFolderMutation();

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

  const handleClickSubmitForm = (e) => {
    // e.preventDefault();
     createFolder({folderName: folderName});
     history.push("/topics")
  };

  const renderContent = () => {
    return (
      <form action="#">
        {/* TEXAREA MESSAGER */}
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
            Folder Name
          </h4>
          {/* <span className="text-sm text-neutral-6000 dark:text-neutral-400">
            Please provide any additional information or context that will help
            us understand and handle the situation.
          </span> */}
          <Textarea
            placeholder="enter folder name"
            className="mt-3"
            ref={textareaRef}
            required={true}
            rows={4}
            id="report-message"
            onChange={(e) => setFolderName(e.target.value)}
          />
        </div>
        <div className="mt-4 space-x-3">
          <ButtonPrimary onClick={(e)=>handleClickSubmitForm(e)} type="submit">
            Create
          </ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModalReportItem}>
            Cancel
          </ButtonSecondary>
        </div>
      </form>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalReportItem}
      contentExtraClass="max-w-screen-md"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle="Create Folder"
    />
  );
};

export default CreateFolderModal;
