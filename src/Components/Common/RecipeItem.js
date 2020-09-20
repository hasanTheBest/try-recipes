import React, { forwardRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Pageview, Wallpaper } from "@material-ui/icons";
import CustomDialog from "./Dialog/CustomDialog";
import CustomDialogContent from "./Dialog/CustomDialogContent";

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

const RecipeItem = ({ item, name }, ref) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const [id, title, description] = [
    `id${name}`,
    `str${name}`,
    `str${name === "Ingredient" ? "" : name}Description`,
  ];
  const thumb =
    "Ingredient" === name
      ? `https://www.themealdb.com/images/ingredients/${item[title]}-Small.png`
      : `str${name}Thumb`;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} ref={ref}>
      <Card className={classes.card}>
        {item["strCategory"] && item["strArea"] && (
          <div className={classes.categoryAreaBar}>
            <Chip
              component={RouterLink}
              to={`/category/${item["strCategory"]}`}
              size="small"
              label={item["strCategory"]}
              color="secondary"
            />
            <Chip
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
          <>
            <CardActions disableSpacing className={classes.cardActions}>
              <IconButton
                aria-label={`Visit ${item[title]}`}
                to={`/${name.toLowerCase()}/${item[title]}`}
                component={RouterLink}
              >
                <Typography noWrap>{item[title]}</Typography>
              </IconButton>
              <IconButton aria-label="show more" onClick={handleOpenDialog}>
                <Wallpaper />
              </IconButton>
            </CardActions>

            {openDialog && (
              <CustomDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                title={item[title]}
              >
                <CustomDialogContent
                  title={item[title]}
                  thumbnail={item[thumb]}
                  description={item[description]}
                />
              </CustomDialog>
            )}
          </>
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

export default forwardRef(RecipeItem);
