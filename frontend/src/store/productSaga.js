// import { call, put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';
// import {
//   fetchProductsRequest,
//   fetchProductsSuccess,
//   fetchProductsFailure,
//   addProductRequest,
//   updateProductRequest,
//   deleteProductRequest,
// } from './productSlice';

import { call, put, takeEvery } from "redux-saga/effects";
import { addProductRequest, deleteProductRequest, fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess, updateProductRequest } from "./productSlice";
import axios from "axios";
import { act } from "react";

// // Fetch Products
// function* fetchProductsSaga() {
//   try {
//     const response = yield call(axios.get, 'http://localhost:8005/products/');
//     yield put(fetchProductsSuccess(response.data));
//   } catch (error) {
//     yield put(fetchProductsFailure(error.message));
//   }
// }

function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:8005/products/');
    yield put(fetchProductsSuccess(response.data))
  } catch (error) {
    yield put(fetchProductsFailure(error.message))
  }
}

// // Add Product
// function* addProductSaga(action) {
//   try {
//     yield call(axios.post, 'http://localhost:8005/products/', action.payload);
//     yield fetchProductsSaga(); // Refresh product list
//   } catch (error) {
//     console.error('Add Product Error:', error);
//   }
// }

function* addProductSaga(action) {
  try {
    yield call(axios.post, 'http://localhost:8005/products/', action.payload)
    yield fetchProductsSaga();
  } catch (error) {
    console.error('Add Product Error', error)
  }
}

// // Update Product
// function* updateProductSaga(action) {
//   try {
//     const { id, ...data } = action.payload;
//     yield call(axios.put, `http://localhost:8005/products/${id}/`, data);
//     yield fetchProductsSaga();
//   } catch (error) {
//     console.error('Update Product Error:', error);
//   }
// }

function* updateProductSaga(action) {
  try {
    const { id, ...data } = action.payload;
    yield call(axios.put, `http://localhost:8005/products/${id}/`, data);
    yield fetchProductsSaga();
  } catch (error) {
    console.error('Update Product Error:', error);
  }
}

// // Delete Product
// function* deleteProductSaga(action) {
//   try {
//     yield call(axios.delete, `http://localhost:8005/products/${action.payload}/`);
//     yield fetchProductsSaga();
//   } catch (error) {
//     console.error('Delete Product Error:', error);
//   }
// }

function* deleteProductSaga(action) {
  try {
    yield call(axios.delete, `http://localhost:8005/products/${action.payload}/`);
    yield fetchProductsSaga();
  } catch (error) {
    console.error('Delete Product Error:', error);
  }
}

// export function* productSaga() {
//   yield takeEvery(fetchProductsRequest.type, fetchProductsSaga);
//   yield takeEvery(addProductRequest.type, addProductSaga);
//   yield takeEvery(updateProductRequest.type, updateProductSaga);
//   yield takeEvery(deleteProductRequest.type, deleteProductSaga);
// }


export function* productSaga() {
  yield takeEvery(fetchProductsRequest.type, fetchProductsSaga);
  yield takeEvery(addProductRequest.type, addProductSaga);
  yield takeEvery(updateProductRequest.type, updateProductSaga)
  yield takeEvery(deleteProductRequest.type, deleteProductSaga)
}
