import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store';
import {isUserAuthenticated} from '../selectors/auth';

export default ({ component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isUserAuthenticated(store.getState()) ?
      <component {...props} /> :
      <Redirect to={{pathname:'/login', from: props.location}} />
  )} />
)