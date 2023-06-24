import React from "react";

function InputContainer({ Label, ...props }) {
  return (
    <div className="inputs-container">
      <label>{Label}</label>
      <input placeholder="Enter placeholder Title" type="text" {...props} />
    </div>
  );
}

export default InputContainer;
