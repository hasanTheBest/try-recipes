import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, MenuItem, MenuList } from "@material-ui/core";

// Table helper function
function createData(ingredient, measure) {
  return { ingredient, measure };
}

const useStyles = makeStyles((theme) => ({
  ingredientMenu: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText,
  },
}));

const RecipeIngredientList = ({ meal }) => {
  const rows = [
    createData(meal.strIngredient1, meal.strMeasure1),
    createData(meal.strIngredient2, meal.strMeasure2),
    createData(meal.strIngredient3, meal.strMeasure3),
    createData(meal.strIngredient4, meal.strMeasure4),
    createData(meal.strIngredient5, meal.strMeasure5),
    createData(meal.strIngredient6, meal.strMeasure6),
    createData(meal.strIngredient7, meal.strMeasure7),
    createData(meal.strIngredient8, meal.strMeasure8),
    createData(meal.strIngredient9, meal.strMeasure9),
    createData(meal.strIngredient10, meal.strMeasure10),
    createData(meal.strIngredient11, meal.strMeasure11),
    createData(meal.strIngredient12, meal.strMeasure12),
    createData(meal.strIngredient13, meal.strMeasure13),
    createData(meal.strIngredient14, meal.strMeasure14),
    createData(meal.strIngredient15, meal.strMeasure15),
    createData(meal.strIngredient16, meal.strMeasure16),
    createData(meal.strIngredient17, meal.strMeasure17),
    createData(meal.strIngredient18, meal.strMeasure18),
    createData(meal.strIngredient19, meal.strMeasure19),
    createData(meal.strIngredient20, meal.strMeasure20),
  ];

  const classes = useStyles();
  return (
    <MenuList className={classes.ingredientMenu}>
      {rows.map(
        ({ ingredient }, i) =>
          ingredient && (
            <MenuItem
              key={i}
              to={`/ingredient/${ingredient}`}
              // onClick={(e) => handleClickIngredient(ingredient, history)}
              component={RouterLink}
              fullWidth
            >
              {ingredient}
            </MenuItem>
          )
      )}
    </MenuList>
  );
};

export default RecipeIngredientList;
