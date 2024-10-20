import React from "react";
import Products from "./Pages/Products";
import Basket from "./Pages/Basket.js";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/features/posts/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/basket",
    element: <Basket />,
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
