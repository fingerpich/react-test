import {REQUEST_SIGN_IN, SUCCESS_SIGN_IN, FAILED_SIGN_IN} from '../constants/actionTypes';

export const requestSignIn = (email, from, history) => {
    return {
        type: REQUEST_SIGN_IN,
        email,
        from,
        history,
    }
};

export const signInSuccess = (userInfo, from, history) => {
    return {
        type: SUCCESS_SIGN_IN,
        userInfo,
        from,
        history,
    }
};

export const signInFailed = (error) => {
    return {
        type: FAILED_SIGN_IN,
        error
    }
};
