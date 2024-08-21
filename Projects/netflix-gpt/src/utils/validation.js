import * as Yup from "yup";

export const getValidationSchema = (isSignInForm) => {
    return Yup.object().shape({
        full_name: isSignInForm
            ? Yup.string()
            : Yup.string()
                .min(2, "Full name must be at least 2 characters")
                .max(30, "Full name must be at most 30 characters")
                .required("Please enter your full name"),
        email: Yup.string()
            .email("Please enter a valid email address")
            .required("Please enter your email address"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Please enter your password"),
        confirm_password: isSignInForm
            ? Yup.string()
            : Yup.string()
                .required("Please confirm your password")
                .oneOf([Yup.ref('password'), null], "Passwords must match"),
    });
};
