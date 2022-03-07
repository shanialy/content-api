import React, { FC, ReactNode, useEffect , useState } from "react";
//import { PostDataType, TaxonomyType } from "../../data/types";
import { SINGLE } from "../../data/single";
import SingleContent from "./SingleContent";
//import { CommentType } from "../../components/CommentCard/CommentCard";
import { useAppDispatch } from "../../app/hooks";
import { changeCurrentPage } from "../../app/pages/pages";
import SingleHeader from "./SingleHeader";
import { useSelector } from "react-redux";

export const PageSingleTemplate3Props = {
  className: String
}



const PageSingleTemplate3= ({
  className = "",
}) => {

  
    const cardData = useSelector(state => state.persistedReducer.card.cardData)

    // const [cardState , setCardState] = useState()

    // console.log(cardState)


      useEffect(() => {

        const response = localStorage.getItem("cardData")
        if(response){JSON.parse(response)}
   
    },[]);

    
    useEffect(() => {

      localStorage.setItem("cardData" , JSON.stringify(cardData))
     
    }, );
    

    
    


  return (
    <>
      <div
        className={`nc-PageSingleTemplate3 ${className}`}
        data-nc-id="PageSingleTemplate3"
      >
        <header className="relative pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-black">
          {/* SINGLE HEADER */}
          <div className="dark container relative z-10">
            <div className="max-w-screen-md">
              <SingleHeader
                hiddenDesc
                metaActionStyle="style2"
                pageData={cardData}
              />
            </div>
          </div>

          {/* FEATURED IMAGE */}
          <div className="mt-8 md:mt-0 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3">
            <div className="hidden md:block absolute top-0 left-0 bottom-0 w-1/5 from-neutral-900 dark:from-black bg-gradient-to-r"></div>
            <img
              className="block w-full h-full object-cover"
              src={cardData?.fields?.image_url}
              alt=""
            />
          </div>
        </header>

        {/* SINGLE MAIN CONTENT */}
        <div className="container mt-10">
          <SingleContent data={cardData} />
        </div>

        
      </div>
    </>
  );
};

export default PageSingleTemplate3;
