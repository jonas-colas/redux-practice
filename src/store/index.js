import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case "INCREASE_BY_NUMBER":
      return { counter: state.counter + action.payload, showCounter: state.showCounter };  
    case "DECREMENT":
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case "DECREASE_BY_NUMBER":
      return { counter: state.counter - action.payload, showCounter: state.showCounter };
    case "TOGGLE_COUNTER":
      return { counter: state.counter, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
