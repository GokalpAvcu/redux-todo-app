import React from "react";

import { useSelector, useDispatch } from "react-redux"; // tanımlamış olduğum bir state'e erişim sağlayabilmek için useSelector kullanıyorum.
import { toggle, destroy } from "../redux/todos/todosSlice"; // toggle fonksiyonunu import ediyorum.

let filtered = []; // filtered adında bir dizi tanımlıyorum.
function TodoList() {
  const dispatch = useDispatch(); // dispatch fonksiyonunu kullanabilmek için useDispatch kullanıyorum.
  const items = useSelector((state) => state.todos.items); // state.todos.items => state.todos.items'ı alıyorum. state.todos.items => todosSlice.reducer'da tanımladığımız initialState.items'ı alıyorum.
  const activeFilter = useSelector((state) => state.todos.activeFilter); // state.todos.activeFilter => state.todos.activeFilter'ı alıyorum. state.todos.activeFilter => todosSlice.reducer'da tanımladığımız initialState.activeFilter'ı alıyorum.

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id)); // dispatch ile destroy fonksiyonunu çağırıyorum.
    }
  };

  filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false && todo
        : todo.completed === true && todo
    ); // filtered değişkenine items'ı filtreliyorum. activeFilter === "active" ? todo.completed === false && todo : todo.completed === true => activeFilter "active" ise todo.completed, false ise todo'yu döndürüyorum. activeFilter "completed" ise todo.completed true ise todo'yu döndürüyorum.
  }

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() =>
                dispatch(toggle({ id: item.id }))
              } /* onChange={() => dispatch(toggle())} => toggle fonksiyonunu dispatch ediyorum. */
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
