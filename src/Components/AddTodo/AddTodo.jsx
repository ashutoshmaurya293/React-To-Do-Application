import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../slice/TodoSlice";
import "./AddTodo.css";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  // addTodoHandler
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input == "") {
      dispatch(addTodo(input));
      setInput("");
    } else return;
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
        className="AddInput"
          type="text"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="submit">
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
