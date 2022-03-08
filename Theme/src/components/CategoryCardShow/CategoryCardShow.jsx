import React from "react";
import { withRouter } from "react-router-dom";
const CardShow = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <h1>Category {props.match.params.label}</h1>
      </div>
    </>
  );
};

export default withRouter(CardShow);
