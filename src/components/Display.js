import React from "react";

const Display = function (props) {
  // const { arraytitles } = ["Name: ", "Email: ", "Telephone: "];
  return (
    <div key={props.id}>
      {props.collected.map((element) => {
        return <p>{element}</p>;
      })}
    </div>
  );
};

export default Display;
