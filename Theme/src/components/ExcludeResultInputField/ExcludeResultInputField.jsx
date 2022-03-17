import React, { Component } from "react";
import {
  SearchBox,
  SearchComponent,
  SearchBase,
} from "@appbaseio/react-searchbox";

import "./ExcludeResultInputField.css";

export class InputAutoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "helloo",
    };
  }

  render() {
    return (
      <div>
        <SearchBase
          index="good-books-ds"
          credentials="a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61"
          url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
          appbaseConfig={{
            recordAnalytics: true,
            enableQueryRules: false,
            userId: "jon@appbase.io",
            customEvents: {
              platform: "ios",
              device: "iphoneX",
            },
          }}
        >
          <SearchBox
            highlight={true}
            defaultSuggestions={[
              {
                label: "Songwriting",
                value: "Songwriting",
              },
              {
                label: "Musicians",
                value: "Musicians",
              },
            ]}
            enablePopularSuggestions={true}
            popularSuggestionsConfig={{
              size: 3,
              minChars: 2,
              index: "good-books-ds",
            }}
            enableRecentSuggestions={true}
            recentSuggestionsConfig={{
              size: 3,
              minHits: 2,
              index: "good-books-ds",
            }}
            distinctField="original_title.keyword"
            placeholder="Enter domains that you think are giving irrelevant, e.g job, course..."
            expandSuggestionsContainer={false}
            showClear={true}
            addonBefore={false}
            showIcon={false}
            clearIcon={
              <img
                src="https://img.icons8.com/material-two-tone/24/000000/delete-sign.png"
                height="15px"
                width="15px"
              />
            }
            iconPosition={"left"}
            innerClass={{
              input: "InputFieldBox",
              list: "FieldDropDownBar",
            }}
            // className="css-41txtf-IconWrapper"
            loading={true}
            id="search-component"
            dataField={[
              {
                field: "original_title",
                weight: 1,
              },
              {
                field: "original_title.search",
                weight: 3,
              },
            ]}
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              width: "100%",
              marginLeft: "0%",
              borderColor: "blue",
            }}
            onValueSelected={(value, cause, source) => {
              // console.log("current value: ", value);
              this.props.getSelectedvalve(value);
            }}
          />
          <SearchComponent
            id="result-component"
            highlight
            dataField="original_title"
            size={10}
            react={{
              and: ["search-component"],
            }}
          >
            {({ results, loading, size, setValue, setFrom }) => {
              return (
                <div className="result-list-container">
                  {loading ? (
                    <div>Loading Results ...</div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></div>
                  )}
                </div>
              );
            }}
          </SearchComponent>
        </SearchBase>
      </div>
    );
  }
}

export default InputAutoBox;
