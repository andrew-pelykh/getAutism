import React from 'react';
import { Route } from 'react-router';
import NavBar from './containers/NavBar';

export const routes = (
  <Route path="/" component={NavBar} />
);

export default routes;
