import React from "react";
import { TaxonomyType } from "../../data/types";
import CardCategory1 from "../../components/CardCategory1/CardCategory1";
import NcModal from "../../components/NcModal/NcModal";

import {  useQuery } from '@apollo/client';
import query from "./Index";
import { useSearchkitVariables, useSearchkit, withSearchkit, withSearchkitRouting } from '@searchkit/client'


export const ModalCategoriesProps = {
  categories: TaxonomyType
}


const ModalCategories= () => {

  const variables = useSearchkitVariables()
  const { data, error ,loading } = useQuery(query, { variables })

  if(error){console.log("An error Occured" + error)}
     
  if(loading ){console.log("Data is loading")}


  
  if(!loading){console.log(data.results)}
  


  const renderModalContent = () => {
    return (
      <div className="grid gap-6 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
        {data ?  data.results.facets[0].entries.map((cat) => (
          <CardCategory1 key={cat.id} taxonomy={cat}  size="normal" />
          
        )) :"Result not found" }
     
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

export default withSearchkit(withSearchkitRouting(ModalCategories))
