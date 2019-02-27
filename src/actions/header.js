import {FETCH_MENU, FETCH_USER_DATA, SIGNOUT_USER} from '../constants/actionTypes';

export const fetchMenu = () => {
    return {
        type: FETCH_MENU,
    }
};

export const fetchUserData = () => {
    return {
        type: FETCH_USER_DATA,
    }
};
export const signoutUser = () => {
    return {
        type: SIGNOUT_USER,
    }
};
