import React from "react";
import { Container, Grid } from "@material-ui/core";

import RecipeItem from "../Components/Common/RecipeItem";
import NotFound404 from "../NotFound404";
import cat from "../data/categories.json";

const Categories = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} justify="center">
        {Boolean(cat.categories) ? (
          cat.categories.map((category) => (
            <RecipeItem item={category} name="Category" />
          ))
        ) : (
          <NotFound404 />
        )}
      </Grid>
    </Container>
  );
};

export default Categories;
