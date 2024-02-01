import {INCREMENT_COUNTER , DECREMENT_COUNTER} from '../Constants/action-type';

export const incrementCounter = (payload) => ({
    type: INCREMENT_COUNTER,
    payload 
   });
   export const decrementCounter = (payload) => ({
    type: DECREMENT_COUNTER,
    payload 
   });

