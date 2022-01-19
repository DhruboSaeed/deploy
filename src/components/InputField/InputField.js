import React from "react";
import "../Login/login.css";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function InputField(props) {
  const { label, name, ...rest } = props;
  return (
      <div className="input">
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
      </div>
  );
}

export default InputField;
