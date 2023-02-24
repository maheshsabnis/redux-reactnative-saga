 
export const  ADD_PRODUCT = "ADD_PRODUCT";

export function addProduct(product){
     
    return {
        type: ADD_PRODUCT,
        product 
    };
}

export const  GET_PRODUCTS = "GET_PRODUCTS";

export function getProducts(){
    return {
        type: GET_PRODUCTS
    }
}