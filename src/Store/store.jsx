import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import productSaga from "./productSaga";

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store with reducers and middleware
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
  // `middleware` must be a callback that returns an array of middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the product saga
sagaMiddleware.run(productSaga);

export default store;
