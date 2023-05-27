import * as Yup from "yup";
import { validateNumberRegex } from "../../../utils/methods";

const scheme = (regex) =>
    Yup.object().shape({
        fullName: Yup.string()
            .required("Please enter full name"),
        email: Yup.string()
            .required("Please enter email address")
            .email("Please enter valid email address"),
        businessName: Yup.string()
            .required("Please enter business name"),
        phone: Yup.string()
            // .matches(/^\d{10}$/, 'Phone number must be 10 digits')Abcd1234
            
            .required('Phone number is required'),
        password: Yup.string()
            .required("Please enter your password.")
            .min(8, "Password is too short - should be 8 characters minimum.")
            .matches(
                RegExp("(.*[a-z].*)"),
                "Password should have a minimum of 1 lowercase letter"
            )
            .matches(
                RegExp("(.*[A-Z].*)"),
                "Password should have a minimum of 1 uppercase letter"
            )
            .matches(
                RegExp("(.*\\d.*)"),
                "Password should have a minimum of 1 digit"
            )
            .matches(
                RegExp('[!@#$%^&*(),.?":{}|<>]'),
                "Password should have a minimum of 1 symbol."
            ),

        cpass: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

export default scheme;
