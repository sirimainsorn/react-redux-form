import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { GlobalAction } from "./store/global/global.action";

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={`form-control border ${touched && error ? "border-danger" : ""}`} />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name cannot be null.";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Minimum be 2 characters or more";
  }
  if (!values.email) {
    errors.email = "Email cannot be null.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name cannot be null.";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Minimum be 2 characters or more";
  }
  return errors;
};

function FormCode(props) {
  const { handleSubmit } = props;
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="firstName"
          component={renderField}
          label="First Name"
          onChange={(evt) => {
            dispatch(
              GlobalAction.changeFormCodeData({
                name: evt.target.name,
                value: evt.target.value,
              })
            );
          }}
        />
      </div>
      <div className="form-group">
        <Field
          name="lastName"
          component={renderField}
          label="Last Name"
          onChange={(evt) => {
            dispatch(
              GlobalAction.changeFormCodeData({
                name: evt.target.name,
                value: evt.target.value,
              })
            );
          }}
        />
      </div>
      <div className="form-group">
        <Field
          name="email"
          component={renderField}
          label="Email"
          onChange={(evt) => {
            dispatch(
              GlobalAction.changeFormCodeData({
                name: evt.target.name,
                value: evt.target.value,
              })
            );
          }}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

FormCode = reduxForm({
  form: "contact",
  validate,
})(FormCode);

export default FormCode;
