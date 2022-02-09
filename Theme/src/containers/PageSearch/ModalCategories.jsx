import React from "react";
import { TaxonomyType } from "../../data/types";
import CardCategory1 from "../../components/CardCategory1/CardCategory1";
import NcModal from "../../components/NcModal/NcModal";

import {  gql, useQuery } from '@apollo/client';
import { useSearchkitVariables, useSearchkit, withSearchkit, withSearchkitRouting } from '@searchkit/client'


export const ModalCategoriesProps = {
  categories: TaxonomyType
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
`


///////////////////////////////////////////////////facet/////////////////////////////////////

const Facet = ({facet}) =>{
  const api = useSearchkit()

  return (
    <div>
            <h1>All facets</h1>

      <h3>{facet.label}</h3>
      <h3>{facet.identifier}</h3>
    <ul>
      {facet.entries ? facet.entries.map((entry) => (
        <li 
        onClick={() => {
          api.toggleFilter({ identifier: facet.identifier, value: entry.label })
          api.search()
        }}
        
        >{entry.label} - {entry.count}</li>
      )): "waiting..."}
    </ul>
    </div>
  )
}

const ModalCategories= () => {

  const variables = useSearchkitVariables()
  const { data, error ,loading } = useQuery(query, { variables })

  if(error){console.log("An error Occured")}
     
  if(loading){console.log("Data is loading")}

 // console.log(data.results.facets[0].entries)
  

  const authorSet  = data.results.facets[0].entries

  console.log(authorSet)



  const renderModalContent = () => {
    return (
      <div className="grid gap-6 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
        {authorSet.map((cat) => (
          <CardCategory1 key={cat.id} taxonomy={cat}  size="normal" />
        ))}
      </div>
    );
  };

  return (
    <div className="nc-ModalCategories">
      <NcModal
        triggerText={
          <span>
            <span className="hidden sm:inline">Actors</span> Categories
          </span>
        }
        modalTitle="List of Actors"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalCategories;
