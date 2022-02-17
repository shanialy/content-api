import React, { FC, useEffect } from "react";
import Heading from "../Heading/Heading";
import { gql, useQuery } from "@apollo/client";
import { useSearchkitVariables, useSearchkit } from "@searchkit/client";
import { withSearchkit, withSearchkitRouting } from "@searchkit/client";
// import Glide from "@glidejs/glide";
// import { PostDataType, TaxonomyType } from "data/types";
// import {DEMO_CATEGORIES  } from "../../data/taxonomies";
// import ncNanoId from "../../utils/ncNanoId";
// import CardCategory3 from "../CardCategory3/CardCategory3";
import CardCategory4 from "../CardCategory4/CardCategory4";
import {CategoryImage} from "../../data/CategoryImages";
import "./Removedot.css";
// import CardCategory1 from "../CardCategory1/CardCategory1";
// import CardCategory2 from "../CardCategory2/CardCategory2";
// import CardCategory5 from "../CardCategory5/CardCategory5";

const query = gql`
  query resultSet(
    $query: String
    $filters: [SKFiltersSet]
    $page: SKPageInput
    $sortBy: String
  ) {
    results(query: $query, filters: $filters) {
      summary {
        total
        appliedFilters {
          id
          identifier
          display
          label
          ... on DateRangeSelectedFilter {
            dateMin
            dateMax
            __typename
          }

          ... on ValueSelectedFilter {
            value
            __typename
          }
          __typename
        }
        sortOptions {
          id
          label
          __typename
        }
        query
        __typename
      }
      hits(page: $page, sortBy: $sortBy) {
        page {
          total
          totalPages
          pageNumber
          from
          size
          __typename
        }
        sortedBy

        items {
          ... on ResultHit {
            id
            fields {
              article_length
              category
              authors
              date_download
              language
              facebook_shares
              twitter_shares
              maintext
              source_domain
              title
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      facets {
        identifier
        type
        label
        display
        entries {
          label
          count
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

// const Facet = ({facet}) =>{
//   const api = useSearchkit()

//   return (
// <div>
//             <h1>All facets</h1>

//       <h3>{facet.label}</h3>
//       <h3>{facet.identifier}</h3>
//     <ul>
//       {facet.entries ? facet.entries.map((entry) => (
//         <li
//         onClick={() => {
//           api.toggleFilter({ identifier: facet.identifier, value: entry.label })
//           api.search()
//         }}

//         >{entry.label} - {entry.count}</li>
//       )): "waiting..."}
//     </ul>
//     </div>
//   )
// }

// const Sort = ({sort}) =>{
//   const api = useSearchkit()
//   // console.log(sort)

//   return (
//     <div>
//             <h1>All Sorting</h1>

//       <h4
//               onClick={() => {
//                 api.setSortBy( sort.id )
//                 api.search()
//               }}

//       >{sort.id}</h4>

//     <ul>
{
  /* {facet.entries ? facet.entries.map((entry) => (
        <li 
        onClick={() => {
          api.toggleFilter({ identifier: facet.identifier, value: entry.label })
          api.search()
        }
      }
        
        >{entry.label} - {entry.count}</li>
      )): "waiting..."} */
}
{
  /* </ul>
    </div>
  )
} */
}

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
}) => {
  const variables = useSearchkitVariables();
  const { data, error, loading } = useQuery(query, { variables });

<<<<<<< HEAD
  if (error) {
    console.log("Error");
  }
  if (loading) {
    console.log("Loading....");
  }
  //  if(!loading){console.log(data.results)
  //  console.log(data)
  const renderCard = (entry, index) => {
    return (
      <>
        <CardCategory4 label={entry.label} count={entry.count} index={index} />
      </>
    );
  };
=======
  if(error){console.log("Error")}
 if(loading){console.log("Loading....")}
//  if(!loading){console.log(data.results)
//  console.log(data)
const renderCard = (entry,index) => {

  let categoryimage =  CategoryImage(entry.label);
  return(
    <>
    <CardCategory4 label={entry.label} count={entry.count} index={index}  
    categoryimage={categoryimage} />
   </>
    )

  // return(
  //   <>
  //   <CardCategory4 label={entry.label} count={entry.count} index={index} />
  //   </>
  //   )

}
>>>>>>> f420240db9b36b9259220a32067177250000beea
  // const renderCard = (items) => {
  //   if(items.identifier == "category"){
  //     console.log(items)
  //     return(
  //       <div>
  //     {items.entries.map((entry) => {
  //        return(
  //         <CardCategory4 taxonomy={entry} />
  //          )
  //     })}
  //     </div>
  //     )}

  //   }
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

  // const renderCard = (item,index) => {
  //   const topIndex = index < 3 ? `#${index + 1}` : undefined;
  //   switch (categoryCardType) {
  //     case "card1":
  //       return <CardCategory1 taxonomy={item} />;
  //     case "card2":
  //       return <CardCategory2  index={topIndex} taxonomy={item}/>;
  //     case "card3":
  //       return <CardCategory3  taxonomy={item}/>;
  //     case "card4":
  //       return <CardCategory4  index={topIndex} taxonomy={item}/>;
  //     case "card5":
  //       return <CardCategory5  taxonomy={item}/>;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <>
<<<<<<< HEAD
      <Heading desc={subHeading} hasNextPrev>
        {heading}
      </Heading>
=======
        <Heading desc={subHeading} hasNextPrev>
          {heading}
         </Heading>


         {!loading ? 
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8 mt-8 lg:mt-10">
              { data.results.facets.map((items) => {
                if(items.identifier == "category"){
                  return(
                   items.entries.map((entry,index)=>{
               return( 
               <ul className="rem">
               <li key={index}>
                {renderCard(entry,index)}
                </li>
                </ul>
               )
                }))
                }
                
})}

 
            </div>
  :<h1>loading..</h1>         }
</>
      );
    }
>>>>>>> f420240db9b36b9259220a32067177250000beea

      {!loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8 mt-8 lg:mt-10">
          {data.results.facets.map((items) => {
            if (items.identifier == "category") {
              return items.entries.map((entry, index) => {
                // console.log(entry.label)
                return (
                  <li key={index}>
                    {/* {entry.label} */}
                    {renderCard(entry, index)}
                  </li>
                );
              });
            }
          })}
        </div>
      ) : (
        <h1>loading..</h1>
      )}
    </>
  );
};

export default withSearchkit(withSearchkitRouting(SectionSliderNewCategories));
