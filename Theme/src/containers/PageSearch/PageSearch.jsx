import React, { useEffect } from "react";
import LoadingVideo from "../../components/LoadingVideo/LoadingVideo";
import ArchiveFilterListBox from "../../components/ArchiveFilterListBox/ArchiveFilterListBox";
import LanguagesFilterBox from "../../components/LanguagesFilterBox/LanguagesFilterBox";
import { Helmet } from "react-helmet";
import { gql, useQuery } from "@apollo/client";
import { useSearchkitVariables, useSearchkit } from "@searchkit/client";
import {
  withSearchkit,
  withSearchkitRouting,
  useSearchkitQueryValue,
} from "@searchkit/client";

import Card11 from "../../components/Card11/Card11";

// import DateRangeCalender from "../../components/DateRangeCalender/DateRangeCalender";
import { useLocation } from "react-router-dom";
import SearchBoxMain from "../../components/SearchBoxMain/SearchBoxMain";
import DateRangeDropDown from "../../components/DateRangeCalender/DateRangeDropDown";
import CustomPagination from "../../components/Pagination/CustomPagination.jsx";

// import Pagination from "../../components/Pagination/Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { addpost, removePost } from "../../app/posts/posts";
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
              sentiment
              url
              readtime
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

const PageSearch = ({ className = "" }) => {
  // cardCategory data from searchPage
  const location = useLocation();
  console.log("Topic se aaya  ", location.state.topic);
  console.log("Query se aaya  ", location.state.query);

  const api = useSearchkit();

  const variables = useSearchkitVariables();
  var flag = false;

  useEffect(() => {
    if (location.state.topic) {
      api.toggleFilter({
        identifier: "category",
        value: location.state.topic,
      });
      api.setPage({ size: 20, from: 0 });
      api.search();
    }
    if (location.state.query) {
      api.setQuery(location.state.query);
      api.setPage({ size: 20, from: 0 });

      api.search();
    }
    flag = true;
  }, []);

  const { data, loading, error } = useQuery(query, { variables });

  if (data && flag) {
    console.log(variables);
  }
  if (data) {
    console.log("data", variables);
  }

  if (error) {
    console.log("An error Occured" + error);
  }

  if (loading) {
    <div style={{ display: "flex", alignItems: "center" }}>
      {" "}
      <LoadingVideo />
    </div>;
  }

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
      {/* <h1>{!labelfromcatCard ? "" : labelfromcatCard}</h1> */}
      <div className={`nc-PageSearch ${className}`} data-nc-id="PageSearch">
        <Helmet>
          <title>Nc || Search Page Template</title>
        </Helmet>
        {/* AutoCompleteSearchBox */}
        <SearchBoxMain />
      </div>

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <main>
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              {/* Languages */}

              {/* {languageslist && languageslist.length > 0 ? (
                <LanguagesFilterBox lists={languageslist} />
              ) : (
                ""
              )} */}

              <DateRangeDropDown facet={data?.results?.facets} />
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
                  return <Card11 key={index} cardvalue={value} />;
                })
              ) : (
                <h1>No Content Found</h1>
              )}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <LoadingVideo />
            </div>
          )}

          <div
            className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <CustomPagination data={data?.results} />
          </div>
        </main>
      </div>
    </>
  );
};

// export default withSearchkit(withSearchkitRouting(PageSearch));
export default PageSearch;
