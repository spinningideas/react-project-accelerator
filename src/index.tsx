// React
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// Theme - material-ui
import { ThemeProvider } from "@mui/material/styles";
// App
import { theme } from "styling/theming";
import "styling/Application.scss";
import Application from "Application";
import ErrorHandler from "components/ErrorHandler";
import { APPBASEPATH } from "utils";

const AppShell = () => (
  <ErrorHandler>
    <ThemeProvider theme={theme}>
      <Router basename={APPBASEPATH}>
        <Application />
      </Router>
    </ThemeProvider>
  </ErrorHandler>
);

const containerAppShell = document.getElementById("appshell");
const appShellRoot = createRoot(containerAppShell);
appShellRoot.render(<AppShell />);
