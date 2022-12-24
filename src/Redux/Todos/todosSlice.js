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
  reducers: {},
});
export default todosSlice.reducer;
