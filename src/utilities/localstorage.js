export const getUserFromLocalStorage = () => {
    if (window.localStorage) {
        const userInfoString = window.localStorage.getItem('userInfo');
        if (userInfoString) {
            const userInfo = JSON.parse(userInfoString);
            return userInfo;
        }
    }
};

export const setUserToLocalStorage = (userInfo) => {
    if (window.localStorage) {
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
};