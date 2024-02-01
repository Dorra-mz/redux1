import { createStore } from "redux";

import counterReducer from "../Reducers/counter-reducer";

const store = createStore (counterReducer);

export default store;