import {  createSlice } from "@reduxjs/toolkit";
const initialIsAuthenticatedState = { isAuthenticated: false };
const loginSlice = createSlice({
  name: "login",
  initialState: initialIsAuthenticatedState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default loginSlice;