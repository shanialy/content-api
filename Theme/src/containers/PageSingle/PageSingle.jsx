import React, { useEffect } from "react";
import { PostDataType, TaxonomyType } from "../../data/types";
import NcImage from "../../components/NcImage/NcImage";
import { SINGLE } from "../../data/single";
import { useAppDispatch } from "../../app/hooks";
import { changeCurrentPage } from "../../app/pages/pages";
import SingleHeader from "./SingleHeader";

export const PageSingleProps = {
  className: String
}

export const SinglePageType = {
  tags: TaxonomyType,
  content: String 
}

const PageSingle= ({ className = "" }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // UPDATE CURRENTPAGE DATA IN PAGE-REDUCERS
    dispatch(changeCurrentPage({ type: "/single/:slug", data: SINGLE }));

    return () => {
      dispatch(changeCurrentPage({ type: "/", data: {} }));
    };
  }, []);



  return (
    <>
      <div
        className={`nc-PageSingle pt-8 lg:pt-16 ${className}`}
        data-nc-id="PageSingle"
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

        
      </div>
    </>
  );
};

export default PageSingle;
