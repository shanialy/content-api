import React from "react";
import PostCardLikeAndComment from "../../components/PostCardLikeAndComment/PostCardLikeAndComment";
import SocialsShare from "../../components/SocialsShare/SocialsShare";
import BookmarkContainer from "../BookmarkContainer/BookmarkContainer";
import { PostDataType } from "../../data/types";

export const SingleMetaActionProps = {
  className: String,
  meta: PostDataType,
};

const SingleMetaAction = ({ className = "mt-5 sm:mt-8", meta }) => {
  const { id } = meta;

  return (
    <div className={`nc-SingleMetaAction ${className}`}>
      <div className="flex flex-col space-y-4 mt-auto sm:flex-row sm:space-x-3 sm:space-y-0 sm:items-center sm:justify-between">


        <div className="flex space-x-3 items-center sm:space-x-4">
          <SocialsShare
          cardData={meta}
            className="flex space-x-2"

            itemClass="w-9 h-9 bg-neutral-100 text-lg hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-300"
          />
          <div className="border-l border-neutral-300 dark:border-neutral-700 h-6"></div>
      
        </div>
      </div>
    </div>
  );
};

export default SingleMetaAction;
