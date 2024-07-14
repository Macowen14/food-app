import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./contact.scss";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(500, "Must be 500 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <label htmlFor="name">
          Name:
          <input id="name" type="text" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            id="message"
            {...formik.getFieldProps("message")}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
