import React from "react";
//import uniqid from "uniqid";

const Display = function (props) {
  function findSection() {
    const array = props.collected[0];
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

  console.log(props.collected);

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
      <div id={props.divID}>
        {props.collected.map((element, index) => {
          return (
            <p key={element.alias}>
              {element.title}
              {element.selected}
            </p>
          );
        })}

        <button onClick={props.edit} id={findSection()}>
          Edit Section
        </button>
        <button>Add More</button>

        {/*   {props.collected.length !== 0 ? ( */}
        {/*     <button onClick={props.edit} id={findSection()}> */}
        {/*       Edit Section */}
        {/*     </button> */}
        {/*       <button> */}
        {/*       Add More */}
        {/* </button> */}
        {/*   ) : null} */}
      </div>
    );
  }
};

export default Display;
