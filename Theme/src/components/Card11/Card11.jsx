import React, { FC, useState } from "react";
import PostCardSaveAction from "../../components/PostCardSaveAction/PostCardSaveAction";
// import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import CategoryBadgeList from "../../components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "../../components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "../../components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "../../components/PostFeaturedMedia/PostFeaturedMedia";
import moment from 'moment'
import SingleCard from './SingleCard'
import dateFormat from 'dateformat';
import { Provider ,useDispatch } from 'react-redux'


const Card11 = ({
  className = "h-full",
  post,
  cardvalue,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
}) => {

//getting id from Page search
const dispatch = useDispatch()

dispatch({
  type :"addCardValue",
  payload : cardvalue
})

////////////////////////////////
  
 const{id} = cardvalue
 console.log(cardvalue , "card11")
  
  //destructuring the post that  we are getting form  PageSearch component

  const { title, date_download ,source_domain} = post;

  // Giving a static value to herf 

  const href = `/${id}`



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
