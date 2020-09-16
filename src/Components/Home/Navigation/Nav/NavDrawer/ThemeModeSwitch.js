import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

const ThemeModeSwitch = () => {
  return (
    <FormControlLabel
      // onClick={toggleDrawer("left", false)}
      value="dark"
      control={
        <Switch
          color="primary"
          // checked={Boolean(Number(nightMode))}
          // onChange={handleChangeSwitch}
        />
      }
      label="Theme Dark"
      labelPlacement="start"
    />
  );
};

export default ThemeModeSwitch;
