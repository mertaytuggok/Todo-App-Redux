import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle, destroy, selectFilterTodos } from "../Redux/Todos/todosSlice";

export const TodoList = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilterTodos);
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id));
    }
  };

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
