import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const DialogRecipe = ({ open, handleClose, title, children }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={handleClose}
      aria-labelledby={title}
    >
      {Boolean(title) && <DialogTitle id={title}>{title} </DialogTitle>}
      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="secondary" variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogRecipe;
