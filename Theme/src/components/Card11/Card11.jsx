import React, { FC, useState } from "react";
import PostCardSaveAction from "../../components/PostCardSaveAction/PostCardSaveAction";
// import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import PostCardLikeAndComment from "../../components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "../../components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "../../components/PostFeaturedMedia/PostFeaturedMedia";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
// import { cardLoadingData } from "./SingleCard";
=======
// import { useAppDispatch } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { cardLoadingData } from "./SingleCard";

>>>>>>> 51a1746535931e9fa803506f8e3102cadd6f63b1

const Card11 = ({
  className = "h-full",
  post,
  cardvalue,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
}) => {

<<<<<<< HEAD
  dispatch({
    type: "addCardValue",
    payload: cardvalue,
  });

  //getting id from Page search

  // const dispatch = useDispatch();
=======
//getting id from Page search
>>>>>>> 51a1746535931e9fa803506f8e3102cadd6f63b1

  // cardLoadingData(dispatch , cardvalue)

  ////////////////////////////////

  const { id } = cardvalue;

  console.log(cardvalue, "card11");

  //destructuring the post that  we are getting form  PageSearch component

<<<<<<< HEAD
  const { title, date_download, source_domain } = post;
=======
  const { title, date_download ,source_domain} = post;
  

>>>>>>> 51a1746535931e9fa803506f8e3102cadd6f63b1

  // Giving a static value to herf 

  const href = `/${id}`

<<<<<<< HEAD
  //useState hook from the theme
=======


  //useState hook from the theme  
>>>>>>> 51a1746535931e9fa803506f8e3102cadd6f63b1
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
<<<<<<< HEAD
        <Link to={href} className="absolute inset-0">
          <PostFeaturedMedia post={post} isHover={isHover} />
        </Link>
=======

      <Link to={href} className="absolute inset-0">
             <PostFeaturedMedia post={post} isHover={isHover}  />
             
      </Link>
    
        
>>>>>>> 51a1746535931e9fa803506f8e3102cadd6f63b1
      </div>
      

  
   
      {/* {/ Passing the post props in PostCardMeta component  /} */}

      <div className="p-4 flex flex-col flex-grow space-y-3">

        {!hiddenAuthor ? (
          <PostCardMeta meta={post} />
        ) : (
          <span className="text-xs text-neutral-500">{date_download}</span>
        )}

        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
<<<<<<< HEAD
          {/* // putting &nbsp so that we can add somespace temporarely */}

          <Link to={href} className="line-clamp-2" title={title}>
            {title} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </Link>
        </h2>
        <div className="flex items-end justify-between mt-auto">
          <PostCardLikeAndComment className="relative" postData={post} />

=======
        {/* {/ // putting &nbsp so that we can add somespace temporarely /} */}

          <Link to={href} className="line-clamp-2" title={title} >
            {title} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            
          </Link>
        </h2>
        <div className="flex items-end justify-between mt-auto">

          <PostCardLikeAndComment className="relative" postData={post}  />
          
>>>>>>> 51a1746535931e9fa803506f8e3102cadd6f63b1
          <PostCardSaveAction className="relative" postData={post} />
        </div>
      </div>
    </div>
  );
};

export default Card11;
