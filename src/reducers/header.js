import {SIGNOUT_USER} from "../constants/actionTypes";
import {setUserToLocalStorage} from "../utilities/localstorage";

const initialState = {
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        default: return state;
    }
}