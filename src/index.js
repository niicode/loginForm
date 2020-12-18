import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Sorry Name must be at least 15 characters";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Last Name must be at least 20 letters long";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   return errors;
// };

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Name must be at least 15 characters")
        .required("required"),
      lastName: Yup.string()
        .max(20, "Last Name should be at least 20 characters")
        .required("required"),
      email: Yup.string().email("invalid email address").required("required")
    })
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        {...formik.getFieldProps("email")}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        {...formik.getFieldProps("lastName")}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
