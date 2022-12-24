import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./Todos/todosSlice";

export const Store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
