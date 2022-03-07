import React from "react";
import ModalCategories from "./ModalCategories";
import { DEMO_CATEGORIES, DEMO_TAGS } from "../../data/taxonomies";
import LoadingVideo from "../../components/LoadingVideo/LoadingVideo";
import ModalTags from "./ModalTags";
import ArchiveFilterListBox from "../../components/ArchiveFilterListBox/ArchiveFilterListBox";
import { Helmet } from "react-helmet";

import NcLink from "../../components/NcLink/NcLink";
import { gql, useQuery } from "@apollo/client";
import {
  useSearchkitVariables,
  useSearchkit,
  withSearchkit,
  withSearchkitRouting,
} from "@searchkit/client";


import Card11 from "../../components/Card11/Card11";
import AutoCompleteSearch from "./autoCompleteSearch";
import DateRangeCalender from "../../components/DateRangeCalender/DateRangeCalender";
import DateRangeDropDown from "../../components/DateRangeCalender/DateRangeDropDown";
import Pagination from "../../components/Pagination/Pagination";

import LoadingVideo from "../../components/LoadingVideo/LoadingVideo";
export const PageSearchProps = {
  className: String,
};

const query = gql`
query resultSet($query: String, $filters: [SKFiltersSet], $page: SKPageInput, $sortBy: String) {
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
            image_url
            source_domain
            facebook_shares
            twitter_shares
            maintext
            sentiment
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
`


//////////////////////////////////////////////
const FILTERS = [
  { name: "Most Recent" },
  { name: "Curated by Admin" },
  { name: "Most Appreciated" },
  { name: "Most Discussed" },
  { name: "Most Viewed" },
];

const TABS = ["Articles", "Categories", "Tags", "Authors"];

const PageSearch = ({ className = "" }) => {

 

  ////////////////////////////////graph ql work////////////////////////////

  const variables = useSearchkitVariables();
  const { data, error, loading } = useQuery(query, { variables });

  if (error) {
    console.log("An error Occured" + error);
  }

  if (loading) {

    console.log("Data is loading");
  }

  // if (!loading) {
  //   console.log(data.results?.hits.items[0].fields.twitter_shares);
  // }


   console.log(data)

  return (
    <div className={`nc-PageSearch ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Nc || Search Page Template</title>

      </Helmet> 
              
      <div className="w-screen px-2 xl:max-w-screen-2xl mx-auto">
        


      <AutoCompleteSearch />

      


              {/* <div className="w-full text-sm text-left mt-4 text-neutral-500 dark:text-neutral-300">
                <div className="inline-block"> */}
        <div className="margin">
          <span className="mr-2.5">Related:</span>
          <NcLink className="mr-2.5 inline-block font-normal" to="/#">
            Design
          </NcLink>
          <NcLink className="mr-2.5 inline-block font-normal" to="/#">
            Photo
          </NcLink>
          <NcLink className="mr-2.5 inline-block font-normal" to="/#">
            Vector
          </NcLink>
          <NcLink className="mr-2.5 inline-block font-normal" to="/#">
            Frontend
          </NcLink>
          {/* </div>
              </div> */}
        </div>
      </div>
      {/* </header>
          // </div>
        </div> */}
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <main>


          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              <ModalCategories categories={DEMO_CATEGORIES} />

              <ModalTags tags={DEMO_TAGS} />

              
            </div>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
              <DateRangeCalender />
              <DateRangeDropDown /> &nbsp;
              <ArchiveFilterListBox lists={FILTERS} />
            </div>


       
      

          { !loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10">


              { data? data.results?.hits.items.map((value , index) => {

                console.log(value)
        
                  return(
                  
         
                      <Card11 key={index} post={value.fields} cardvalue={value} />
                  
                 )
                }
          

              ) : <h1>Error in Debugging</h1>}
              
            </div>)
          : <h1>Loading</h1> } 


          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Show more
            </button>
          </div>
        </main>

        </div>
      </div>
    </>
  );
};

export default PageSearch;