// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import productReducer from './productSlice';
// import { productSaga } from './productSaga';

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productReducer from './productSlice';
import { productSaga } from "./productSaga";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     products: productReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(productSaga);

// export default store;

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     products: productReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(productSaga)

// export default store


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(productSaga);

export default store
