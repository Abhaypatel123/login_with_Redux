import { GET_PRODUCT_LIST } from "./ActionTypes";


export default function (state={},actions){
    console.log('actions.......',actions)
    switch (actions.type) {
        case GET_PRODUCT_LIST:
            console.log(actions.payload)
            return {...state,products:actions.payload}
    
        default:
            return state;
            break;
    }
}

