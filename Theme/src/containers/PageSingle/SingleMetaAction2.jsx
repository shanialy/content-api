import React from "react";
//import PostActionDropdown from "../../components/PostActionDropdown/PostActionDropdown";
import PostCardLikeAndComment from "../../components/PostCardLikeAndComment/PostCardLikeAndComment";
import { SOCIALS_DATA } from "../../components/SocialsShare/SocialsShare";
import BookmarkContainer from "../BookmarkContainer/BookmarkContainer";
import { PostDataType } from "../../data/types";
//import NcDropDown from "../../components/NcDropDown/NcDropDown";

// export const SingleMetaAction2Props = {
//   className: String,
//   meta: PostDataType
// }

const SingleMetaAction2 = ({
  className = "",
  meta,
}) => {
  const { id, bookmark } = meta;

  return (
    <div className={`nc-SingleMetaAction2 ${className}`}>
      <div className="flex flex-row space-x-2.5 items-center">
        <PostCardLikeAndComment
          itemClass="px-4 h-9 text-sm"
          hiddenCommentOnMobile
          postData={meta}
          className="!space-x-2.5"
        />
        <div className="px-1">
          <div className="border-l border-neutral-200 dark:border-neutral-700 h-6" />
        </div>

        <BookmarkContainer
          initBookmarked={bookmark.isBookmarked}
          postId={String(id)}
          containerClassName="h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
          iconClass="h-5 w-5"
        />
        
      </div>
    </div>
  );
};

export default SingleMetaAction2;
