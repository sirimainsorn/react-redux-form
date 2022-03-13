import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { GlobalAction } from "./store/global/global.action";

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="mb-3">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${touched && error ? "border-red-500" : ""}`} />
      {touched && ((error && <span className="text-red-500 text-xs">{error}</span>) || (warning && <span className="text-yellow-500 text-xs">{warning}</span>))}
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
    <div className="w-full max-w-xs mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "contact",
  validate,
})(FormCode);
