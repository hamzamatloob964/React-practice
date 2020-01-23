import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router >
      <div>
        <header >
          <ul className="App-header">
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/About"> About </Link></li>
            <li><Link to="/Contact"> Contact </Link></li>
          </ul>
        </header>
        <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/about' component = {About} />
        <Route path = '/contact' component = {Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
