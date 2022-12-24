import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Todo App",
        completed: true,
      },
      { id: "2", title: "Redux/Toolkit", completed: false },
    ],
  },
  reducers: {
    addNewTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
  },
});
export const { addNewTodo, toggle } = todosSlice.actions;
export default todosSlice.reducer;
