import {REQUEST_FETCH_POSTS, SUCCESS_FETCH_POSTS, FAILED_FETCH_POSTS} from '../constants/actionTypes';

export const requestFetchPosts = (userId) => {
    return {
        type: REQUEST_FETCH_POSTS,
        userId,
    }
};

export const fetchPostSuccess = (postList) => {
    return {
        type: SUCCESS_FETCH_POSTS,
        postList,
    }
};

export const fetchPostFailed = (error) => {
    return {
        type: FAILED_FETCH_POSTS,
        error
    }
};
