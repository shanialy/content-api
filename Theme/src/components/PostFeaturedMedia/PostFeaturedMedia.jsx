import React, { FC, useRef } from "react";
import NcImage from "../../components/NcImage/NcImage";
// import { PostDataType } from "data/types";
import GallerySlider from "./GallerySlider";
import MediaVideo from "./MediaVideo";
import PostTypeFeaturedIcon from "../../components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import MediaAudio from "./MediaAudio";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// export interface PostFeaturedMediaProps {
//   className?: string;
//   post: PostDataType;
//   isHover?: boolean;
// }

// CHECK FOR VIDEO CARD ON VIEW
let PREV_RATIO = 0.0;

const PostFeaturedMedia = ({
  className = " w-full h-full ",
  post,
  isHover = false,
}) => {
  //getting post from Cart11 component
  
  const { source_domain ,date_download, facebook_shares  ,image_url} = post;

  const videoRef = useRef(null);

  let IS_MOBILE = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    IS_MOBILE = true;
  }
  const cardIntersectionObserver = useIntersectionObserver(videoRef, {
    freezeOnceVisible: false,
    threshold: 0.999,
    rootMargin: "20px",
  });
  const IN_VIEW =
    (cardIntersectionObserver?.intersectionRatio || -1) > PREV_RATIO;
  PREV_RATIO = cardIntersectionObserver?.intersectionRatio || 0;



  return (
    <div
      className={`nc-PostFeaturedMedia relative ${className}`}
      data-nc-id="PostFeaturedMedia"
     // ref={videoRef}
    >

      <NcImage containerClassName="absolute inset-0" src={image_url} source_domain={source_domain} date_download={date_download} />
     {/* // {renderContent()} */}
    </div>
  );
};

export default PostFeaturedMedia;
