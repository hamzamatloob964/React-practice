
const STATE = {
  userName : 'kashif'
}

export default (states = STATE, action) => {
  switch(action.type){
    case 'changename':
      return {
        ...states,
        userName: action.payload
      }
    default:
      return states
  }
}