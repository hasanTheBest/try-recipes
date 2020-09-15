import React from "react";
// Material UI Components
import { Container, Grid, makeStyles } from "@material-ui/core";

// Components
import RecipeItem from "./RecipeItem";
import NotFound404 from "../../../NotFound404";

// Data
import recipes from "../../../data/recipes.json";

const useStyles = makeStyles((theme) => ({}));

const Recipes = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3} justify="center">
          {Boolean(recipes) ? (
            recipes.meals.map((recipe) => <RecipeItem recipe={recipe} />)
          ) : (
            <NotFound404 />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Recipes;
