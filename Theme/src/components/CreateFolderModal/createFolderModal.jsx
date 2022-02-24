import React, { useEffect, useRef, useState } from "react";
import NcModal from "../NcModal/NcModal";
import Textarea from "../Textarea/Textarea";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import { RadioGroup } from "@headlessui/react";
import twFocusClass from "../../utils/twFocusClass";


const problemPlansDemo = [
  { name: "Violence", id: "Violence", label: "Violence" },
  { name: "Trouble", id: "Trouble", label: "Trouble" },
  { name: "Spam", id: "Spam", label: "Spam" },
  { name: "Other", id: "Other", label: "Other" },
];

const CreateFolderModal = ({
  problemPlans = problemPlansDemo,
  id,
  show,
  onCloseModalReportItem,
}) => {
  const textareaRef = useRef(null);

  const [problemSelected, setProblemSelected] = useState(problemPlans[0]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element = textareaRef.current;
        if (element) {
          (element).focus();
        }
      }, 400);
    }
  }, [show]);

  const handleClickSubmitForm = () => {
    console.log({
      id,
      problem: problemSelected,
      message: (textareaRef.current).value,
    });
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
          />
        </div>
        <div className="mt-4 space-x-3">
          <ButtonPrimary onClick={handleClickSubmitForm} type="submit">
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
