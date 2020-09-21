import React, { memo, useContext } from "react";
import { Box, Button } from "@material-ui/core";
import { Brightness4 } from "@material-ui/icons";
import { ContextSetting } from "../../../Context/ContextSetting";

const ButtonNightMode = () => {
  const { nightMode, setNightMode } = useContext(ContextSetting);
  // Theme Switching
  const handleChangeNightMode = () => {
    setNightMode(!nightMode);
  };
  return (
    <Box mr={1}>
      <Button
        aria-label="Night mode toggle"
        onClick={handleChangeNightMode}
        color="primary"
        variant="contained"
      >
        {<Brightness4 />}
      </Button>
    </Box>
  );
};

export default memo(ButtonNightMode);
