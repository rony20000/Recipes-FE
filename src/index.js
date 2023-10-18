import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RecipeDetails from "./components/recipeDetials/RecipeDetails";
import store from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
  {
    path: "/recipes/search",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
  {
    path: "/recipe/:id",
    element: (
      <Provider store={store}>
        <RecipeDetails />
      </Provider>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
