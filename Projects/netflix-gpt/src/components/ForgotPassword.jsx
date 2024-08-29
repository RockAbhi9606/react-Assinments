import React, { useState } from "react";
import Header from "./Header";
import { FORGOT_PASSWORD_IMG_URL } from "../utils/constent";
import { useFormik } from "formik";
import { getValidationErrorForForgotPassword } from "../utils/validation";

const initialValues = {
  email_me: "",
  text_me: "",
};

const ForgotPassword = () => {
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);

  const { values, errors, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: getValidationErrorForForgotPassword(isPhoneNumber),
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });

  const handleOptionChange = (event) => {
    setIsPhoneNumber(event.target.value === "phone");
  };

  return (
    <div>
      <Header isForgotPassword="true" />
      <div>
        <img
          className="absolute h-screen object-cover w-screen"
          src={FORGOT_PASSWORD_IMG_URL}
          alt="forgot-password-img-url"
        />

        <form
          className="absolute w-full md:w-[30%] px-8 py-6 bg-slate-200 my-36 mx-auto right-0 left-0 text-gray-700 rounded-lg bg-opacity-80 text-lg"
          onSubmit={handleSubmit}
        >
          <p className="my-4 text-3xl font-bold">
            Update password, email or phone
          </p>

          <div className="py-2">
            <p className="py-2">How would you like to reset your password?</p>
            <div className="px-12 text-[16px]">
              <div className="flex gap-2 text-[15px]">
                <input
                  className="cursor-pointer w-5"
                  type="radio"
                  value="email"
                  name="reset_psw"
                  id="reset_email"
                  checked={!isPhoneNumber}
                  onChange={handleOptionChange}
                />
                <label htmlFor="reset_email">Email</label>
              </div>

              <div className="flex gap-2">
                <input
                  className="cursor-pointer w-5"
                  type="radio"
                  value="phone"
                  name="reset_psw"
                  id="reset_phone"
                  checked={isPhoneNumber}
                  onChange={handleOptionChange}
                />
                <label htmlFor="reset_phone">Text Message (SMS)</label>
              </div>
            </div>
          </div>

          <div className="py-3">
            <p className="pb-6">
              We will text you a verification code to reset your password.
              Message and data rates may apply.
            </p>

            {!isPhoneNumber ? (
              <div>
                <input
                  className="w-full p-2 rounded-lg px-4"
                  type="text"
                  name="email_me"
                  id="email_me"
                  placeholder="name@gmail.com"
                  value={values.email_me}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p className="text-red-600 text-sm font-semibold mt-1">
                  {errors.email_me}
                </p>
              </div>
            ) : (
              <div>
                <input
                  className="w-full p-2 rounded-lg px-4"
                  type="text"
                  name="text_me"
                  id="text_me"
                  placeholder="Enter Phone Number"
                  value={values.text_me}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p className="text-red-600 text-sm font-semibold mt-1">
                  {errors.phone_number}
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 p-2 my-4 rounded-md font-semibold text-white"
          >
            {!isPhoneNumber ? "Email me" : "Text me"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
