const reducers = (state = [], action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, message: "Get Products call is initiated" };
      case "GET_PRODUCTS_SUCCESS":
        return {
          ...state,
          products: action.products,
          message: action.message,
        };
      case "ADD_PRODUCT":
        return { ...state, message: "Add Product is initiated" };
      case "ADD_PRODUCT_SUCCESS":
        return { ...state, product:action.product, message: "Add Product is Successful" };
      default:
        return state;
    }
  };
  
  export default reducers;