import React from "react";

import {useSelector} from 'react-redux';

function ContentFooter() {

  const items = useSelector((state) => state.todos.items); // state.todos.items => src\redux\todos\todosSlice.js'de tanımladığımız initialState'in items kısmını alıyorum.
  const itemsLeft = items.filter(item => !item.completed).length; // item.completed => src\redux\todos\todosSlice.js'de tanımladığımız initialState'in items kısmındaki completed kısmını alıyorum. eğer completed false ise item'ı döndürüyorum. length => item'ların sayısını alıyorum.
  

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>  {"items left"}
        
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default ContentFooter;
