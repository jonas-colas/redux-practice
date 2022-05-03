import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "INCREASE_BY_NUMBER":
      return { counter: state.counter + action.payload };  
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "DECREASE_BY_NUMBER":
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
