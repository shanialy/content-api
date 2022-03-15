import React from "react";
import ModalCategories from "./ModalCategories";
import { DEMO_CATEGORIES, DEMO_TAGS } from "../../data/taxonomies";
import LoadingVideo from "../../components/LoadingVideo/LoadingVideo";
import ModalTags from "./ModalTags";
import ArchiveFilterListBox from "../../components/ArchiveFilterListBox/ArchiveFilterListBox";
import { Helmet } from "react-helmet";
import NcLink from "../../components/NcLink/NcLink";
import { gql, useQuery } from "@apollo/client";
import { useSearchkitVariables, useSearchkit } from '@searchkit/client'
import {
  withSearchkit, withSearchkitRouting, useSearchkitQueryValue
} from '@searchkit/client'

import Card11 from "../../components/Card11/Card11";
import AutoCompleteSearch from "../SearchBox/autoCompleteSearchbox";
import DateRangeDropDown from "../../components/DateRangeCalender/DateRangeDropDown";
import CustomPagination from "../../components/Pagination/CustomPagination.jsx";

import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addpost, removePost } from "../../app/posts/posts";
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
            authors
            category
            date_download
            facebook_shares
            twitter_shares
            date_publish
            image_url
            language
            maintext
            readtime
            source_domain
            title
            url
            sentiment
              __typename
            }
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

const FILTERS = [
  { name: "Most Recent" },
  { name: "Curated by Admin" },
  { name: "Most Appreciated" },
  { name: "Most Discussed" },
  { name: "Most Viewed" },
];



const PageSearch = ({ className = "" }) => {

  const variables = useSearchkitVariables();
  if (variables?.page.size) {
    variables.page.size = 20
  }
  console.log(variables?.page.size)

  const { data, error, loading } = useQuery(query, { variables });

  if (error) {
    console.log("An error Occured" + error);
  }

  if (loading) {
   <div style={{display : "flex", alignItems : "center"}}> <LoadingVideo /></div> ;
  }

  return (
    <>


    
      <div className={`nc-PageSearch ${className}`} data-nc-id="PageSearch">
        <Helmet>
          <title>Nc || Search Page Template</title>
        </Helmet>

        <div className="w-screen px-2 xl:max-w-screen-2xl mx-auto">
          <AutoCompleteSearch />

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
          
          </div>
        </div>
        
        <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
          <main>
            <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
              <div className="flex space-x-2.5">
                <ModalCategories categories={DEMO_CATEGORIES} />

                <ModalTags tags={DEMO_TAGS} />

                
                  <DateRangeDropDown  facet={data?.results?.facets}/>
                  
                
                
              </div>
              <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
              <div className="flex justify-end">
  
                <ArchiveFilterListBox lists={FILTERS} />
              </div>
            </div>

            {!loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10">
                {data ? (
                  data.results?.hits.items.map((value, index) => {

                    return (
                      <Card11
                        key={index}
                        cardvalue={value}
                      />
                    );
                  })
                ) : (
                  <h1>No Content Found</h1>
                )}
              </div>
            ) : (
              <div style={{ display: "flex",
              justifyContent: "center",
              alignItems: "center"}}> <LoadingVideo /></div> 
                        )}

            <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center" style={{ justifyContent: "center", alignItems: "center"}}>

           

                <CustomPagination data={data?.results} />



                </div>

          </main>
        </div>
      </div>
    </>
  );
};

export default withSearchkit(withSearchkitRouting(PageSearch));
