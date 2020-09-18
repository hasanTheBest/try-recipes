import React from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";

// Components
import ImageFullscreen from "./RecipeThumbnail/ImageFullscreen";
import YoutubeFullscreen from "./RecipeThumbnail/YoutubeFullscreen";

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

const RecipeThumbnail = ({ meal: { strMeal, strMealThumb, strYoutube } }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card1}>
        <CardMedia
          className={classes.mealThumb}
          title={strMeal}
          alt={strMeal}
          image={strMealThumb}
        />
        {/* YouTube and Full screen Button */}
        <div className={classes.fullscreenIconBar}>
          <YoutubeFullscreen title={strMeal} thumb={strYoutube} />
          <ImageFullscreen title={strMeal} thumb={strMealThumb} />
        </div>
      </Card>
    </>
  );
};

export default RecipeThumbnail;
