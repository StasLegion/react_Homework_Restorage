import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkAuth, store } from "./store/features/posts/store.js";
import { selectAuth } from "./store/features/posts/store.js";
import { Provider } from "react-redux";
import Products from "./Pages/Products";
import Basket from "./Pages/Basket.js";
import CurrentProduct from "./Pages/CurrentProduct/CurrentProduct.js";
import Register from "./components/blocks/Register/Register.js";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/blocks/Login/Login.js";

store.dispatch(checkAuth());

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectAuth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/register" />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: "/:id",
    element: <CurrentProduct />,
  },
  {
    path: "/basket",
    element: (
      <ProtectedRoute>
        <Basket />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
