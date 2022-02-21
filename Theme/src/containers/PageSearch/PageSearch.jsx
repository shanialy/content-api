import React, {useState} from "react";
import ModalCategories from "./ModalCategories";
import { DEMO_CATEGORIES, DEMO_TAGS } from "../../data/taxonomies";
import ModalTags from "./ModalTags";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import ArchiveFilterListBox from "../../components/ArchiveFilterListBox/ArchiveFilterListBox";
import Input from "../../components/Input/Input";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "../../components/SectionSubscribe2/SectionSubscribe2";
import NcImage from "../../components/NcImage/NcImage";
import NcLink from "../../components/NcLink/NcLink";
import { gql, useQuery } from '@apollo/client';
import { useSearchkitVariables, useSearchkit, withSearchkit, withSearchkitRouting } from '@searchkit/client'
//import SectionSliderNewAuthors from "../../components/SectionSliderNewAthors/SectionSliderNewAuthors";
// import { DEMO_AUTHORS } from "../../data/authors";
// import ButtonSecondary from "../../components/Button/ButtonSecondary";
// import SectionGridCategoryBox from "../../components/SectionGridCategoryBox/SectionGridCategoryBox";
// import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import Card11 from "../../components/Card11/Card11";
import ButtonCircle from "../../components/Button/ButtonCircle";
import CardCategory2 from "../../components/CardCategory2/CardCategory2";
import Tag from "../../components/Tag/Tag";
import CardAuthorBox2 from "../../components/CardAuthorBox2/CardAuthorBox2";
import AutoCompleteSearch from "./autoCompleteSearch";
import DateRangeCalender from "../../components/DateRangeCalender/DateRangeCalender";
import DateRangeDropDown from "../../components/DateRangeCalender/DateRangeDropDown";




export const PageSearchProps = {
  className: String
}

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

//const posts = DEMO_POSTS.filter((_, i) => i < 16);

const PageSearch = ({ className = "" }) => {

  ////////////////////////////////graph ql work////////////////////////////

  const variables = useSearchkitVariables()
  const { data, error ,loading } = useQuery(query, { variables })

  if(error){console.log("An error Occured" + error)}
     
  if(loading){console.log("Data is loading")}

  if(!loading){console.log(data.results.hits.items[0].fields.twitter_shares)}


  //console.log(data.results)


  
 
  return (
    <div className={`nc-PageSearch ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Nc || Search Page Template</title>
      </Helmet>
              
              <AutoCompleteSearch/>
              

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <main>
          {/* TABS FILTER */}
         

       {/* Here i applied Models */}

          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">

              <ModalCategories categories={DEMO_CATEGORIES} />

              <ModalTags tags={DEMO_TAGS} />
           
            </div>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
            
            <DateRangeCalender/>

          <DateRangeDropDown />    &nbsp;
 
              <ArchiveFilterListBox lists={FILTERS} />
              
            </div>
            
          </div>

          

               {/* passing our data in Card11 through map */}

          {!loading ? 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10">

              {data.results? data.results.hits.items.map((value , index) => {
        
                  return(
                  
         
                      <Card11 key={index} post={value.fields} cardvalue={value} />
                  
                 )
                }
          

              ) : <h1>Error in Debugging</h1>}
              
            </div>
          : <h1>There occured an error on line 309 in PageSearch</h1>}
        </main>

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageSearch;

