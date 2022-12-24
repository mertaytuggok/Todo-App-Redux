import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewTodo } from "../Redux/Todos/todosSlice";

export const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo({ id: nanoid(), title, completed: false }));

    setTitle("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
    </form>
  );
};
