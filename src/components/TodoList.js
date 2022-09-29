import React from "react";

import { useSelector } from "react-redux"; // tanımlamış olduğum bir state'e erişim sağlayabilmek için useSelector kullanıyorum.

function TodoList() {
  const items = useSelector((state) => state.todos.items); // state.todos.items => state.todos.items'ı alıyorum. state.todos.items => todosSlice.reducer'da tanımladığımız initialState.items'ı alıyorum.
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
