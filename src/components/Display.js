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

  // este display para as colecçoes de educacao e experiencia devia ser diferente; acho que preciso de criar uma div e depois dentro dela mostrar a subeducacao
  console.log(props.collected);
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
};

export default Display;
