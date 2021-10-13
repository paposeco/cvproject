import React from "react";

const DisplayInfo = function (props) {
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
              className="editinfo"
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayInfo;
