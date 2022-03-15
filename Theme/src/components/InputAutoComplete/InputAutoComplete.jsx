import React, { useEffect, createElement, Fragment, useState } from "react";
import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import { render } from "react-dom";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";
import {
  getIcon,
  jsonTreeTheme,
  renderResults,
} from "../../utils/inputAutoComplete";
import "./InputAutoComplete.css";

// appbase client config object
const appbaseClientConfig = {
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "best-buy-dataset",
  credentials: "b8917d239a52:82a2f609-6439-4253-a542-3697f5545947",
  settings: {
    userId: "s@s",
    // recordAnalytics: true,
  },
};
// reactivesearch api configuration
const rsApiConfig = {
  highlight: true,
  dataField: [
    {
      field: "name.autosuggest",
      weight: 1,
    },
    {
      field: "name",
      weight: 3,
    },
  ],
  enableRecentSuggestions: true,
  recentSuggestionsConfig: {
    size: 2,
    minHits: 2,
    minChars: 4,
    index: "best-buy-dataset",
  },
  enablePopularSuggestions: true,
  popularSuggestionsConfig: {
    size: 2,
    minChars: 3,
    minCount: 3,
    index: "best-buy-dataset",
  },
  index: "best-buy-dataset",
  size: 5,
};

function InputAutoComplete() {
  const [state, setstate] = useState({});
  console.log(state);
  useEffect(() => {
    // default usage: plugin to fetch suggestions
    const defaultUsagePlugin = createSuggestionsPlugin(
      appbaseClientConfig,
      {
        ...rsApiConfig,
      },
      {
        onItemSelect: (props) => {
          console.log(props);
          console.log(props.item.value);
          console.log(props.itemInputValue);
          const {
            item: { label },
            setQuery,
            refresh,
          } = props;
          setQuery(label.replace(/(<([^>]+)>)/gi, ""));
          renderResults({
            value: label.replace(/(<([^>]+)>)/gi, ""),
            url: appbaseClientConfig.url,
            app: appbaseClientConfig.app,
            credentials: appbaseClientConfig.credentials,
            settings: appbaseClientConfig.settings,
            query: {
              dataField: rsApiConfig.dataField,
            },
          }).then((item) => {
            setstate(item);
            console.log(item);
          });
          refresh();
        },
      }
    );

    // advanced usage: plugin to fetch suggestions and
    // render custom ui for header, footer and suggestion items
    const advancedUsagePlugin = createSuggestionsPlugin(
      {
        ...appbaseClientConfig,
        settings: {
          ...appbaseClientConfig.settings,
          enableQueryRules: false,
        },
      },
      {
        ...rsApiConfig,
        enableRecentSuggestions: false,
        enablePopularSuggestions: false,
      },
      {
        renderItem: (props) => {
          const { item, setQuery, refresh } = props;
          return <div className="item"></div>;
        },
        onItemSelect: (props) => {
          // console.log(props.item);
          const { item, setQuery, refresh } = props;
          const { label } = item;
          if (item?._source?.image) {
            window.open(item?._source?.image);
          } else {
            setQuery(label.replace(/(<([^>]+)>)/gi, ""));
            renderResults({
              value: label.replace(/(<([^>]+)>)/gi, ""),
              url: appbaseClientConfig.url,
              app: appbaseClientConfig.app,
              credentials: appbaseClientConfig.credentials,
              settings: appbaseClientConfig.settings,
              query: {
                dataField: rsApiConfig.dataField,
              },
            }).then((item) => {
              setstate(item);
            });
            refresh();
          }
        },
      }
    );
    // initiate autocomplete-js
    autocomplete({
      container: "#autocompletes",
      placeholder: "",
      openOnFocus: true,
      // debug: true,
      plugins: [defaultUsagePlugin, advancedUsagePlugin],
      detachedMediaQuery: "none",
      renderer: { createElement, Fragment },
      render({ children }, root) {
        render(children, root);
      },
    });
  }, []);
  return (
    <div className="App">
      <div id="autocompletes">
        <div>
          <div className="InputWrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default InputAutoComplete;
