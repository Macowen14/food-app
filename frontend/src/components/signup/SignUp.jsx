import React from "react";
import "../login/loginForm.scss";

const SignUp = ({ handleBlur, handleChange, values, errors, touched }) => {
  return (
    <>
      <input
        name="name"
        type="text"
        className="form-control"
        placeholder="Your name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name || ""}
      />

      {errors.name && touched.name ? (
        <span className="text-danger">{errors.name}</span>
      ) : null}

      <input
        type="tel"
        name="phone"
        id="phone"
        className="form-control"
        placeholder="Your phone number"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.phone || ""}
      />

      {errors.phone && touched.phone ? (
        <span className="text-danger">{errors.phone}</span>
      ) : null}

      <input
        type="email"
        name="email"
        id="email"
        className="form-control"
        placeholder="Your email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email || ""}
      />

      {errors.email && touched.email ? (
        <span className="text-danger">{errors.email}</span>
      ) : null}

      <input
        type="password"
        name="password"
        id="password"
        className="form-control"
        placeholder="Your Password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password || ""}
      />

      {errors.password && touched.password ? (
        <span className="text-danger">{errors.password}</span>
      ) : null}

      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        className="form-control"
        placeholder="Confirm your Password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.confirmPassword || ""}
      />

      {errors.confirmPassword && touched.confirmPassword ? (
        <span className="text-danger">{errors.confirmPassword}</span>
      ) : null}
    </>
  );
};

export default SignUp;
