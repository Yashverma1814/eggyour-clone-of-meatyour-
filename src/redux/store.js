import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { Itemreducer } from "./Cart/reducer";



const rootReducer = combineReducers({
    cart:Itemreducer
})

export const store = createStore(rootReducer)