import React from "react";

const RenderPhoto = function (props) {
  return (
    <div id="profilephoto">
      <img src={props.submittedphoto} alt="profilephoto" />
      <button id="deletephoto" title="Delete">
        <i className="las la-trash-alt"></i>
      </button>
    </div>
  );
};

export default RenderPhoto;
