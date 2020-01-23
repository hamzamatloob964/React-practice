import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
export default function Contact() {
  return (
    <div >
      <h3>users</h3>
      {/* <h3>user details : {match.params.id}</h3>
      {(parseInt(match.params.id) === 3 ? 
      (<Redirect to="/"/>):'' )} */}
    </div>
  );
}
