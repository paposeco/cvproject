import React from "react";
//import uniqid from "uniqid";

const Display = function (props) {
  function findSection() {
    let array;
    console.log("display");
    console.log(props.collected);
    if (Array.isArray(props.collected[0])) {
      array = props.collected[0][0];
    } else {
      array = props.collected[0];
    }
    //    const array = props.collected[0];
    const firstalias = array.alias;
    switch (firstalias) {
      case "username":
        return "info";
      case "schoolname":
        return "education";
      default:
        console.log("ERRORERROR");
    }
  }

  // function extractID() {
  //   const array = props.collected;
  //   const length = array.length;
  //   const currentid = array[length - 1];
  //   console.log(currentid);
  //   return currentid;
  // }

  if (findSection() === "info") {
    return (
      <div>
        {props.collected.map((element, index) => {
          return (
            <p key={element.alias}>
              {element.title}
              {element.selected}
            </p>
          );
        })}
        {props.collected.length !== 0 ? (
          <button onClick={props.edit} id={findSection()}>
            Edit Section
          </button>
        ) : null}
      </div>
    );
  } else {
    return (
      <div>
        {props.collected.map((parentelement, index) => {
          return (
            <div id={props.divID[index]} key={props.divID[index]}>
              {parentelement.map((childelement) => {
                return (
                  <p key={childelement.alias + props.divID[index]}>
                    {childelement.title}
                    {childelement.selected}
                  </p>
                );
              })}

              <button
                onClick={props.edit}
                id={findSection()}
                data-specific={props.divID[index]}
              >
                Edit Section
              </button>
            </div>
          );
        })}

        <button onClick={props.add}>Add More</button>
      </div>
    );
  }
};

export default Display;
