import React from "react";

function TodoList() {
  return (
    <ul className="todo-list">
      <li className="completed">
        <div class="view">
          <input className="toggle" type="checkbox" />
          <label htmlFor="">Learn JavaScript</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label htmlFor="">Learn React</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label htmlFor="">Have a life!</label>
          <button className="destroy"></button>
        </div>
      </li>
    </ul>
  );
}

export default TodoList;
