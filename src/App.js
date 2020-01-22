import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Router >
          <Route path = '/home' component = {Home}>
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact}/>
          </Route>
        </Router>
        </div>
        <a href="/about">About</a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
