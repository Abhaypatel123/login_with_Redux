import {combineReducers} from 'redux';
import auth from './AuthReducer';
import ProductReducer from './ProductReducer';


export default combineReducers({
    auth,
    ProductReducer,
})