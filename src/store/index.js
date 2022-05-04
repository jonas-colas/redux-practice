// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increaseByNumber: (state, action) => {
      state.counter += action.payload;
    },
    decreaseByNumber: (state, action) => {
      state.counter -= action.payload;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    }
  }
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { 
//         counter: state.counter + 1, 
//         showCounter: state.showCounter 
//       };
//     case "INCREASE_BY_NUMBER":
//       return { 
//         counter: state.counter + action.payload, 
//         showCounter: state.showCounter 
//       };  
//     case "DECREMENT":
//       return { 
//         counter: state.counter - 1, 
//         showCounter: state.showCounter 
//       };
//     case "DECREASE_BY_NUMBER":
//       return { 
//         counter: state.counter - action.payload, 
//         showCounter: state.showCounter 
//       };
//     case "TOGGLE_COUNTER":
//       return { 
//         counter: state.counter, 
//         showCounter: !state.showCounter 
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
