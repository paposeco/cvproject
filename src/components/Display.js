import React from "react";
//import uniqid from "uniqid";

const Display = function (props) {
  function findSection() {
    let array;
    if (Array.isArray(props.collected[0])) {
      array = props.collected[0][0];
      console.log(props.collected);
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
    //nao sei como é que hei de enviar o id ou receber. sera que devo fazer o pop aqui? e guardar o id algures
    return (
      <div>
        {props.collected.map((parentelement, index) => {
          console.log(props.divID[index]);
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

              <button onClick={props.edit} id={findSection()}>
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
