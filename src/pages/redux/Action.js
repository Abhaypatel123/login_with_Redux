
import axios from 'axios';
import {CREATE_AUTH,LOGOUT_AUTH,ADD_IN_AUTH, GET_PRODUCT_LIST} from './ActionTypes';


export const createAuth = (params) => async dispatch => {
    dispatch({
      type: CREATE_AUTH,
      payload: params
    });
  }; 

export const logoutAuth = () => async dispatch =>{
  dispatch({
    type: LOGOUT_AUTH,
    payload : null,
  })
}

export const addInAuth = (params) => async dispatch => {
  dispatch({
    type:ADD_IN_AUTH,
    payload:params,
  })
}
  

export const getProductList = () => async dispatch =>{
  try {
    let { data } = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
    console.log('data',data)
    dispatch({
      type:GET_PRODUCT_LIST,
      payload:data.data || []
    })
  } catch (error) {
    console.log('errror',error.response)
  }
}
