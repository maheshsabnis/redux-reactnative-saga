// import operators for calling services (call()), dispatching output action (put())
// taking the latest response (takeLatest) and listening to all actions (all())

import { all, call, put, takeLatest } from "redux-saga/effects";
// also import the service
import ProductService from "../service/productservice";

// local methods for get and post
function getProducts() {
  let serv = new ProductService();
  // the resolved promise object which is a response which is itself a promise
  const response = serv.getData().then((result) => result.data);
  // lets resolve the promise response
  return Promise.resolve(response);
}

function postProduct(prod) {
  let serv = new ProductService();
  const response = serv.postData(prod).then((result) => result.data);
  return Promise.resolve(response);
}

// GET_DEPARTMENT input / output generator function

function* outputActionGetProducts() {
  try {
    // call the promise based method
    const response = yield call(getProducts);
    // Lets dispatch the success  output action
    yield put({
      type: "GET_PRODUCTS_SUCCESS", // action type
      products: response, // payload
      message: "Successfully received the data",
    });
  } catch (ex) {
    // Lets dispatch the failed  output action
    yield put({
      type: "GET_PRODUCTS_FAILED", // action type
      message: `Error Occurred ${ex.message}` ,
    });
  }
}
function* inputActionGetProducts() {
  // link the input action with output action
  // Parameters
  // P1: The Action that is dispatched
  // P2: The generator function (worker) that will executed against the input dispatched action
  yield takeLatest("GET_PRODUCTS", outputActionGetProducts);
}

// pass the 'action' object to read the payload
// so that it can be passed to the postProduct method
function* outputActionAddProduct(action) {
   
    try {
        // call the promise based method
        const response = yield call(postProduct, action.product);
        // Lets dispatch the success  output action
        yield put({
          type: "ADD_PRODUCT_SUCCESS", // action type
          product: response, // payload
          message: "Successfully added the data",
        });
      } catch (ex) {
        // Lets dispatch the failed  output action
        yield put({
          type: "ADD_PRODUCT_FAILED", // action type
          message: `Error Occurred ${ex.message}` ,
        });
      }
}

function* inputActionAddProduct() {
   console.log(`In Add Product Saga`); 
  // The parameter 2 will read the action object with the payload
  // {type:`ADD_PRODUCT`, payload}
  // the takeLatest will pass the action object to the linked output method
  yield takeLatest("ADD_PRODUCT", outputActionAddProduct);
}

// create a SAGA Export function, that will work on root
export default function* rootSaga() {
    console.log(`Running with Root SAGA`);
  // listen to all actions
  yield all([inputActionGetProducts(),inputActionAddProduct()]);
}