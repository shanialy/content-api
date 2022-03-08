import React, { useEffect, useRef } from "react";
import NcModal from "../NcModal/NcModal";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
// import { PostAuthorType } from "data/types";

// export interface ModalHideAuthorProps {
//   auhthor: PostAuthorType;
//   show: boolean;
//   onCloseModalHideAuthor: () => void;
// }

const ModalHideAuthor = ({
  auhthor,
  show,
  onCloseModalHideAuthor,
}) => {

    const {authors} = auhthor.fields
    const {id} = auhthor
  const textareaRef = useRef(null);

  const handleClickSubmitForm = () => {
    console.log(id);
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element = textareaRef.current;
      }, 400);
    }
  }, [show]);

  const renderContent = () => {
    return (
      <form action="#">
        <h3 className="text-lg font-semibold text-neutral-900">
          Hide stories from {authors}
        </h3>
        <span className="text-sm">
          We will hide all articles from <strong>{authors}</strong>.
          You will no longer see their articles?
        </span>
        <div className="mt-4 space-x-3">
          <ButtonPrimary onClick={handleClickSubmitForm} type="submit">
            Hide
          </ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModalHideAuthor}>
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
      onCloseModal={onCloseModalHideAuthor}
      contentExtraClass="max-w-screen-sm"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalHideAuthor;
