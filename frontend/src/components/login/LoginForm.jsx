import { useState, useMemo, useCallback } from "react";
import "./loginForm.scss";
import { FaTimes as FaX } from "react-icons/fa";
import SignUp from "../signup/SignUp";
import { useFormik } from "formik";
import axios from "axios";
import { signUpValidationSchema } from "../signup/signUpValidation";
import { loginValidationSchema } from "./loginValidation";

// eslint-disable-next-line react/prop-types
function LoginForm({ setLogin }) {
  const [currState, setCurrState] = useState("Login");
  const [message, setMessage] = useState(null); // State to store messages

  const initialValues = useMemo(
    () =>
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
          },
    [currState]
  );

  const validationSchema = useMemo(
    () =>
      currState === "Sign up" ? signUpValidationSchema : loginValidationSchema,
    [currState]
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log("Form values:", values); // Log the form values

      try {
        const url = currState === "Sign up" ? "/api/signup" : "/api/login";
        console.log("Request URL:", url); // Log the request URL

        // Prepare data based on the current state
        const data =
          currState === "Sign up"
            ? {
                name: values.name,
                email: values.email,
                password: values.password,
                phone: values.phone,
              }
            : { email: values.email, password: values.password };

        console.log("Request data:", data); // Log the request data

        // Send request to backend
        const response = await axios.post(url, data);
        console.log(response);
        console.log("Response status:", response.status); // Log the response status
        console.log("Response data:", response.data); // Log the response data

        // Update message based on the response
        setMessage(response.data.message);

        // Show alert based on the action and response
        if (
          currState === "Login" &&
          response.data.message === "Login successful"
        ) {
          alert("Login successful!");
        }
        if (
          currState === "Sign up" &&
          response.data.message === "User registered successfully"
        ) {
          alert("Sign up successful!");
        }
      } catch (error) {
        console.error("Error during submission:", error); // Log the error

        // Handle error response
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setMessage(error.response.data.message); // Display specific error message
        } else {
          setMessage("An error occurred. Please try again later.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
    isSubmitting,
  } = formik;

  const handleStateChange = useCallback(() => {
    setCurrState((prev) => (prev === "Sign up" ? "Login" : "Sign up"));
  }, []);

  return (
    <>
      <div className="form-container">
        <form method="post" className="form" onSubmit={handleSubmit}>
          {message && <div className="bg-info p-2 text-danger">{message}</div>}
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

            <button
              className="btn btn-primary"
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {currState === "Sign up" ? "Create account" : "Login"}
            </button>
            {currState === "Login" ? (
              <p>
                Don’t have an account?{" "}
                <span onClick={handleStateChange} className="btn span-btn">
                  Create an account
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={handleStateChange} className="btn span-btn">
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
