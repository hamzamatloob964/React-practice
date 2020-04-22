import React from 'react';
import '../css/App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';

function Dashboard () {
  
  return (
    <Router >
      <div>
        <header >
          <ul className="App-header">
            <li><Link to="/dashboard/home"> Home </Link></li>
            <li><Link to="/dashboard/About"> About </Link></li>
            <li><Link to="/dashboard/Contact"> Contact </Link></li>
          </ul>
        </header>
      </div>
      <Switch>
        <Route path = '/dashboard/home' component = {Home}/>
        <Route path = '/dashboard/home/car' exact component = {Home}/>
        <Route path = '/dashboard/about' component = {About} />
        <Route path = '/dashboard/contact' component = {Contact}/>
        <Route path = '/dashboard/*' component = {PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default Dashboard;
