import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { createRecipe, updateRecipe } from "../../actions/recipes";

import { TextField, Paper, Button, Typography } from "@mui/material";

const Form = ({ id, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
  });
  let disabled = true;
  const recipe = useSelector((state) =>
    id ? state.recipes.recipes.find((recipe) => recipe._id === id) : null
  );
  console.log(recipe);
  useEffect(() => {
    if (recipe) {
      setRecipeData(recipe);
    }
  }, [recipe]);

  const handleChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };
  if (
    recipeData.title &&
    recipeData.ingredients &&
    recipeData.instructions &&
    recipeData.imageUrl
  ) {
    disabled = false;
  }
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(recipeData.ingredients);
    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("instructions", recipeData.instructions);
    formData.append("ingredients", recipeData.ingredients);
    formData.append("image", recipeData.imageUrl);

    if (id) {
      dispatch(updateRecipe(id, formData, navigate));
    } else {
      dispatch(createRecipe(formData, navigate));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setRecipeData({
      title: "",
      ingredients: "",
      instructions: "",
      imageUrl: "",
    });
  };

  return (
    <div>
      <Paper elevation={6} className="paper">
        <form
          autoComplete="off"
          noValidate
          className="form"
          onSubmit={submitHandler}
        >
          <Typography variant="h6">
            {id ? "Editing" : "Creating"} a Recipe
          </Typography>

          <TextField
            className="textField"
            name="title"
            variant="outlined"
            label="title"
            fullWidth
            value={recipeData.title}
            onChange={handleChange}
          />
          <TextField
            className="textField"
            name="ingredients"
            variant="outlined"
            margin="10px"
            label="ingredients separated by commas"
            fullWidth
            value={recipeData.ingredients}
            onChange={(e) =>
              setRecipeData({
                ...recipeData,
                ingredients: e.target.value.split(","),
              })
            }
          />
          <TextField
            name="instructions"
            variant="outlined"
            label="instructions"
            fullWidth
            value={recipeData.instructions}
            onChange={handleChange}
          />

          <div className="fileInput">
            <input
              name="image"
              type="file"
              onChange={(e) =>
                setRecipeData({
                  ...recipeData,
                  imageUrl: e.target.files[0],
                })
              }
            />
          </div>
          <Button
            className="submit"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={disabled}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
