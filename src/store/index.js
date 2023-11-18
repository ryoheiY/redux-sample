import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterslice";
import loginSlice from "./authenticateslice";
export const INCREMENT = "increment";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    login: loginSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export const authActions = loginSlice.actions;
export default store;
