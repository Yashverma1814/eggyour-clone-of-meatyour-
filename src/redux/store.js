import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Cart/reducer";



export const store = createStore(reducer)