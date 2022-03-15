import React from "react";



const AvatarEmoji = ({
  containerClassName = "ring-1 ring-white dark:ring-neutral-900",
  sizeClass = "h-6 w-6 text-sm",
  radius = "rounded-md",
 data,

}) => {
  return (
    <div
      className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor:"white", fontSize: "17px" , paddingTop : "10px"}}
    >

        <span
          className="absolute inset-0 w-full h-full object-cover"
          style={{paddingTop : "2px" , paddingLeft : "2px"}}
        >{data}</span>

      
    </div>
  );
};

export default AvatarEmoji;
