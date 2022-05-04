// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const initialLoginState ={
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialLoginState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, 
    auth: authSlice.reducer
  },
});

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;
