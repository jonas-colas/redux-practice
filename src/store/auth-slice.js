import { createSlice } from "@reduxjs/toolkit";

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

export const authActions = authSlice.actions;

export default authSlice.reducer;