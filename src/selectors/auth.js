export const isUserAuthenticated = (state) => {
    return state.auth && state.auth.isAuthenticated;
};

export const getLoginError = (state) => {
    return state.auth.error;
};

export const getUserEmail = (state) => {
    return state.auth && state.auth.userInfo.email;
};
