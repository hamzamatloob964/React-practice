import React, {useState} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import '../css/App.css';
import Car from './Car';
import {connect} from 'react-redux'
import stateAction from '../store/action/action'
//import {colorContext} from '../store2/context'

function Bike () {
  return (
    <div >
      <h3>this is bike</h3>
    </div>
  );
}

function Home(props) {
  const [name,setName] = useState('')
  return (
    // <colorContext.Provider value={color}>
      <Router>
        <div >
          <h3>Home</h3>
          <span>this is state value : {props.username}</span><br/>
          Enter name : <input onInput={e => setName(e.target.value)}></input>
          <button type="button" onClick={() => {props.changeNameFunc(name)}}>click</button>
          <Link to="/dashboard/home/car">CAR</Link>
          <Link to="/dashboard/home/bike">BIKE</Link>
          <Switch>
            <Route path = '/dashboard/home/car' component = {Car}/>
            <Route path = '/dashboard/home/bike' component = {Bike} />
          </Switch>
        </div>
      </Router>
    // </colorContext.Provider>
  );
}
function mapStateToProps (state) {
  return ({
    username: state.rootReducer.userName
  })
}
function mapDispatchToProps (dispatch) {
  return ({
    changeNameFunc: (changedName) => {
      dispatch(stateAction(changedName))
    }
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home;