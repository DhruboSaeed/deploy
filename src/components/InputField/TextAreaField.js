import React from "react";
import "../MainBody/Feed";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function TextAreaField(props) {
    const { label, name, ...rest } = props;
    return (
        <div className="modal-text-area">
          <Field as='textarea' id={name} name={name} {...rest} />
          <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default TextAreaField;
