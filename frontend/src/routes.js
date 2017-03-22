import React from 'react';
import { Route } from 'react-router';
import NavBar from './containers/NavBar';
import Login from './containers/Login';
import User from './containers/User'
import { getToken } from './helpers/token_helper';

const routes = (
  <div>
  <Route path="/" component={NavBar} onEnter={checkLogin}>
    <Route path ="users/:id" component={User} />
  </Route>
  <Route path="/" onEnter={checkLogout}>
    <Route path="login" component={Login} />
  </Route>
  </div>
);

function checkLogin(nextState, replace) {
  const token = getToken();
  if (!token) {
    replace('/login');
  }
}

function checkLogout(nextState, replace) {
  const token = getToken();
  if (token) {
    replace('/');
  }
}

export default routes;
