export default function changeNameFunc (changedName){
   return dispatch => {
     dispatch({type: 'changename', payload: changedName})
   }
 }