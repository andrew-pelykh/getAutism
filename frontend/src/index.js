import React from 'react'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import routes from './routes'
import configureStore from './store'

const store = configureStore()

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={hashHistory} routes={routes}/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
