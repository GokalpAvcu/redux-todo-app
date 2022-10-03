import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import { addTodo } from "../redux/todos/todosSlice";

function Form() {
  const [title, setTitle] = useState(''); 

  const dispatch = useDispatch(); // dispatch fonksiyonunu çağırdık.

  const handleSubmit = (e) => { // form submit olduğunda çalışacak fonksiyon
    e.preventDefault(); // sayfa yenilenmesini engellemek için

    dispatch(addTodo({ id: nanoid(), title, completed: false })) // dispatch fonksiyonu ile action'ı çağırdık. action'ın içindeki payload'ı da gönderdik."}))
    setTitle('') // title'ı boşalttık.
  };

  return (
    <form onSubmit={handleSubmit}> {/* form submit olduğunda handleSubmit fonksiyonunu çalıştır */}
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title} // input'un value'su title
        onChange={(e) => setTitle(e.target.value)} // input'a her yazıldığında title'ı güncelle
      />
    </form>
  );
}

export default Form;
