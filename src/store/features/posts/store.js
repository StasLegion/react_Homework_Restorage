import { configureStore, createSlice } from "@reduxjs/toolkit";

import counterSlice from "../counter/counterSlice.js";

import postsSlice from "./postsSlice.js";

import productsSlice from "../products/productSlice.js";
const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.setItem("isAuthenticated", "false");
      localStorage.removeItem("user");
    },
    registerUser(state, action) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users));
    },
    checkAuth(state) {
      const isAuthenticated =
        localStorage.getItem("isAuthenticated") === "true";
      if (isAuthenticated) {
        const user = JSON.parse(localStorage.getItem("user"));
        state.isAuthenticated = isAuthenticated;
        state.user = user;
      }
    },
  },
});

export const { registerUser, loginUser, logoutUser, checkAuth } =
  authSlice.actions;

export const selectAuth = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    products: productsSlice,
    auth: authSlice.reducer,
  },
});
