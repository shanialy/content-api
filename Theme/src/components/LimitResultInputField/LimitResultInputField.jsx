import React, { Component } from "react";
import {
  SearchBox,
  SearchComponent,
  SearchBase,
} from "@appbaseio/react-searchbox";

import "./LimitResultInputField.css";

export class InputFieldAutoComplete extends Component {
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
            placeholder="Enter domains to see results from only these sites... e.g cnn.com, bbc.com"
            expandSuggestionsContainer={false}
            showClear={true}
            addonBefore={false}
            showIcon={false}
            // icon={
            //   <img
            //     src="https://img.icons8.com/ios/50/000000/search--v1.png"
            //     height="20px"
            //     width="20px"
            //     fill="#0000ff"
            //     color="blue"
            //   />
            // }
            // addonBefore={
            //   <img
            //     src="https://img.icons8.com/ios/50/000000/search--v1.png"
            //     height="10px"
            //     width="10px"
            //   />
            // }
            clearIcon={
              <img
                src="https://img.icons8.com/material-two-tone/24/000000/delete-sign.png"
                height="15px"
                width="15px"
              />
            }
            iconPosition={"left"}
            innerClass={{
              input: "InputField",
              list: "FieldDropDown",
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
            // value={this.state.text}
            // onChange={(value, e) => {

            //   this.setState({
            //     text: value,
            //   });
            // }}
            //...
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              width: "100%",
              marginLeft: "0%",
            }}
            // beforeValueChange={
            //     function(value) {
            //     // called before the value is set
            //     // returns a promise
            //     return new Promise((resolve, reject) => {
            //         // update state or component props
            //         resolve()
            //         // or reject()
            //     })
            //     }
            // }
            // onValueChange={
            //     function(value) {
            //     console.log("current value: ", value)
            //     // set the state
            //     // use the value with other js code
            //     }
            // }
            onValueSelected={(value, cause, source)=> {
              // console.log("current value: ", value);
              this.props.getSelectedvalve(value);
            }}
            // onQueryChange={
            //     function(prevQuery, nextQuery) {
            //     // use the query with other js code
            //     console.log('prevQuery', prevQuery);
            //     console.log('nextQuery', nextQuery);
            //     }
            // }
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
              // console.log(this.state.text)
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
                    >
                      {/* {!results.data.length ? (
                        <div>No results found {this.state.text}</div>
                      ) : (
                        <p>
                          {results.numberOfResults} results found in{" "}
                          {results.time}
                          ms
                        </p>
                      )} */}
                    </div>
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

export default InputFieldAutoComplete;
