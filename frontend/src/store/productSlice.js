// import { createSlice } from '@reduxjs/toolkit';

import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     list: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     fetchProductsRequest: (state) => {
//       state.loading = true;
//     },
//     fetchProductsSuccess: (state, action) => {
//       state.list = action.payload;
//       state.loading = false;
//     },
//     fetchProductsFailure: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//     addProductRequest: (state) => {
//       state.loading = true;
//     },
//     updateProductRequest: (state) => {
//       state.loading = true;
//     },
//     deleteProductRequest: (state) => {
//       state.loading = true;
//     },
//   },
// });

// export const {
//   fetchProductsRequest,
//   fetchProductsSuccess,
//   fetchProductsFailure,
//   addProductRequest,
//   updateProductRequest,
//   deleteProductRequest,
// } = productSlice.actions;

// export default productSlice.reducer;


// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     list: [],
//     loading: false,
//     error: false
//   },
//   reducers: {
//     fetchProductsRequest: (state) => {
//       state.loading = true;
//     },
//     fetchProductsSuccess: (state, action) => {
//       state.list = action.payload;
//       state.loading = false;
//     },
//     fetchProductsFailure: (state, action) => {
//       state.error = action.payload
//       state.loading = false
//     },
//     addProductRequest: (state) => {
//       state.loading = true
//     },
//     updateProductRequest: (state) => {
//       state.loading = true
//     },
//     deleteProductRequest: (state) => {
//       state.loading = true
//     }
//   }
// })


// export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure, addProductRequest, deleteProductRequest, updateProductRequest } = productSlice.actions

// export default productSlice.reducer


const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    loading: false,
    error: false
  },
  reducers: {
    fetchProductsRequest: (state) => {
      state.loading = true
    },
    fetchProductsSuccess: (state, action) => {
      state.list = action.payload
      state.loading = false
    },
    fetchProductsFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    addProductRequest: (state) => {
      state.loading = true
    },
    updateProductRequest: (state) => {
      state.loading = true
    },
    deleteProductRequest: (state) => {
      state.loading = true
    }
  }
})

export const { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess, addProductRequest, deleteProductRequest, updateProductRequest } = productSlice.actions
export default productSlice.reducer