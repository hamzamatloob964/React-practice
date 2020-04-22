export default function changeName (changeName) {
  return dispatch => {
    dispatch({type: 'ChangeName', payload: changeName})
    //console.log("action is dispatched !")
  }
}