import axios from "axios";

const url = "http://localhost:5000/api/";

export const getAllRecipes = () => axios.get(`${url}`);
export const getRecipe = (id) => axios.get(`${url}/recipe/${id}`);
export const fetchRecipesBySearch = (searchQuery) =>
  axios.get(
    `${url}/search?searchQuery=${searchQuery.search || "none"}&ingredients=${
      searchQuery.ingredients || "none"
    }`
  );
export const deleteRecipe = (id) => axios.delete(`${url}/recipe/${id}`);
export const createRecipe = (recipe) => axios.post(`${url}/recipes/`, recipe);
export const updateRecipe = (id, updatedRecipe) =>
  axios.put(`${url}/recipe/${id}`, updatedRecipe);
