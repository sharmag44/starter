import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, title: "todo 1", compeleted: false },
  { id: 2, title: "todo 2", compeleted: false },
  { id: 3, title: "todo 3", compeleted: true },
];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducer: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        compeleted: false,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
