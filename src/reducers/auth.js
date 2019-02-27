import {SUCCESS_SIGN_IN, FAILED_SIGN_IN, SIGNOUT_USER} from '../constants/actionTypes';
import {getUserFromLocalStorage, setUserToLocalStorage} from '../utilities/localstorage'

const userFromLocalStorage = getUserFromLocalStorage();
const initialState = {
    isAuthenticated: !!userFromLocalStorage,
    userInfo: userFromLocalStorage || {},
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_SIGN_IN:
            return signInSuccess(state, action.userInfo, action.from, action.history);
        case FAILED_SIGN_IN:
            return signInErrored(state, action.error);
        case SIGNOUT_USER:
            return signOut();
        default: return state;
    }
}

const signInSuccess = (state, userInfo, from = '/', history) => {
    setUserToLocalStorage(userInfo);
    setTimeout(() => {
        history.push(from);
    }, 10);

    const newState = {...state};
    newState.isAuthenticated = true;
    newState.userInfo = userInfo;
    return newState;
};

const signInErrored = (state, error) => {
    const newState = {...state};
    newState.isAuthenticated = false;
    newState.error = error.message;
    return newState;
};

const signOut = (state) => {
    const newState = {...state};
    newState.isAuthenticated = false;
    newState.error = '';
    newState.userInfo = {};
    return newState;
};