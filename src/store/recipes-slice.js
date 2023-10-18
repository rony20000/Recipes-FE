import { createSlice } from "@reduxjs/toolkit";
const initialState = { recipes: [], recipe: {} };
const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    fetchAll(state, action) {
      state.recipes = action.payload;
    },
    fetchSinglePost(state, action) {
      console.log(action.payload);
      state.recipe = action.payload;
    },
    fetchRecipesWithSearch(state, action) {
      state.recipes = action.payload;
    },
    createRecipe(state, action) {
      state.recipes = [...state.recipes, action.payload];
    },
    updateRecipe(state, action) {
      state.recipes = state.recipes.map((recipe) =>
        recipe._id === action.payload._id ? action.payload : recipe
      );
    },
    
    deleteRecipe(state, action) {
      state.recipes = state.recipes.filter(
        (recipe) => recipe._id !== action.payload
      );
    },
    
  },
});

export const recipesActions = recipesSlice.actions;
export default recipesSlice.reducer;
