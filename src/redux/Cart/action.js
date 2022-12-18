import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const addItem = (data) => {
    return{
        type: ADD_ITEM,
        payload: data
    }
}

export const deleteTodo = data => {
    return {
        type: DELETE_ITEM,
        payload:data
    }
}