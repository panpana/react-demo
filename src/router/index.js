import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import App from '../page/App';
import Commodity from '../page/Commodity';
import Index from '../page/Index';
import Order from '../page/Order';
import Finance from '../page/Finance';
import Release from '../page/Release';
import PageNotFound from '../page/404page';
import ReactGmTest from '../page/ReactGmTest';
import Test from '../page/test';


export default (
  <Router history={hashHistory} >
    <Route component={App} path="/">
      <IndexRedirect to="index"/>
      <Route component={Index} path="/index"></Route>
      <Route component={Commodity} path="commodity/:id"></Route>
      <Route component={Order} path="order"></Route>
      <Route component={Finance} path="finance"></Route>
      <Route component={Release} path="release"></Route>
      <Route component={ReactGmTest} path="gmtest"></Route>
      <Route component={Test} path="test"></Route>      
      <Route path="*" component={PageNotFound}></Route>
    </Route>
  </Router>
);