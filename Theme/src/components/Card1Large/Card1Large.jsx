// import { Transition } from "@headlessui/react";
// import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
// import NcImage from "components/NcImage/NcImage";
// import NextPrev from "components/NextPrev/NextPrev";
// import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
// import { PostDataType } from "data/types";
import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";
// import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
// import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";

const CardLarge1 = (
  {
    // className = "",
    // isShowing = true,
    //   post,
    //   onClickNext = () => {},
    //   onClickPrev = () => {},
  }
) => {
  const href = "/";
  const title = "Articles";
  const title2 = "22.2k";
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 md:gap-12 mt-8 lg:mt-0">
        <div className="w-2/3 h-0.1 p-4 sm:p-8 xl:py-9 md:px-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg  shadow-lg rounded-3x4 space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg ">
          <h6 className="nc-card-title text-xl sm:text-2xl ">
            <Link to={href} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h6>
          <div className="flex items-center justify-between mt-auto">
            <b>{title2}</b>
          </div>
        </div>
        <div className="w-2/3 p-4 sm:p-8 xl:py-9 md:px-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg  shadow-lg rounded-3x4 space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg ">
          <h6 className="nc-card-title text-xl sm:text-2xl  ">
            <Link to={href} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h6>
          <div className="flex items-center justify-between mt-auto">
            <b>{title2}</b>
          </div>
        </div>
        <div className="w-2/3 p-4 sm:p-8 xl:py-9 md:px-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg  shadow-lg rounded-3x4 space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg ">
          <h6 className="nc-card-title text-xl sm:text-2xl  ">
            <Link to={href} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h6>
          <div className="flex items-center justify-between mt-auto">
            <b>{title2}</b>
          </div>
        </div>
        <div className=" w-2/3 p-4 sm:p-8 xl:py-9 md:px-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg  shadow-lg rounded-3x4 space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg ">
          <h6 className="nc-card-title text-xl sm:text-2xl  ">
            <Link to={href} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h6>
          <div className="flex items-center justify-between mt-auto">
            <b>{title2}</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLarge1;
