import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SettingProvider from "./Context/ContextSetting";

ReactDOM.render(
  <React.StrictMode>
    <SettingProvider>
      <App />
    </SettingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
