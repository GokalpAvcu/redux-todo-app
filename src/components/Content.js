import React from 'react'

function Content() {
  return (
   
	<section className="main">
    <input className="toggle-all" type="checkbox" />
    <label for="toggle-all">
        Mark all as complete
    </label>

    <ul className="todo-list">
        <li className="completed">
            <div class="view">
                <input className="toggle" type="checkbox" />
                <label htmlFor=''>Learn JavaScript</label>
                <button className="destroy"></button>
            </div>
        </li>
        <li>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label htmlFor=''>Learn React</label>
                <button className="destroy"></button>
            </div>
        </li>
        <li>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label htmlFor=''>Have a life!</label>
                <button className="destroy"></button>
            </div>
        </li>
    </ul>
</section>
  )
}

export default Content