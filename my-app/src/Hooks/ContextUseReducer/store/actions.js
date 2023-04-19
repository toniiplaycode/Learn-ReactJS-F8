import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO} from "./constants";

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

 export const deleteTodo = payload => {
    return{
        type: DELETE_TODO,
        payload: payload
    }
}
