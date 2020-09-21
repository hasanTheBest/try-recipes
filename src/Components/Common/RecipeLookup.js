import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
// Components
import IngredientMeasureTable from "../Home/RecipeLookup/IngredientMeasureTable";
import RecipeIngredientList from "../Home/RecipeLookup/RecipeIngredientList";
import RecipeMetaBar from "../Home/RecipeLookup/RecipeMetaBar";
import RecipeThumbnail from "../Home/RecipeLookup/RecipeThumbnail";
import useSuspenseItems from "../../Hook/useSuspenseItems";

// const meal = singleRecipe.meals[0];

const useStyles = makeStyles((theme) => ({
  recipeInstructions: {
    display: "flex",
  },
}));

const RecipeLookup = ({ random }) => {
  const classes = useStyles();
  const { id } = useParams();
  const meal = useSuspenseItems(random ? "random" : "lookup", "i", id)[0];

  return (
    <div className="recipe-lookup">
      <Container maxWidth="md">
        <Grid container spacing={0}>
          {random && (
            <Grid item xs={12}>
              <Box py={6}>
                <Typography variant="h4" color="initial" noWrap>
                  Random Lookup
                </Typography>
              </Box>
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <RecipeThumbnail meal={meal} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <IngredientMeasureTable meal={meal} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <RecipeMetaBar meal={meal} />
            <Card>
              <CardHeader title={meal.strMeal} />
              <CardContent className={classes.recipeInstructions}>
                <Box mr={2}>
                  <Typography
                    component="p"
                    style={{
                      maxWidth: 650,
                      textAlign: "justify",
                    }}
                  >
                    {meal.strInstructions}
                  </Typography>
                  <Hidden smUp>
                    <Box mt={3}>
                      <RecipeIngredientList meal={meal} />
                    </Box>
                  </Hidden>
                </Box>
                <Hidden smDown>
                  <Box p={2} pt={0}>
                    <RecipeIngredientList meal={meal} />
                  </Box>
                </Hidden>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RecipeLookup;
