import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./productSlice";

function* fetchProducts() {
  try {
    const response = yield call(axios.get, "https://fakestoreapi.com/products");
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* productSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchProducts);
}

export default productSaga;
