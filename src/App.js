import React, { Component } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import PrivateRoute from './hoc/PrivateRoute';
import Posts from './containers/posts';
import Login from './containers/login';
import Header from './containers/header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Header/>
              <Posts/>
              <main>
                  <Switch>
                      <Redirect exact path='/' to='/posts' />
                      <Route exact path="/login" component={Login} />
                      <PrivateRoute exact path='/posts' component={Posts} />
                      <Redirect to={'/posts'}/>
                  </Switch>
              </main>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
