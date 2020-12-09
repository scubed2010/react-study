import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <input
      className="myInput"
      type="text"
      onChange={props.changed}
      value={props.value}
    />
  );
};

export default userInput;
