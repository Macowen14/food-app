import React, { useState } from "react";
import "./loginForm.scss";
import { FaTimes as FaX } from "react-icons/fa"; // Corrected import for FaX
import SignUp from "../signup/SignUp";
import { useFormik } from "formik";
import axios from "axios";
import { signUpValidationSchema } from "../signup/signUpValidation";
import { loginValidationSchema } from "./loginValidation";

function LoginForm({ setLogin }) {
  const [currState, setCurrState] = useState("Login");

  const initialValues =
    currState === "Sign up"
      ? {
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          terms: false,
        }
      : {
          email: "",
          password: "",
          terms: false,
        };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema:
      currState === "Sign up" ? signUpValidationSchema : loginValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const url = currState === "Sign up" ? "/api/signup" : "/api/login";
        const response = await axios.post(url, values);
        console.log(response.data); // Log the response data from the server
        alert(response.data.message); // Show appropriate message to user
      } catch (error) {
        console.error("Error occurred:", error.message); // Handle error
        alert("An error occurred. Please try again."); // Show generic error message
      } finally {
        setSubmitting(false); // Ensure form is not stuck in submitting state
      }
    },
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    formik;

  return (
    <>
      <div className="form-container">
        <form method="post" className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <h2>{currState}</h2>
            <span className="cancel-icon" onClick={() => setLogin(false)}>
              <FaX />
            </span>
          </div>
          <div className="login-input">
            {currState === "Sign up" ? (
              <SignUp
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                errors={errors}
                touched={touched}
              />
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  id="email"
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
                  placeholder="Enter your password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password || ""}
                />
                {errors.password && touched.password ? (
                  <span className="text-danger">{errors.password}</span>
                ) : null}
              </>
            )}
            <div className="form-condition">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onBlur={handleBlur}
                onChange={handleChange}
                checked={values.terms}
              />
              <p>By checking means you do agree to the terms and conditions</p>
            </div>
            {errors.terms && touched.terms ? (
              <span className="text-danger">{errors.terms}</span>
            ) : null}

            {!errors.terms && touched.terms ? (
              <span className="text-success">Agreed</span>
            ) : null}

            <button className="btn btn-primary" type="submit">
              {currState === "Sign up" ? "Create account" : "Login"}
            </button>
            {currState === "Login" ? (
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => setCurrState("Sign up")}
                  className="btn span-btn"
                >
                  Create an account
                </span>
              </p>
            ) : (
              <p>
                Already Have an account?{" "}
                <span
                  onClick={() => setCurrState("Login")}
                  className="btn span-btn"
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
