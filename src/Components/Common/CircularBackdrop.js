import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

const CircularBackdrop = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress color="secondary" />
    </Backdrop>
  );
};

export default CircularBackdrop;
