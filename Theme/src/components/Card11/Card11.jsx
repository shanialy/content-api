import React, { FC, useState } from "react";
import PostCardSaveAction from "../../components/PostCardSaveAction/PostCardSaveAction";
// import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import CategoryBadgeList from "../../components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "../../components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "../../components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "../../components/PostFeaturedMedia/PostFeaturedMedia";
import moment from 'moment'
import dateFormat from 'dateformat';



const Card11 = ({
  className = "h-full",
  post,
  cardvalue,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
}) => {

//getting id from Page search
  console.log(cardvalue)
 const{id} = cardvalue
  
  //destructuring the post that  we are getting form  PageSearch component

  const { title, date_download ,source_domain} = post;

  // Giving a static value to herf 

  const href = `/${id}`

  // making a function on date_download so that we can get the time  (need to import moment and dateFormat if you want to perform the function) we also used this in NcImage component

  // function relativeTime(date_download) {
  //   try {
  //     let ddate = dateFormat(date_download, "isoDateTime");
  //     ddate = ddate.split("T");
  //     let datePart = ddate[0];
  //     let timePart = ddate[1].split("+")[0];

  //     return moment(datePart + " " + timePart).fromNow();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  //useState hook from the theme  
  const [isHover, setIsHover] = useState(false);


  //returning of fuction starts here
  return (

    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card11"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      //
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${ratio}`}
      >

      <Link to={href} className="absolute inset-0">
             <PostFeaturedMedia post={post} isHover={isHover} />
      </Link>
        
      </div>
      

      {/* COMMENTING THE BADGE COMPONENT  */}

      
      {/* <span className="absolute top-3 inset-x-3">
        <CategoryBadgeList categories={category} />
      </span> */}

     {/* USING THE FOLLOWING INSTEAD OF BADGE  */}

      {/* <div className="text-neutral-500 dark:text-neutral-400 font-normal"
        style={{
          height: "18px",
          width: "240px",
          backgroundColor: "#f2b346",
          position: "absolute",
          top: "15px",
          borderRadius: "3px",
          opacity: "0.8",
        }}
      >
        <p style={{ fontSize: "12px" ,paddingLeft :"10px"  }}>{source_domain} . {relativeTime(date_download)} </p>
      </div> */}

      
   
      {/* Passing the post props in PostCardMeta component  */}

      <div className="p-4 flex flex-col flex-grow space-y-3">

        {!hiddenAuthor ? (
          <PostCardMeta meta={post} />
        ) : (
          <span className="text-xs text-neutral-500">{date_download}</span>
        )}

        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
        {/* // putting &nbsp so that we can add somespace temporarely */}

          <Link to={href} className="line-clamp-2" title={title}>
            {title} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            
          </Link>

        </h2>
        <div className="flex items-end justify-between mt-auto">

          <PostCardLikeAndComment className="relative" postData={post} />
          
          <PostCardSaveAction className="relative" postData={post} />
        </div>
      </div>
    </div>
  );
};

export default Card11;
