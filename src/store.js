import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { ajax } from 'rxjs/ajax';

import header from './reducers/header';
import auth from './reducers/auth';
import posts from './reducers/posts';
import albums from './reducers/albums';

import loginEpic from './epics/login';

export const rootEpic = combineEpics(
  loginEpic
);

export const rootReducer = combineReducers({
    header,
    auth,
    posts,
    albums,
});


const epicMiddleware = createEpicMiddleware({
    dependencies: { getJSON: ajax.getJSON }
});

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;