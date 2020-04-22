import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import PageNotFound from '../views/PageNotFound';

function AppRouter() {
  return (
    <Switch>
      <Route path = '/' exact component = {Login}/>
      <Route path = '/dashboard' exact component = {Dashboard}/>
      <Route path = '/dashboard/home' component = {Dashboard}/>
      <Route path = '/dashboard/about' component = {Dashboard}/>
      <Route path = '/dashboard/contact' component = {Dashboard}/>
      <Route path = '/dashboard/*' component = {PageNotFound}/>
    </Switch>
  );
}

export default AppRouter;
