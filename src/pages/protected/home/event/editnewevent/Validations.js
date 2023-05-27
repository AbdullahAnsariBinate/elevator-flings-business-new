import * as Yup from "yup";
import { validateNumberRegex } from "../../../utils/methods";

const scheme = (regex) =>
    Yup.object().shape({
        name: Yup.string()
            .required("Please enter name"),
        capacity: Yup.string()
            .required("Please enter capacity"),
        location: Yup.string()
            .required("Please enter location"),
        address: Yup.string()
            .required("Please enter your address"),
        description: Yup.string()
            .required('Confirm Password is description'),
    });

export default scheme;
