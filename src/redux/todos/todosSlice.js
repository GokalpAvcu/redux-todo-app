import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    dafd: "asdasd",
    items: [
      {
        id: "1",
        title: "Learn React",
        completed: true,
      },
      {
        id: "2",
        title: "Read a book",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state,action) => {
      state.items.push(action.payload) // action.payload => src\components\AddTodo.js'de tanımladığımız addTodo({title: title, completed: false})'un title kısmını alıyorum.
    },
    toggle: (state,action) => {
    const {id} = action.payload //  action.payload => src\components\TodoList.js'de tanımladığımız toggle(item.id)'in item.id kısmını alıyorum.

    const item = state.items.find((item) => item.id === id); // item.id === id => item.id'yi id ile karşılaştırıyorum. eğer item.id id'ye eşitse item'ı döndürüyorum.
    item.completed = !item.completed; // true ise false, false ise true yapmak için ! kullanıyorum.
    }
  },
});

export const {addTodo} = todosSlice.actions; 
export default todosSlice.reducer; // reducer'ı dışarı aktardık çünkü bunu store'da import edip reducer field'ına vermemiz gerekiyor.
