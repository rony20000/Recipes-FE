import { recipesActions } from "../store/recipes-slice";
import * as api from "../api/recipes";

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.getAllRecipes();
    console.log(data);
    dispatch(recipesActions.fetchAll(data));
  } catch (error) {
    console.log(error);
  }
};
export const getSingleRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.getRecipe(id);
    dispatch(recipesActions.fetchSinglePost(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchRecipesBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchRecipesBySearch(searchQuery);
    dispatch(recipesActions.fetchRecipesWithSearch(data));
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe = (recipe, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createRecipe(recipe);
    navigate(`/recipe/${data._id}`);
    dispatch(recipesActions.createRecipe(data));
  } catch (error) {
    console.log(error);
  }
};
export const updateRecipe =
  (id, updatedRecipe, navigate) => async (dispatch) => {
    try {
      const { data } = await api.updateRecipe(id, updatedRecipe);
      dispatch(recipesActions.updateRecipe(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await api.deleteRecipe(id);
    dispatch(recipesActions.deleteRecipe(id));
  } catch (error) {
    console.log(error);
  }
};
