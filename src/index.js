import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
