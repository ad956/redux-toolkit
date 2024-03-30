import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import todoFetchReducer from "../features/todoFetch/todoFetchSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
  todosfetch: todoFetchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
