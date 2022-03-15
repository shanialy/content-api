import React from "react";
import { DEMO_CATEGORIES, DEMO_TAGS } from "../../data/taxonomies";
import LoadingVideo from "../../components/LoadingVideo/LoadingVideo";
import ModalTags from "./ModalTags";
import ArchiveFilterListBox from "../../components/ArchiveFilterListBox/ArchiveFilterListBox";
import LanguagesFilterBox from "../../components/LanguagesFilterBox/LanguagesFilterBox";
import { Helmet } from "react-helmet";
import { gql, useQuery } from "@apollo/client";
import {
  useSearchkitVariables,
  useSearchkit,
  withSearchkit,
  withSearchkitRouting,
} from "@searchkit/client";

import Card11 from "../../components/Card11/Card11";
import DateRangeCalender from "../../components/DateRangeCalender/DateRangeCalender";
import Pagination from "../../components/Pagination/Pagination";
import { useLocation } from "react-router-dom";
import SearchBoxMain from "../../components/SearchBoxMain/SearchBoxMain";

export const PageSearchProps = {
  className: String,
};

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
              image_url
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

const FILTERS = [
  { label: "Relevance", id: "relevance" },
  { label: "Facebook Shares", id: "facebook_shares" },
  { label: "Twitter Shares", id: "twitter_shares" },
  { label: "Date Download", id: "date_download" },
];

const TABS = ["Articles", "Categories", "Tags", "Authors"];

const PageSearch = ({ className = "" }, data1) => {
  // cardCategory data from searchPage
  const location = useLocation();
  var labelfromcatCard = location.state;

  const variables = useSearchkitVariables();
  const { data, error, loading } = useQuery(query, { variables });

  if (error) {
    console.log("An error Occured" + error);
  }

  if (loading) {
    <LoadingVideo />;
  }
  console.log(data);
  if (data) {
    var languageslist = [];
    {
      data?.results?.facets.map((items) => {
        if (items.identifier == "language") {
          languageslist = items?.entries?.map((item) => ({
            label: item.label,
            identifier: "language",
            id: item.label,
          }));
        }
        languageslist = [
          ...languageslist,
          {
            label: "All Languages",
            identifier: "language",
            id: "All Languages",
          },
        ];
      });
    }
  }

  return (
    <>
      <h1>{!labelfromcatCard ? "" : labelfromcatCard}</h1>
      <div className={`nc-PageSearch ${className}`} data-nc-id="PageSearch">
        <Helmet>
          <title>Nc || Search Page Template</title>
        </Helmet>
        {/* AutoCompleteSearchBox */}
        <SearchBoxMain />

        <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
          <main>
            <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
              <div className="flex space-x-2.5">
                {/* Languages */}

                {languageslist && languageslist.length > 0 ? (
                  <LanguagesFilterBox lists={languageslist} />
                ) : (
                  ""
                )}

                <ModalTags tags={DEMO_TAGS} />
              </div>
              <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
              <div className="flex justify-end">
                <DateRangeCalender />
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
                        post={value.fields}
                        cardvalue={value}
                      />
                    );
                  })
                ) : (
                  <h1>Error in Debugging</h1>
                )}
              </div>
            ) : (
              <LoadingVideo />
            )}

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

export default withSearchkit(withSearchkitRouting(PageSearch));
