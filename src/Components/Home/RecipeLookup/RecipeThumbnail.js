import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  CardMedia,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Fullscreen, Visibility, YouTube } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  mealThumb: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card1: {
    position: "relative",
  },
  fullscreenIconBar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    zIndex: 50,
  },
}));

const RecipeThumbnail = ({ meal: { strMeal, strMealThumb } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card1}>
      <CardMedia
        className={classes.mealThumb}
        title={strMeal}
        alt={strMeal}
        image={strMealThumb}
      />
      {/* YouTube and Full screen Button */}
      <div className={classes.fullscreenIconBar}>
        <Button
          variant="outlined"
          startIcon={<Visibility />}
          color="secondary"
          size="small"
          component={RouterLink}
          endIcon={<YouTube />}
          // onClick={handleOpenYT}
        >
          on
        </Button>
        <IconButton
          aria-label="Full screen" /* onClick={handleOpenFullscreen} */
        >
          <Fullscreen />
        </IconButton>
      </div>
    </Card>
  );
};

export default RecipeThumbnail;
