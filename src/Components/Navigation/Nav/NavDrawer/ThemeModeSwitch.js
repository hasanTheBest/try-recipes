import React, { memo, useContext } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import { ContextSetting } from "../../../../Context/ContextSetting";

const ThemeModeSwitch = () => {
  const { nightMode, setNightMode, toggleDrawer } = useContext(ContextSetting);
  const handleChangeNightMode = () => {
    setNightMode(!nightMode);
    toggleDrawer(false);
  };

  return (
    <FormControlLabel
      // onClick={toggleDrawer("left", false)}
      value="dark"
      control={
        <Switch
          color="secondary"
          checked={nightMode}
          onChange={handleChangeNightMode}
        />
      }
      label="Theme Dark"
      labelPlacement="start"
    />
  );
};

export default memo(ThemeModeSwitch);
