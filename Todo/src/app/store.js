import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducers: todoReducer,
}) //basic concept and format for the store

 