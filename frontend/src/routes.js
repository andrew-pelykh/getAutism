import React from 'react'
import { Route, IndexRoute } from 'react-router'
import NavBar from './containers/NavBar'
import Login from './containers/Login'
import User from './containers/User'
import Users from './containers/Users'
import NewsFeed from './containers/NewsFeed'
import Register from './containers/Register'
import { getToken } from './helpers/token_helper'

const routes = (
  <div>
  <Route path="/" component={NavBar} onEnter={checkLogin}>
    <IndexRoute component={NewsFeed}/>
    <Route path="users/:id" component={User} />
    <Route path="/users" component={Users} />
  </Route>
  <Route path="/" onEnter={checkLogout}>
    <Route path="login" component={Login} />
    <Route path="register" component={Register}/>
  </Route>
  </div>
)

function checkLogin(nextState, replace) {
  const token = getToken()
  if (!token) {
    replace('/login')
  }
}

function checkLogout(nextState, replace) {
  const token = getToken()
  if (token) {
    replace('/')
  }
}

export default routes
