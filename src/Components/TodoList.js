import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggle,
  destroy,
  selectFilterTodos,
  getTodosAsync,
} from "../Redux/Todos/todosSlice";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const TodoList = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilterTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, []);
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id));
    }
  };
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }
  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              onClick={() => handleDestroy(item.id)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};
