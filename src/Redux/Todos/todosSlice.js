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
  },
});
export const { addNewTodo } = todosSlice.actions;
export default todosSlice.reducer;
