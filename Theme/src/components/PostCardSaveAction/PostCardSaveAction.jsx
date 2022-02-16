// import { PostActionDropdownProps } from "components/PostActionDropdown/PostActionDropdown";
import BookmarkContainer from "../../containers/BookmarkContainer/BookmarkContainer";
// import { PostDataType } from "data/types";
import React, { FC } from "react";

// export interface PostCardSaveActionProps
//   extends Pick<PostActionDropdownProps, "dropdownPositon"> {
//   className?: string;
//   classBgIcon?: string;
//   readingTime?: number;
//   hidenReadingTime?: boolean;
//   postData: PostDataType;
// }

const PostCardSaveAction = ({
  className = "",
  hidenReadingTime = false,
  classBgIcon,
  readingTime,
  postData,
}) => {

  // getting postData from Card11


  const bookmark = true

  return (
    <div
      className={`nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${className}`}
      data-nc-id="PostCardSaveAction"
    >
      {!hidenReadingTime && !!readingTime && (
        <span>{readingTime} min read</span>
      )}

      <BookmarkContainer
        initBookmarked={bookmark.isBookmarked}
        containerClassName={classBgIcon}
      />
    </div>
  );
};

export default PostCardSaveAction;
