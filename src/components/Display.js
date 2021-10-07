import React from "react";
import uniqid from "uniqid";

const Display = function (props) {
  return (
    <div>
      {props.collected.map((element, index) => {
        return (
          <p key={uniqid()}>
            {arraytitles[index]}
            {element}
          </p>
        );
      })}
    </div>
  );
};

export default Display;
