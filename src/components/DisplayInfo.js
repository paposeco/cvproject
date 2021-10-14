import React from "react";

const DisplayInfo = function (props) {
  const extractID = function (array) {
    const findIndex = array.findIndex((element) => element.id);
    return array[findIndex].id;
  };

  return (
    <div>
      {props.textToDisplay.map((element) => {
        const currentid = extractID(element);
        return (
          <div key={currentid}>
            {element.map((anotherelement) => {
              return (
                <p key={anotherelement.alias + currentid}>
                  {anotherelement.title}
                  {anotherelement.selected}
                </p>
              );
            })}
            <button
              onClick={props.editingButton}
              id={currentid + "Edit"}
              className="editinfo"
              data-buttonname="editinfo"
              title="Edit"
            >
              <i
                className="las la-edit"
                onClick={props.editingButton}
                data-buttonname="editinfo"
              ></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayInfo;
