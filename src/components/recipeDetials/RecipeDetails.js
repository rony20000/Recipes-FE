import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleRecipe } from "../../actions/recipes";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Navbar from "../navbar/Navbar";
import { Container } from "@mui/material";

const RecipeDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipes);
  const { id } = params;
  useEffect(() => {
    dispatch(getSingleRecipe(id));
  }, [dispatch, id]);
  return (
    <Container>
      <Navbar />
      <Card sx={{ maxWidth: 600, height: 350, marginTop: 10 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={`https://recipes-pqii.onrender.com/${recipe.imageUrl}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {recipe.instructions}
          </Typography>
          <Typography variant="body2" mt={1} color="text.secondary">
            {recipe.ingredients}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipeDetails;
