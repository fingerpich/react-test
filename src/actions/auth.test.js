import * as actions from './auth.js';
import * as types from '../constants/actionTypes.js';

describe('Authentication actions', () => {
    it('Should create an action to request sign in', () => {
        const email = 'email@email.com'
        const expectedAction = {
            type: types.REQUEST_SIGN_IN,
            email,
            from: '',
            history: {}
        };
        expect(actions.requestSignIn('email@email.com', '', {})).toEqual(expectedAction)
    });

    it('Should create an action to fulfill the user info', () => {
        const userInfo = {id:1};
        const expectedAction = {
            type: types.SUCCESS_SIGN_IN,
            userInfo,
            from: '',
            history: {}
        };
        expect(actions.signInSuccess(userInfo, '', {})).toEqual(expectedAction)
    });

    it('Should create an action to show error', () => {
        const error = 'error';
        const expectedAction = {
            type: types.FAILED_SIGN_IN,
            error,
        };
        expect(actions.signInFailed(error)).toEqual(expectedAction)
    });
});