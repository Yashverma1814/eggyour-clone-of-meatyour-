import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const addItem = (data) => ({
    type: ADD_ITEM,
    payload: data
})
export const deleteItem = (data) => ({
    type: DELETE_ITEM,
    payload: data
})

