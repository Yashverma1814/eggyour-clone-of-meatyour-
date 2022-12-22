import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const initState = {
    counter : 0,
    bill: 0,
    items : [],

}

export const reducer = (state=initState,action) => {

    


    switch(action.type){
        case ADD_ITEM:

            const dataGet = action.payload
            var price = 0;
            if(dataGet.quan=='30'){
                price=329;
            }
            else if(dataGet.quan=='24'){
                price=290;
            }
            else if(dataGet.quan=='12'){
                price=160;
            }
            else if(dataGet.quan=='60'){
                price=599;
            }
            else if(dataGet.quan=='90'){
                price=879;
            }

            return{
                ...state,
                items:[...state.items,action.payload],
                counter:state.counter+1,
                bill:state.bill+price
            };
        default:
            return state;
    }
};