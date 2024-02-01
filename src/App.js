import React from "react";
import {incrementCounter , decrementCounter} from "./JS/Actions/action";
import { useDispatch , useSelector} from "react-redux";


function App () { 
const dispatch = useDispatch (); 
const counter = useSelector ((state) => state.counter) 

 return (<div>
  <h1>Redux Counter App</h1>
  <p> Counter: {counter}</p>
  <button onClick={() => dispatch(incrementCounter())}>Increment</button>
  <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
</div>) ;
};
export default App;