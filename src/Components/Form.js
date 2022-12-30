import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodoAsync } from "../Redux/Todos/todosSlice";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.addNewTodoLoading);
  const Error = useSelector((state) => state.todos.addNewTodoError);

  const handleSumbit = async (e) => {
    if (!title) return;
    e.preventDefault();
    await dispatch(addNewTodoAsync({ title }));
    console.log("deneme");
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSumbit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        disabled={isLoading}
        className="new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      {isLoading && <Loading />}
      {Error && <Error message={Error} />}
    </form>
  );
};
