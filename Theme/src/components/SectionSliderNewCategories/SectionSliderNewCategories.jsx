import React, { FC, useEffect } from "react";
import Heading from "../Heading/Heading";
// import Glide from "@glidejs/glide";
// import { PostDataType, TaxonomyType } from "data/types";
import {DEMO_CATEGORIES  } from "../../data/taxonomies";
// import ncNanoId from "../../utils/ncNanoId";
import CardCategory3 from "../CardCategory3/CardCategory3";
import CardCategory4 from "../CardCategory4/CardCategory4";
import CardCategory1 from "../CardCategory1/CardCategory1";
import CardCategory2 from "../CardCategory2/CardCategory2";
import CardCategory5 from "../CardCategory5/CardCategory5";

// export interface SectionSliderNewCategoriesProps {
//   className?: string;
//   itemClassName?: string;
//   heading: string;
//   subHeading: string;
//   categories: PostDataType["categories"];
//   categoryCardType?: "card1" | "card2" | "card3" | "card4" | "card5";
//   itemPerRow?: 4 | 5;
// }

const SectionSliderNewCategories = ({
  heading,
  subHeading,
  className = "",
  itemClassName = "",
  categories,
  itemPerRow = 5,
  categoryCardType = "card3",
}
) => {
  // const UNIQUE_CLASS = ncNanoId("sliderNewCategories_");

  // const MY_GLIDE = new Glide(`.${UNIQUE_CLASS}`, {
  //   direction:
  //     document.querySelector("html")?.getAttribute("dir") === "rtl"
  //       ? "rtl"
  //       : "ltr",
  //   perView: itemPerRow,
  //   gap: 50,
  //   bound: true,
  //   breakpoints: {
  //     1280: {
  //       perView: itemPerRow - 1,
  //     },
  //     1024: {
  //       gap: 24,
  //       perView: itemPerRow - 2,
  //     },
  //     768: {
  //       gap: 20,
  //       perView: itemPerRow - 2,
  //     },
  //     640: {
  //       gap: 20,
  //       perView: itemPerRow - 3,
  //     },
  //     500: {
  //       gap: 20,
  //       perView: 1.3,
  //     },
  //   },
  // });

  // useEffect(() => {
  //   if (!MY_GLIDE) return;
  //   MY_GLIDE.mount();
  // }, [MY_GLIDE]);

  const renderCard = (item,index) => {
    const topIndex = index < 3 ? `#${index + 1}` : undefined;
    // <CardCategory4/>
    switch (categoryCardType) {
      case "card1":
        return <CardCategory1 taxonomy={item} />;
      case "card2":
        return <CardCategory2  index={topIndex} taxonomy={item}/>;
      case "card3":
        return <CardCategory3  taxonomy={item}/>;
      case "card4":
        return <CardCategory4  index={topIndex} taxonomy={item}/>;
      case "card5":
        return <CardCategory5  taxonomy={item}/>;
      default:
        return null;
    }
  };

  return (
          <>
         <Heading desc={subHeading} hasNextPrev>
          {heading}
         </Heading>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8 mt-8 lg:mt-10">
              {DEMO_CATEGORIES.map((item,index) => (
                <li key={index}>
                  {renderCard(item,index)}
                </li>
              ))}
            </div>


    {/* <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="flex flex-wrap"> */}
              {/* {renderCard} */}
              {/* {renderCard(<CardCategory4 />)} */}
            {/* {DEMO_CATEGORIES.map((item, index) => (
              
              <div><li key={index} className={`${itemClassName}`}>
                 {renderCard(item, index)}
              </li></div>
            ))} */}
          {/* </ul>
        </div>
        </div>
      </div> */}
      </>  );
};

export default SectionSliderNewCategories;
