import React from "react";
import { Container, Grid } from "@material-ui/core";

import RecipeItem from "../Components/Common/RecipeItem";
import NotFound404 from "../NotFound404";
import ingredients from "../data/ingredient_list.json";

const Categories = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} justify="center">
        {Boolean(ingredients.meals) ? (
          ingredients.meals.map((ingredient) => (
            <RecipeItem item={ingredient} name="Ingredient" />
          ))
        ) : (
          <NotFound404 />
        )}
      </Grid>
    </Container>
  );
};

export default Categories;
