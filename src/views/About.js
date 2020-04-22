import React, { useState } from 'react';
import '../css/App.css';

export default class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {nameArray:[],name:'',updateName:''};
    this.addValue = this.addValue.bind(this);
    this.delValue = this.delValue.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }
  addValue (){
    let arry = this.state.nameArray;
    arry.push(this.state.name);
    //console.log("add value function triggered !",arry)
    this.setState({nameArray:arry});
    console.log("add value function triggered !",this.state.nameArray)
  }
  delValue () {
    let arry = this.state.nameArray;
    let ind = arry.indexOf(this.state.name);
    console.log("index of element :",ind)
    if(ind !== -1){
      arry.splice(ind,1);
    }
    console.log("del function triggered !",arry)
    this.setState({nameArray:arry});
  }
  updateValue () {
    let arry = this.state.nameArray;
    let ind = arry.indexOf(this.state.name);
    arry[ind] = this.state.updateName;
    console.log("update function triggered !",arry)
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
          <label>Enter name to update : </label>
          <input type="text" width="100px" height="60px" 
          onInput={e => this.setState({updateName:e.target.value})}/>
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
