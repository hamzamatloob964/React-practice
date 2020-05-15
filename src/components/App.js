import React,{ useState, useEffect } from 'react';
import '../css/App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
//import Routes from './AppRouter';
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import PageNotFound from '../views/PageNotFound'
import {Provider} from 'react-redux'
import store from '../store/index'
//import store2 from '../store2/index'

function App() {
  //const [name,setName] = useState('');

  useEffect(() => {
    //console.log("state name value in mount is :",name)
  });

  return (
    <Provider store={store}>
      <Router >
        <Switch>
          <Route path = '/' exact component = {Login}/>
          <Route path = '/dashboard' exact component = {Dashboard}/>
          <Route path = '/dashboard/home' component = {Dashboard}/>
          <Route path = '/dashboard/about' component = {Dashboard}/>
          <Route path = '/dashboard/contact' component = {Dashboard}/>
          <Route path = '/dashboard/*' component = {PageNotFound}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
