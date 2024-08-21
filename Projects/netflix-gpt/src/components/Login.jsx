import React, { useState } from "react";
import { BG_IMG } from "../utils/constent";
import Header from "./Header";
import { useFormik } from "formik";
import { getValidationSchema } from "../utils/validation";
import { Link } from "react-router-dom";

const initialValues = {
  full_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: getValidationSchema(isSignInForm),
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          alt="bg-image"
          className="h-screen object-cover w-screen"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-3/12 absolute px-12 py-8  bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <p className="my-4 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <div>
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Enter Full Name"
              className="w-full p-2 my-4 rounded-md bg-gray-800"
              value={values.full_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.full_name && touched.full_name ? (
              <p className="mt-[-15px] text-red-600 text-sm font-semibold">
                {errors.full_name}
              </p>
            ) : null}
          </div>
        )}

        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="w-full p-2 my-4 rounded-md bg-gray-800"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="mt-[-15px] text-red-600 text-sm font-semibold">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="w-full p-2 my-4 rounded-md bg-gray-800"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="mt-[-15px] text-red-600 text-sm font-semibold">
              {errors.password}
            </p>
          ) : null}
        </div>

        {!isSignInForm && (
          <div>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Enter conform password"
              className="w-full p-2 my-4 rounded-md bg-gray-800"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="mt-[-15px] text-red-600 text-sm font-semibold">
                {errors.confirm_password}
              </p>
            ) : null}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 p-2 my-4 rounded-md font-semibold"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm && (
          <Link to="forgotPassword" className="block text-center cursor-pointer pt-2 hover:underline hover:text-gray-300">
            Forgot Password?
          </Link>
        )}

        {isSignInForm && (
          <div className="flex gap-2 py-5">
            <input
              className="cursor-pointer"
              type="checkbox"
              name="remember-me"
              id="remember-me"
            />
            <label className="cursor-pointer" htmlFor="remember-me">
              Remember me
            </label>
          </div>
        )}
        <div>
          {isSignInForm ? (
            <p>
              New To Netflix-GPT?{" "}
              <span
                className="cursor-pointer text-blue-600"
                onClick={handleSignInForm}
              >
                Sign up now
              </span>
            </p>
          ) : (
            <p>
              Already Registered?{" "}
              <span
                className="cursor-pointer text-blue-600"
                onClick={handleSignInForm}
              >
                Sign In now
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
