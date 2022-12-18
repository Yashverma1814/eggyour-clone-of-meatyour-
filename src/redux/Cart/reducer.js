import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const initState = {
    item : []
}

export const Itemreducer = (state=initState,action) => {
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                item:[...state.item,action.payload],
            };
        default:
            return state
    }
}