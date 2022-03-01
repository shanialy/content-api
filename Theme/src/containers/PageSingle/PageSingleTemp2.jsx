import React, { FC, ReactNode, useEffect } from "react";
import NcImage from "../../components/NcImage/NcImage";
import { SINGLE } from "../../data/single";
import SingleContent from "./SingleContent";
import { useAppDispatch } from "../../app/hooks";
import { changeCurrentPage } from "../../app/pages/pages";
import SingleHeader from "./SingleHeader";

export const PageSingleTemplate2Props = {
  className: String
}



const PageSingleTemplate2 = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();

  // UPDATE CURRENTPAGE DATA IN PAGEREDUCERS
  useEffect(() => {
    dispatch(changeCurrentPage({ type: "/single/:slug", data: SINGLE }));
    return () => {
      dispatch(changeCurrentPage({ type: "/", data: {} }));
    };
  }, []);

  return (
    <>
      <div
        className={`nc-PageSingleTemplate2 pt-8 lg:pt-16 ${className}`}
        data-nc-id="PageSingleTemplate2"
      >
        {/* SINGLE HEADER */}
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <SingleHeader hiddenDesc pageData={SINGLE} />
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <div className="">
          <NcImage
            containerClassName="my-10 sm:my-12 relative aspect-w-16 aspect-h-12 md:aspect-h-9 lg:aspect-h-6"
            className="absolute inset-0 object-cover w-full h-full"
            src={SINGLE.featuredImage}
          />
        </div>
        {/* SINGLE MAIN CONTENT */}
        <div className="container">
          <SingleContent data={SINGLE} />
        </div>

     
      </div>
    </>
  );
};

export default PageSingleTemplate2;
