import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteRecipe } from "../../../actions/recipes";
const Recipe = ({ recipe, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteRecipeHandler = () => {
    dispatch(deleteRecipe(recipe._id));
  };
  const setIdtHandler = () => {
    navigate(`/recipe/${recipe._id}`);
  };
  return (
    <Card sx={{ maxWidth: 320, minHeight: 300, maxHeight: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`http://localhost:5000/${recipe.imageUrl}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.instructions}
        </Typography>
        <Typography variant="body2" mt={1} color="text.secondary">
          {recipe.ingredients}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteRecipeHandler}>
          delete
        </Button>
        <Button
          size="small"
          onClick={() => {
            setCurrentId(recipe._id);
          }}
        >
          update
        </Button>
        <Button size="small" onClick={setIdtHandler}>
          Show More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Recipe;
