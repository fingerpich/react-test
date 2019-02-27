import {FETCH_MENU, FETCH_USER_DATA} from '../constants/actionTypes';

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
