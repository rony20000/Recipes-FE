import { useState } from "react";
import {
  AppBar,
  Container,
  Button,
  TextField,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { MuiChipsInput } from "mui-chips-input";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Recipe from "./Recipe/Recipe";
import "./style.css";
import Form from "../Form/Form";
import { fetchRecipesBySearch } from "../../actions/recipes";
const Recipes = () => {
  const [currentId, setCurrentId] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipes } = useSelector((state) => state.recipes);
  console.log(recipes);

  console.log(setSearchTerm, ingredients);
  const searchRecipes = () => {
    if (searchTerm.trim() || ingredients.length > 0) {
      // dispatch the search recipes
      dispatch(
        fetchRecipesBySearch({
          search: searchTerm,
          ingredients: ingredients.join(","),
        })
      );
      navigate(
        `/recipes/search?searchQuery=${
          searchTerm || "none"
        }&ingredients=${ingredients.join(",")}`
      );
    } else {
      navigate("/");
    }
  };
  const handleChange = (newIngerdients) => {
    setIngredients(newIngerdients);
  };

  return (
    <Container className="container">
      <Typography variant="h4" m={1} className="p">
        Recipes
      </Typography>
      <Grid
        className="container"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        spacing={3}
        container
      >
        <Grid container xs={12} spacing={3} sm={12} md={6} lg={9}>
          {recipes.length === 0 ? (
            <Typography className="p" variant="h3">
              no recipes found
            </Typography>
          ) : (
            ""
          )}
          {recipes?.map((recipe) => (
            <Grid
              item
              key={recipe._id}
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: 5,
              }}
              // sx={{ paddingLeft: 6 }}
              xs={12}
              sm={12}
              md={6}
              lg={4}
            >
              <Recipe recipe={recipe} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <AppBar position="static" color="inherit" className="appBarSearch">
            <Paper elevation={6} className="paper">
              <TextField
                name="search"
                label="Search by title"
                variant="outlined"
                fullWidth
                // onkeypress={handleKeyPress}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MuiChipsInput
                style={{ margin: "10px 0" }}
                label="Search ingredients"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                value={ingredients}
              />
              <Button
                variant="contained"
                onClick={searchRecipes}
                color="primary"
                fullWidth
              >
                Search
              </Button>
            </Paper>
          </AppBar>
          <Form id={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Recipes;
