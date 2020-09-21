import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, MenuItem, MenuList } from "@material-ui/core";
import useIngredientsMeasure from "../../../Hook/useIngredientsMeasure";

const useStyles = makeStyles((theme) => ({
  ingredientMenu: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText,
  },
}));

const RecipeIngredientList = ({ meal }) => {
  const rows = useIngredientsMeasure(meal);

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
