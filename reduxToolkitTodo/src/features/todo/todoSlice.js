import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { 
            id: 1,
            text: "Hello world"
        }
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export const todoReducer = todoSlice.reducer