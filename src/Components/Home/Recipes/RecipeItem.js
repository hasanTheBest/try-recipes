import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Pageview, StarRate } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  strMeal: {
    backgroundColor: theme.palette.warning.light,
    paddingRight: theme.spacing(5),
    color: theme.palette.warning.contrastText,
    padding: "0 !important",
  },
  titleButton: {
    color: theme.palette.warning.contrastText,
  },
  categoryAreaBar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "transparent",
    color: theme.palette.warning.main,
    position: "absolute",
    top: 0,
    "& a": {
      cursor: "pointer",
    },
  },
}));

const RecipeItem = ({
  recipe: { strCategory, strMeal, strArea, strMealThumb, idMeal },
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} md={3} xl={2} key={idMeal ? idMeal : strMeal}>
      <Card className={classes.card}>
        {strCategory && strArea && (
          <div className={classes.categoryAreaBar}>
            <Chip
              // onClick={(e) =>
              //   categoryFilter(e, false, recipe.strCategory, history)
              // }
              component={RouterLink}
              to={`/category/${strCategory}`}
              size="small"
              label={strCategory}
              color="secondary"
            />
            <Chip
              // onClick={(e) => onAreaFilter(e, recipe.strArea, history)}
              component={RouterLink}
              to={`/area/${strArea}`}
              value={strArea}
              size="small"
              label={strArea}
              color="primary"
            />
          </div>
        )}

        <CardMedia
          className={classes.media}
          image={strMealThumb}
          title={strMeal}
        />
        <CardContent className={classes.strMeal}>
          <Button
            fullWidth
            className={classes.titleButton}
            startIcon={<Pageview />}
            size="large"
            component={RouterLink}
            to={`/recipe/${idMeal}`}
            title={strMeal}
            // onClick={() => history.push(`/meal/${recipe.idMeal}`)}
          >
            <Typography component="span" noWrap>
              {strMeal}
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RecipeItem;
