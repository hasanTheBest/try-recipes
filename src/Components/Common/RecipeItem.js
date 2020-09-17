import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Pageview, StarRate, Wallpaper } from "@material-ui/icons";
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

  cardActions: {
    padding: 0,
    backgroundColor: theme.palette.warning.light,
    justifyContent: "space-between",
    "& button, & a": {
      color: theme.palette.warning.contrastText,
      fontSize: "1rem",
      textDecoration: "none",
    },
  },
}));

const RecipeItem = ({ item, name }) => {
  const classes = useStyles();
  const [id, title] = [`id${name}`, `str${name}`];
  const thumb =
    "Ingredient" === name
      ? `https://www.themealdb.com/images/ingredients/${item[title]}-Small.png`
      : `str${name}Thumb`;

  return (
    <Grid item xs={6} sm={4} md={3} xl={2}>
      <Card className={classes.card}>
        {item["strCategory"] && item["strArea"] && (
          <div className={classes.categoryAreaBar}>
            <Chip
              // onClick={(e) =>
              //   categoryFilter(e, false, recipe.strCategory, history)
              // }
              component={RouterLink}
              to={`/category/${item["strCategory"]}`}
              size="small"
              label={item["strCategory"]}
              color="secondary"
            />
            <Chip
              // onClick={(e) => onAreaFilter(e, recipe.strArea, history)}
              component={RouterLink}
              to={`/area/${item["strArea"]}`}
              value={item["strArea"]}
              size="small"
              label={item["strArea"]}
              color="primary"
            />
          </div>
        )}

        <CardMedia
          className={classes.media}
          image={"Ingredient" === name ? thumb : item[thumb]}
          title={item[title]}
        />
        {"Meal" !== name ? (
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
              aria-label={`Visit ${item[title]}`}
              // onClick={() => clickCategory("", item[strCategory], history)}
            >
              <Typography noWrap>{item[title]}</Typography>
            </IconButton>
            <IconButton
              aria-label="show more"
              // onClick={() => handleDialogOpen(idCategory)}
            >
              <Wallpaper />
            </IconButton>
          </CardActions>
        ) : (
          <CardContent className={classes.strMeal}>
            <Button
              fullWidth
              className={classes.titleButton}
              startIcon={<Pageview />}
              size="large"
              component={RouterLink}
              to={`/recipe/${item[id]}`}
              title={item[title]}
              // onClick={() => history.push(`/meal/${recipe.idMeal}`)}
            >
              <Typography component="span" noWrap>
                {item[title]}
              </Typography>
            </Button>
          </CardContent>
        )}
      </Card>
    </Grid>
  );
};

export default RecipeItem;
