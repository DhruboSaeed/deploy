import React from "react";
import "../Login/login.css";

function TextError(props) {
  return <div className="errorText">{props.children}</div>;
}

export default TextError;
