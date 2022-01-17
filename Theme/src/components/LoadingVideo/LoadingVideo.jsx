import React, { FC } from "react";

// export interface LoadingVideoProps {
//   className?: string;
// }

const LoadingVideo = ({ className = "" }) => {
  return (
    <div
      className={`nc-LoadingVideo lds-ellipsis ${className}`}
      data-nc-id="LoadingVideo"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingVideo;
