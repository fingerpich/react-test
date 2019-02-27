import {REQUEST_FETCH_POSTS, SUCCESS_FETCH_POSTS, FAILED_FETCH_POSTS} from "../constants/actionTypes";

const initialState = {
    posts: [],
    isFetching: false,
    errorFetching: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FETCH_POSTS:
            return startFetching(state);
        case SUCCESS_FETCH_POSTS:
            return fillPostList(state, action.postList);
        case FAILED_FETCH_POSTS:
            return failedLoading(state, action.error);
        default: return state;
    }
}

const startFetching = (state) => {
    return {...state, isFetching: true, errorFetching: null};
};

const fillPostList = (state, list) => {
    return {...state, posts: list, isFetching: false};
};

const failedLoading = (state, error) => {
    return {...state, errorFetching: error, isFetching: false};
};
