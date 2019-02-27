import {map, catchError, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { ofType } from 'redux-observable';

import { REQUEST_FETCH_POSTS } from '../constants/actionTypes';
import { fetchPostSuccess, fetchPostFailed } from '../actions/posts';
import {BASE_URL} from '../constants/constants';

export default (action$, state$, {getJSON}) => action$.pipe(
  ofType(REQUEST_FETCH_POSTS),
  mergeMap((action) =>
    getJSON(BASE_URL + 'posts?userId=' + state$.value.auth.userInfo.id).pipe(
      map((postList) => {
          if (postList && postList.length) {
              return fetchPostSuccess(postList);
          } else {
              return fetchPostFailed({message: 'list is empty'});
          }
      }),
      catchError((error) => of(fetchPostFailed(error)))
    )
  )
)