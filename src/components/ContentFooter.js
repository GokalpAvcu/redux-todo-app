import React from "react";

import { useSelector } from "react-redux";
import { changeActiveFilter } from "../redux/todos/todosSlice";

function ContentFooter() {
  const items = useSelector((state) => state.todos.items); // state.todos.items => src\redux\todos\todosSlice.js'de tanımladığımız initialState'in items kısmını alıyorum.
  const itemsLeft = items.filter((item) => !item.completed).length; // item.completed => src\redux\todos\todosSlice.js'de tanımladığımız initialState'in items kısmındaki completed kısmını alıyorum. eğer completed false ise item'ı döndürüyorum. length => item'ların sayısını alıyorum.
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item{itemsLeft > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => changeActiveFilter}
          >
            All
          </a>
        </li>
        <li>
          <a href="#/" className={activeFilter === "all" ? "selected" : ""}>
            Active
          </a>
        </li>
        <li>
          <a href="#/" className={activeFilter === "all" ? "selected" : ""}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default ContentFooter;
