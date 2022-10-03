import React from "react";

import { useSelector, useDispatch } from "react-redux"; // tanımlamış olduğum bir state'e erişim sağlayabilmek için useSelector kullanıyorum.
import { toggle } from "../redux/todos/todosSlice"; // toggle fonksiyonunu import ediyorum.

function TodoList() {
  const dispatch = useDispatch(); // dispatch fonksiyonunu kullanabilmek için useDispatch kullanıyorum.
  const items = useSelector((state) => state.todos.items); // state.todos.items => state.todos.items'ı alıyorum. state.todos.items => todosSlice.reducer'da tanımladığımız initialState.items'ı alıyorum.
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))} /* onChange={() => dispatch(toggle())} => toggle fonksiyonunu dispatch ediyorum. */
            />{" "}      
            <label>{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
