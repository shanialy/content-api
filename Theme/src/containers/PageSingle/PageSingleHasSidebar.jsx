import React, { useEffect } from "react";
import SingleHeader from "./SingleHeader";
import NcImage from "../../components/NcImage/NcImage";
import { SINGLE } from "../../data/single";
import SingleContent from "./SingleContent";
import { useAppDispatch } from "../../app/hooks";
import { changeCurrentPage } from "../../app/pages/pages";;




const PageSingleHasSidebar = ({
  className = "",
}) => {
  // DEMO DATA
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
        className={`nc-PageSingleHasSidebar pt-10 lg:pt-16 ${className}`}
        data-nc-id="PageSingleHasSidebar"
      >
        {/* SINGLE HEADER */}
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <SingleHeader pageData={SINGLE} />
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <NcImage
          containerClassName="container my-10 sm:my-12"
          className="object-cover w-full h-full rounded-xl"
          src={SINGLE.featuredImage}
        />

        {/* SINGLE MAIN CONTENT */}
        <div className="container flex flex-col my-10 lg:flex-row ">
          <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-20">
            <SingleContent data={SINGLE} />
          </div>
         
        </div>

        
      </div>
    </>
  );
};

export default PageSingleHasSidebar;
