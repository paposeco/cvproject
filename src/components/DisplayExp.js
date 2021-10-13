import React from "react";

const DisplayExp = function (props) {
  const extractID = function (array) {
    const findIndex = array.findIndex((element) => element.id);
    return array[findIndex].id;
  };

  return (
    <div>
      {props.textToDisplay.map((element) => {
        return (
          <div key={extractID(element)}>
            {element.map((anotherelement) => {
              return (
                <p key={anotherelement.alias + extractID(element)}>
                  {anotherelement.title}
                  {anotherelement.selected}
                </p>
              );
            })}
            <button
              onClick={props.editingButton}
              id={extractID(element)}
              className="editexperience"
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayExp;
