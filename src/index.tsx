// React
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// Theme - material-ui
import { ThemeProvider } from "@mui/material/styles";
// Notifications
import { SnackbarProvider } from "notistack";
// App
import { theme } from "styling/theming";
import "styling/Application.scss";
import Application from "Application";
import ErrorHandler from "components/ErrorHandler";
import { APPBASEPATH } from "utils";

const AppShell = () => (
  <ErrorHandler>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        dense
        maxSnack={3}
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{ containerRoot: "z-alert" }}
      >
        <Router basename={APPBASEPATH}>
          <Application />
        </Router>{" "}
      </SnackbarProvider>
    </ThemeProvider>
  </ErrorHandler>
);

const containerAppShell = document.getElementById("appshell");
const appShellRoot = createRoot(containerAppShell as Element);
appShellRoot.render(<AppShell />);
