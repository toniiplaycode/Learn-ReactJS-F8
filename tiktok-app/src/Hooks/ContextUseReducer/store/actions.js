import { SET_TODO_INPUT, ADD_TODO } from "./constants";

export const setTodoInput = payload => {
    return{
        type: SET_TODO_INPUT,
        payload: payload
    }
}


export const addTodo = payload => {
    return{
        type: ADD_TODO,
        payload: payload
    }
}