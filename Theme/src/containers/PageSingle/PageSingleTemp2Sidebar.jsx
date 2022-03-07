import React, { FC, ReactNode, useEffect } from "react";
import NcImage from "../../components/NcImage/NcImage";
import { SINGLE } from "../../data/single";
import SingleContent from "./SingleContent";
import { useAppDispatch } from "../../app/hooks";
import { changeCurrentPage } from "../../app/pages/pages";
import SingleHeader from "./SingleHeader";

export const PageSingleTemp2SidebarProps = {
  className: String
}


const PageSingleTemp2Sidebar = ({
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
        className={`nc-PageSingleTemp2Sidebar pt-8 lg:pt-16 ${className}`}
        data-nc-id="PageSingleTemp2Sidebar"
      >
        {/* SINGLE HEADER */}
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <SingleHeader hiddenDesc pageData={SINGLE} />
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <NcImage
          containerClassName="my-10 sm:my-12"
          className="object-cover w-full h-full"
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

export default PageSingleTemp2Sidebar;
