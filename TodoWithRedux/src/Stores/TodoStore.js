import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/todo/TodoSlicer"


export const TodoStore = configureStore({
    reducer: TodoReducer
})