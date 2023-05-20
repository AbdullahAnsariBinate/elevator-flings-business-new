import AuthConstant from "../constant/Auth.constant";

const initialState = {
    loginLoading: false,
    signUpLoading: false,
    isLoggedIn: true,
    isIntialRoute: true,
    user: {},
    getUserProfileLoading: false,
    sendOtpLoading: false,
    reSendOtpLoading: false,
    verifyOtpLoading: false,
    isIntialRootRoute: true,
    guestLoading: false,
    guestLogin: false
};


export default (state = initialState, action = {}) => {
    switch (action.type) {
        case AuthConstant.SIGN_UP_USER:
            return {
                ...state,
                signUpLoading: action.loading,
                isLoggedIn: action.isLoggedIn,
                user: action.user,
                isIntialRootRoute: action.isIntialRootRoute
            };


        case AuthConstant.SIGN_IN_USER:
            return {
                ...state,
                loginLoading: action.loading,
                isLoggedIn: action.isLoggedIn,
                user: action.user
            };
        default:
            return state;
    }
};