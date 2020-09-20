import { createMuiTheme } from "@material-ui/core";
import React from "react";
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

  return (
    <ContextSetting.Provider value={{ nightMode, setNightMode, theme }}>
      {children}
    </ContextSetting.Provider>
  );
};

export default SettingProvider;
