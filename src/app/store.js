import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../components/state/slice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
