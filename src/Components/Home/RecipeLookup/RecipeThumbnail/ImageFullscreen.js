import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import { Fullscreen } from "@material-ui/icons";

import Image from "material-ui-image";
import CustomDialog from "../../../Common/Dialog/CustomDialog";

const ImageFullscreen = ({ title, thumb }) => {
  const [openFullscreen, setFullscreen] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 500);
  }, []);

  const handleOpenFullscreen = () => setFullscreen(true);
  const handleCloseFullscreen = () => setFullscreen(false);

  return (
    <>
      <IconButton aria-label="Full screen" onClick={handleOpenFullscreen}>
        <Fullscreen />
      </IconButton>

      <CustomDialog
        title={title}
        open={openFullscreen}
        handleClose={handleCloseFullscreen}
      >
        <Image src={showImage ? thumb : ""} title={title} />
      </CustomDialog>
    </>
  );
};

export default ImageFullscreen;
