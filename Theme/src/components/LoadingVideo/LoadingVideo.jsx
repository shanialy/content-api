import React, { FC } from "react";

// export interface LoadingVideoProps {
//   className?: string;
// }

const LoadingVideo = ({ className = "" }) => {
  return (
    <div
    // style={{backgroundColor : "blue"}}
      className={`nc-LoadingVideo lds-ellipsis ${className}`}
      data-nc-id="LoadingVideo"
    >
      <div style={{backgroundColor : "#4a4ace"}}></div>
      <div  style={{backgroundColor : "#4a4ace"}}></div>
      <div  style={{backgroundColor : "#4a4ace"}}></div>
      <div  style={{backgroundColor : "#4a4ace"}}></div>
    </div>
  );
};

export default LoadingVideo;
