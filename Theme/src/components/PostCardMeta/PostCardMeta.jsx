import React, { FC } from "react";
import dateFormat from 'dateformat';
import Avatar from "../../components/Avatar/Avatar";

// export interface PostCardMetaProps {
//   className?: string;
//   meta: Pick<PostDataType, "date" | "author">;
//   hiddenAvatar?: boolean;
//   size?: "large" | "normal";
// }

const PostCardMeta = ({
  className = "leading-none",
  meta,
  hiddenAvatar = false,
  size = "normal",
}) => {
  const {title, category, date_download ,twitter_shares ,facebook_shares ,image_url} = meta;
 
 const res =  dateFormat(date_download, "mmmm dS, yyyy") 
 console.log(res)

  
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
       <div className="relative flex items-center space-x-2">
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={
              size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl"
            }
            imgUrl={image_url}
            userName={category}
          />
        )}
        {/* <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {category}
        </span> */}
      </div>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal" style={{padding: "0px 0px 0px 15px"}}>
          {res}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
