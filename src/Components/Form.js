import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../Redux/Todos/todosSlice";

export const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    if (!title) return;
    e.preventDefault();
    dispatch(addNewTodo({ title }));

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
