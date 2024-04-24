import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // ADD TODOS

    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        text: action.payload,
        toggle: false,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    // REMOVE TODOS

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    // TOGGLE TODO

    ToggleTodo: (state, action) => {
      state.todos.map((e) => {
        if (e.id == action.payload) {
          e.toggle = !e.toggle;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});
export const { addTodo, removeTodo, ToggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
