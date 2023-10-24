import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoInitailState = {
   todos: []
}

const todoSlice = createSlice({
    name: 'Todo',
    initialState: todoInitailState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        editTodo: (state, action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload.id) todo.text = action.payload.text
                return todo
            })
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer