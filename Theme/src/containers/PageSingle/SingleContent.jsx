import React, { FC, useEffect, useRef } from "react";
import Tag from "../../components/Tag/Tag";
import { SinglePageType } from "./PageSingle";
import SingleContentDemo from "./SingleContentDemo";
import { useLocation } from "react-router";

// export const SingleContentProps = {
//   data: SinglePageType
// }

const SingleContent= ({
  data,
}) => {
  //{ data }
  // const { tags, author, commentCount, comments } = data;


  return (
    <div className="nc-SingleContent space-y-10">
      {/* ENTRY CONTENT */}
      <div
        id="single-entry-content"
        className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark"
      >
        {/* THIS IS THE DEMP CONTENT */}
        {/* IF YOUR DATA IS JSON, YOU CAN USE render with html-react-parser (https://www.npmjs.com/package/html-react-parser) */}
        <SingleContentDemo  data={data}/>
      </div>

     </div>
  );
};

export default SingleContent;
