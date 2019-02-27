import {map, catchError, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { ofType } from 'redux-observable';

import { REQUEST_SIGN_IN } from '../constants/actionTypes';
import { signInSuccess, signInFailed } from '../actions/auth';
import {BASE_URL} from '../constants/constants';

export default (action$,state$, {getJSON}) => action$.pipe(
    ofType(REQUEST_SIGN_IN),
    mergeMap((action) =>
        getJSON(BASE_URL + 'users?email=' + action.email).pipe(
            map((matchUsers) => {
                if (matchUsers && matchUsers.length) {
                    const userInfo = matchUsers[0];
                    return signInSuccess(userInfo, action.from, action.history);
                } else {
                    return signInFailed({message: 'Email is wrong'});
                }
            }),
            catchError((error) => of(signInFailed(error)))
        )
    )
)