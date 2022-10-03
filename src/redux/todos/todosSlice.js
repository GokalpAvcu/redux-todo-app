import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
  name: "todos",
  initialState: {
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
      state.items.push(action.payload)
    }
  },
});

export const {addTodo} = todosSlice.actions;
export default todosSlice.reducer; // reducer'ı dışarı aktardık çünkü bunu store'da import edip reducer field'ına vermemiz gerekiyor.
