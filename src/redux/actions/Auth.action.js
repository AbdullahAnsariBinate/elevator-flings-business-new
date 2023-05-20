// export const signUp = (payload, CB) => async (dispatch) => {
//     dispatch({ type: AUTH.SIGN_UP_USER_API, loading: true });
//     try {
//         let response = await post(REGISTER, payload);
//         if (response?.data?.error) {
//             handleError(response?.data?.message || "");
//             dispatch({ type: AUTH.SIGN_UP_USER_API, loading: false });
//         } else {
//             dispatch({
//                 type: AUTH.SIGN_UP_USER_API,
//                 loading: false,
//                 user: response?.data?.data,
//                 isLoggedIn: true,
//                 isIntialRootRoute:false
//             });
//         }
//     } catch (error) {
//         console.log(
//             "🚀 ~ file: Auth.action.js ~ line 116 ~ signUp ~ error",
//             error?.data?.message
//         );
//         handleError(error?.data?.message, { autoHide: true });
//         dispatch({ type: AUTH.SIGN_UP_USER_API, loading: false });
//     }
// };

import axios from "axios";
import AuthConstant from "../constant/Auth.constant"
import { post } from "../../utils/methods";
import { SIGN_UP } from "../../config/webservices";




// CB means callback
// Create a signup action
// takes 2 parameters

export const signUp = (payload, CB) => async (dispatch) => {
    console.log("🚀 ~ file: Auth.action.js:40 ~ signUp ~ payload:", payload)
    console.log("🚀 ~ file: Auth.action.js:40 ~ signUp ~ dispatch:", dispatch)
    dispatch({ type: AuthConstant?.SIGN_UP_USER, loading: true });

    try {
        let response = await post(SIGN_UP, payload);
        console.log("🚀 ~ file: Auth.action.js:44 ~ signUp ~ response:", response)
        if (response?.data?.error) {
            handleError(response?.data?.message || "");
            dispatch({ type: AuthConstant?.SIGN_UP_USER, loading: false });
        } else {
            dispatch({
                type: AuthConstant?.SIGN_UP_USER,
                loading: false,
                user: response?.data?.data,
                isLoggedIn: true,
                isIntialRootRoute: false
            });
        }

    } catch (err) {
        console.log("🚀 ~ file: Auth.action.js:47 ~ signUp ~ err:", err)
        handleError(err?.data?.message, { autoHide: true });
        dispatch({ type: AuthConstant?.SIGN_UP_USER, loading: false });
    }

}