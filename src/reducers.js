const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// import { combineReducers } from 'redux';
// import reducer1 from './reducer1';
// import reducer2 from './reducer2';

// const rootReducer = combineReducers({
//   reducer1,
//   reducer2,
// });

export default rootReducer;