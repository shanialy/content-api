import React, { FC } from "react";
import dateFormat from 'dateformat';
import Avatar from "../../components/Avatar/Avatar";
import moment from 'moment'
import { useState  , useEffect} from "react"
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

  var {category , date , date_download  , facebook , image_url  , date_publish,sentiment, title ,source_domain ,twitter ,language} = meta

  /// formating the date into (February 11th, 2022) fromat by using dateformat library
  
 const res =  dateFormat(date_download, "mmmm dS, yyyy") 


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




 var [emoji , setEmoji] = useState(sentiment)
  //Returning Statment starts here

  function EmojiSetelment(){
    if(emoji == "POS"){
      setEmoji("Positive")
  }else if (emoji == "NEU"){
    setEmoji("Neutral")
  }else{
    setEmoji("Negative")
  }
  }

  useEffect(() => {
    EmojiSetelment()
  }, [])
  


  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >

  
       <div className="relative flex items-center space-x-2 ">
       {/* passing image_url and category in Avatar component */}
       <button 
      title={(sentiment == "POS") ? "Positve" :(sentiment == "NEG") ?  "Negative":(sentiment == "NEU")  ? "Neutral" : "Nothing"}
      data-nc-id="PostCardLikeAction">
        {!hiddenAvatar && (
          <Avatar

            radius="rounded-full"
            sizeClass={
              size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl"
            }
            imgUrl={emoji}
            userName={category}
          />
        )}
        </button>
     

        <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          Sentiment
        </span>

        </div>

      
      <>
      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal" style={{padding: "0px 0px 0px 15px"}}>
        {/* the date which we formated on top is called here */}
          {!res ? date_publish : date}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
