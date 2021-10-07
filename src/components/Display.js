import React from "react";
import uniqid from "uniqid";

const Display = function (props) {
  return (
    <div>
      {props.collected.map((element, index) => {
        return (
          <p key={uniqid()}>
            {element.title}
            {element.selected}
          </p>
        );
      })}
      {props.collected.length !== 0 ? (
        <button onClick={props.edit}>Edit Section</button>
      ) : null}
    </div>
  );
};

export default Display;
