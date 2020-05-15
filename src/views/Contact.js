import React, { useState } from 'react';
import '../css/App.css';

export default function Contact() {
  const [name, setName] = useState('');
  //const [updateName, setupdateName] = useState('');
  const [nameArray, setnameArray] = useState([]);
  const addValue = () => {
    nameArray.push(name)
    setnameArray(nameArray => [...nameArray]);
  }
  return (
    <div> 
      <h3>Contact</h3>
      <div className="form">
      <form>
        <label>User Name : </label>
        <input type="text" width="100px" height="60px" 
        onInput={e => setName(e.target.value)}/>
        <label>Enter name to update : </label>
        <input type="text" width="100px" height="60px" />
        <button onClick={addValue} type="button" 
        style={{height: 30, width: 70, marginLeft:5 }}>Create</button>
        <button type="button" style={{height: 30, width: 70, marginLeft:5 }}>Update</button>
        <button type="button" style={{height: 30, width: 70, marginLeft:5 }}>Delete</button>
      </form>
      <span>user name is : {nameArray}</span>
      </div>
    </div>
  );
}
