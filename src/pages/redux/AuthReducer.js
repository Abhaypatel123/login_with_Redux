import { ADD_IN_AUTH, CREATE_AUTH, LOGOUT_AUTH } from "./ActionTypes";


export default function (state=null,actions){
    // console.log('actions',actions)
    switch (actions.type) { 
        case CREATE_AUTH:
            return Object.assign({}, state, actions.payload);
        
        case LOGOUT_AUTH:
            return null;
        
        case ADD_IN_AUTH:
            return Object.assign({}, state, actions.payload);

        default:
            return state
        break;
    }
}
