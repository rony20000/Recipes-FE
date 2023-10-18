import { configureStore } from "@reduxjs/toolkit";

import recipesSlice from "./recipes-slice";

const store = configureStore({
  reducer: {
    recipes: recipesSlice,
  },
});
export default store;
