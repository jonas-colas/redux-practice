import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export default counterSlice;