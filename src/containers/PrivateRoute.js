import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {isUserAuthenticated} from '../selectors/auth';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated ?
      <Component {...props} /> :
      <Redirect to={{pathname:'/login', from: props.location}} />
  )} />
);

const mapStateToProps = state => ({
    isAuthenticated: isUserAuthenticated(state)
});

export default connect(mapStateToProps)(PrivateRoute);