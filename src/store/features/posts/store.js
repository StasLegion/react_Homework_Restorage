import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../counter/counterSlice.js";

import postsSlice from "./postsSlice.js";

import productsSlice from "../products/productSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    products: productsSlice,
  },
});
