const INITIAL_STATE = {
  userName : 'hamza'
}

export default (states = INITIAL_STATE, action) => {
  switch (action.type){
    case 'ChangeName':
      return ({
        ...states,
        userName : action.payload
      })
    default:
      return states;
  }
}