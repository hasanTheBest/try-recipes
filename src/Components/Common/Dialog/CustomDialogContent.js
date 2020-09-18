import React, { useEffect, useState } from "react";
import { DialogContentText, DialogTitle, Paper } from "@material-ui/core";
// image
import Image from "material-ui-image";

const CustomDialogContent = ({ description, title, thumbnail }) => {
  // State
  const [showImage, setShowImage] = useState(false);
  // EFFECT
  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 500);
  }, []);

  return (
    <>
      <Paper>
        <Image
          src={showImage ? thumbnail : ""}
          aspectRatio={16 / 9}
          title={title}
        />
      </Paper>
      <DialogTitle>{title}</DialogTitle>
      <DialogContentText>{description}</DialogContentText>
    </>
  );
};

export default CustomDialogContent;
