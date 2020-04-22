import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import '../css/App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var history = useHistory();
  const addValue = () => {
    console.log("email and password are :"+email+password)
    history.push('/dashboard')
  }
  return (
    <div className="wrapper fadeInDown">
    {/* <span>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    </span> */}
      <div id="formContent">
        <div className="fadeIn first">
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
        </div>
        <form>
          <input type="text" id="login" className="fadeIn second" 
          name="login" placeholder="login" onInput={ e => setEmail(e.target.value) }/>
          <input type="text" id="password" className="fadeIn third" 
          name="login" placeholder="password" onInput={ e => setPassword(e.target.value) }/>
          <input type="submit" className="fadeIn fourth" value="Log In" onClick={ () => addValue()}/>
        </form>
      </div>
    </div>
  );
}
