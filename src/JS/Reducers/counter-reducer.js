import { INCREMENT_COUNTER } from "../Constants/action-type";
import { DECREMENT_COUNTER } from "../Constants/action-type";

const initialState = {counter : 0 } 
const counter= (state = initialState, action) => { 
switch (action.type) {
  
    case INCREMENT_COUNTER:
 
    
  return {...state, counter:state.counter + 1}
 
    
  case DECREMENT_COUNTER:
 
  return {...state, counter : state.counter && state.counter - 1} 


    default : 
  return state }};
 
export default counter ;