import React from "react";

function Btn(props) {
  return (
    <div className="z-20">
      <button
        id={props.id}
        type="button"
        className={props.class}
        onClick={props.clickbtn}
        value={props.btnvalue}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Btn;
