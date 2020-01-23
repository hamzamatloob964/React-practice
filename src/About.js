import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import User from './User';
import { render } from '@testing-library/react';

export default class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {nameArray:[],name:''};
    this.addValue = this.addValue.bind(this);
    this.delValue = this.delValue.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }
  // const [name,setName] = useState('');
  // const [userName,setUserName] = useState([]);
  // var Username = 'hamza'
  // function addName () {
  //   // const data = document.getElementById('inp').value;
  //   // setName(data);
  //   console.log("function is called !")
  // }
  addValue (){
    let arry = this.state.nameArray;
    arry.push(this.state.name);
    console.log("function triggered !",arry)
    this.setState({nameArray:arry});
    console.log("function triggered !",this.state.nameArray)
  }
  delValue () {
    let arry = this.state.nameArray;
    let ind = arry.indexOf(this.state.name);
    arry.splice(ind,1);
    console.log("del function triggered !",arry)
    this.setState({nameArray:arry});
  }
  updateValue () {
    let arry = this.state.nameArray;
    let ind = arry.indexOf(this.state.name);
    arry[ind] = this.state.name;
    console.log("del function triggered !",arry)
    this.setState({nameArray:arry});
  }
  render() {
    return (
      <div>
        <h3>About</h3>
        <div className="form">
        <form>
        <label>User Name : </label>
          <input type="text" width="100px" height="60px" 
          onInput={e => this.setState({name:e.target.value})}/>
          <button onClick={this.addValue} type="button" style={{height: 30, width: 70, marginLeft:5 }}>Create</button>
          <button onClick={this.updateValue}  type="button" style={{height: 30, width: 70, marginLeft:5 }}>Update</button>
          <button onClick={this.delValue} type="button" style={{height: 30, width: 70, marginLeft:5 }}>Delete</button>
        </form>
        <span>user name is : {this.state.nameArray.map(val => val)}</span>
        </div>
      </div>
    );
  }
}
