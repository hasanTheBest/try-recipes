import { createMuiTheme } from "@material-ui/core";
import React, { useState } from "react";
import { createContext } from "react";
import useLocalStorageState from "../Hook/useLocalStorageState";

export const ContextSetting = createContext();

const SettingProvider = ({ children }) => {
  const [nightMode, setNightMode] = useLocalStorageState(
    "try-recipe:setting_nightMode",
    true
  );

  const theme = createMuiTheme({
    palette: {
      type: nightMode ? "dark" : "light",
    },
  });

  // STATE
  const [openDrawer, setOpenDrawer] = useState(false);

  // Drawer Component
  const toggleDrawer = (open, anchor = "left") => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <ContextSetting.Provider
      value={{ nightMode, setNightMode, theme, openDrawer, toggleDrawer }}
    >
      {children}
    </ContextSetting.Provider>
  );
};

export default SettingProvider;
