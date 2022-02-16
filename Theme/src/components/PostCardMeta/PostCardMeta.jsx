import React, { FC } from "react";
import dateFormat from 'dateformat';
import Avatar from "../../components/Avatar/Avatar";
import moment from 'moment'

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

  //getting meta from the card  component written on line 97

  const { category, date_download  ,image_url} = meta;

  /// formating the date into (February 11th, 2022) fromat by using dateformat library
  
 const res =  dateFormat(date_download, "mmmm dS, yyyy") 
 console.log(res)

 // making function so we can get seconds

 function relativeTime(date_download) {
    try {
      let ddate = dateFormat(date_download, "isoDateTime");
      ddate = ddate.split("T");
      let datePart = ddate[0];
      let timePart = ddate[1].split("+")[0];

      return moment(datePart + " " + timePart).fromNow();
    } catch (err) {
      console.log(err);
    }
  }

  console.log(relativeTime())

  //Returning Statment starts here

  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
       <div className="relative flex items-center space-x-2">
       {/* passing image_url and category in Avatar component */}
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
        {/* the date which we formated on top is called here */}
          {res}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
