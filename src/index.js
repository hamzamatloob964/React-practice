import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
