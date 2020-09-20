import React from "react";
import { Container, Grid } from "@material-ui/core";
import NotFound404 from "../../NotFound404";
import RecipeItem from "./RecipeItem";
import SkeletonRecipeItem from "./SkeletonRecipeItem";
import useSuspenseItems from "../../Hook/useSuspenseItems";
import useInfinitiveScroll from "../../Hook/useInfinitiveScroll";

const SearchItems = ({ term, filter, id, name }) => {
  const catRecipes = useSuspenseItems(term, filter, id);
  const { items, lastElRef, loading } = useInfinitiveScroll(catRecipes, id);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} justify="center">
        {Boolean(items) ? (
          items.map((recipe, i) => (
            <>
              {loading ? (
                <SkeletonRecipeItem />
              ) : (
                <RecipeItem
                  item={recipe}
                  name={name}
                  ref={items.length === i + 1 ? lastElRef : null}
                />
              )}
            </>
          ))
        ) : (
          <NotFound404 />
        )}
      </Grid>
    </Container>
  );
};

export default SearchItems;
