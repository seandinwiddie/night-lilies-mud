import { createStore } from 'redux';

import rootReducer from './reducers';

const initialState = {};

const store = createStore(
  (state = initialState) => state,
);

// const store = createStore(
//   rootReducer,
//   initialState,
// );

/*
const db = require("./db");

const users = db.get("users").value();
console.log(users);

*/

export default store;
