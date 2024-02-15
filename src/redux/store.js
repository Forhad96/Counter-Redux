import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featurs/counter/counterSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
