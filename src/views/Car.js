import React, {useReducer} from 'react';
import '../css/App.css';
// import {connect} from 'react-redux'
// import storeUserAction from '../store2/action/userAction'
import { STATE, reducer } from '../store2/reducer/reducer'
//import {colorContext} from '../store2/context'

function Car () {

  // useMemo(() => {
  //   console.log('username changed');
  // }, [props.name])
  const [data,dispatch] = useReducer(reducer,STATE);
  
  return (
    // <colorContext.Consumer>
      <div >
        <h3>this is car </h3><br/>
        <span>new store name is : {data.userName}</span><br/>
        {/* <span>new store name is : {props.userName}</span><br/> */}
        {/* <button type="button" onClick={() => {props.changeName('hamza')}}>change text</button> */}
        <button type="button" onClick={() => dispatch({type:'changename', payload:'hamza123'})}>change text</button>
        <button type="button" >click</button>
      </div>
    // </colorContext.Consumer>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     userName: state.userReducer.userName
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeName: (changedName) => {
//       dispatch(storeUserAction(changedName))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Car)
export default Car;