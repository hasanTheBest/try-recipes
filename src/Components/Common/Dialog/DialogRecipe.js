import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";

import Image from "material-ui-image";

const useStyles = makeStyles((theme) => ({
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    height: 0,
    "& iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
}));

const DialogRecipe = ({
  open,
  handleClose,
  strMeal,
  strYoutube,
  strMealThumb,
  name,
}) => {
  const classes = useStyles();
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 500);
  }, []);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={handleClose}
      aria-labelledby={strMeal}
    >
      <DialogTitle id={strMeal}>{strMeal} </DialogTitle>
      {"image" === name ? (
        <DialogContent>
          <Image src={showImage ? strMealThumb : ""} title={strMeal} />
        </DialogContent>
      ) : (
        <DialogContent>
          <div className={classes.videoWrapper}>
            <iframe
              title={strMeal}
              type="text/html"
              src={
                strYoutube
                  ? strYoutube.replace("watch?v=", "embed/")
                  : strYoutube
              }
            />
          </div>
        </DialogContent>
      )}

      <DialogActions>
        <Button onClick={handleClose} color="secondary" variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogRecipe;
