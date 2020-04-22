
const STATE = {
  userName : 'kashif123'
}

const reducer =  (state, action) => {
  switch(action.type){
    case 'changename':
      return {
        ...state,
        userName: action.payload
      }
    default:
      return state
  }
}
export {STATE,reducer}