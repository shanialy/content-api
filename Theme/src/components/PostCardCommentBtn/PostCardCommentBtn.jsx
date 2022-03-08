// import { PostDataType } from "data/types";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import twFocusClass from "../../utils/twFocusClass";


// export interface PostCardCommentBtnProps {
//   className?: string;
//   href: PostDataType["href"];
//   commentCount?: PostDataType["commentCount"];
// }

const PostCardCommentBtn = ({
  className = "flex px-3 h-8 text-xs",
  facebook_shares,
  topic_facebook
}) => {

 //getting facebook_shares from  postCardlikeandComment

  return (
    <button
      className={`nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors ${className}`}
      title="Facebook_shares"
      data-nc-id="PostCardLikeAction"
    >
    {/* svg width="24" height="24" fill={ "currentColor" } viewBox="0 0 24 24" */}
      <i className="lab la-facebook-f mr-1 w-1 text-base" style={{padding : "10px"}}>
{/* 
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
        ></path> */}
         
      </i>



      <span className="ml-1 text-neutral-900 dark:text-neutral-200">
        {!facebook_shares? topic_facebook : ""}
      </span>
    </button>
  );
};

export default PostCardCommentBtn;
