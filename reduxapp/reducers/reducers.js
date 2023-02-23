import {ADD_PRODUCT, GET_PRODUCTS} from './../actions/actions';
 
import {combineReducers} from 'redux';

export function addProductReducer(state,action){
    //alert(`In Add Product Reducer ${JSON.stringify(state)}`);
    switch(action.type){
        case ADD_PRODUCT:
              return {
                product:action.product
              };
        default:
            return state;        
    }
}

export function listProductReducer(state=[],action){
    //alert(`In List Product Reducer ${JSON.stringify(state)}`);
    switch(action.type){
        case ADD_PRODUCT:
              return  [...state,addProductReducer(undefined,action)];
        default:
            return state;        
    }
}

const productReducers = combineReducers({listProductReducer});
export default productReducers;