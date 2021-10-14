import React from "react";

const DisplayEdu = function (props) {
  const extractID = function (array) {
    const findIndex = array.findIndex((element) => element.id);
    return array[findIndex].id;
  };

  return (
    <div>
      {props.textToDisplay.map((element) => {
        const currentid = extractID(element);
        return (
          <div className="subblock" key={currentid}>
            {element.map((anotherelement) => {
              if (anotherelement.selected !== "") {
                return (
                  <p key={anotherelement.alias + currentid}>
                    {anotherelement.title}
                    {anotherelement.selected}
                  </p>
                );
              } else {
                return (
                  <p key={anotherelement.alias + currentid}>
                    {anotherelement.title}
                    None
                  </p>
                );
              }
            })}
            <button
              onClick={props.editingButton}
              id={currentid + "Edit"}
              className="editeducation"
              title="Edit"
              data-buttonname="editeducation"
            >
              <i
                className="las la-edit"
                onClick={props.editingButton}
                data-buttonname="editeducation"
              ></i>
            </button>
            <button
              onClick={props.deleteButton}
              id={currentid + "Delete"}
              className="deleteeducation"
              title="Delete"
              data-buttonname="deleteeducation"
            >
              <i
                className="las la-trash-alt"
                onClick={props.editingButton}
                data-buttonname="deleteeducation"
              ></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayEdu;
