import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Visibility, YouTube } from "@material-ui/icons";

// Components
import CustomDialog from "../../../Common/Dialog/CustomDialog";

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

const YoutubeFullscreen = ({ title, thumb }) => {
  console.log("YoutubeFullscreen -> thumb", thumb);
  const classes = useStyles();

  const [openYT, setOpenYT] = useState(false);

  const handleOpenYT = () => setOpenYT(true);
  const handleCloseYT = () => setOpenYT(false);

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<Visibility />}
        color="secondary"
        size="small"
        endIcon={<YouTube />}
        onClick={handleOpenYT}
      >
        on
      </Button>

      <CustomDialog title={title} open={openYT} handleClose={handleCloseYT}>
        <div className={classes.videoWrapper}>
          <iframe
            title={title}
            type="text/html"
            src={thumb ? thumb.replace("watch?v=", "embed/") : thumb}
          />
        </div>
      </CustomDialog>
    </>
  );
};

export default YoutubeFullscreen;
