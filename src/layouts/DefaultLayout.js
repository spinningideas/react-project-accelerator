import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { reloadWindow } from "utils";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
// Routes
import PageRouter from "routing/PageRouter";
// services
import AuthService from "services/AuthService";
import AnalyticsService from "services/AnalyticsService";
// Components
import Navigation from "components/Application/Navigation";

const styles = {
  root: {
    flexGrow: 1,
    display: "flex",
  },
  appbar: {
    height: "65px",
    width: "100%",
    bgcolor: "background.default",
  },
  content: {
    flexGrow: 1,
    padding: 2,
    bgcolor: "background.default",
  },
};

function DefaultLayout() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const location = useLocation();

  const selectedMenuItemKey = location.pathname;

  const authService = AuthService();
  const analyticsService = AnalyticsService();

  useEffect(() => {
    let userHasSignedIn = authService.userHasSignedIn();
    setUserSignedIn(userHasSignedIn);
  }, [authService, userSignedIn]);

  useEffect(() => {
    // Route Change Detection
    if (location) {
      analyticsService.trackPageView(location.pathname);
    }
  }, [location]);

  const handleSignIn = () => {
    authService.signIn();
    reloadWindow();
  };

  const handleSignOut = () => {
    authService.signOut();
    reloadWindow();
  };

  return (
    <>
      <CssBaseline />
      <Grid container sx={styles.root} spacing={0} id="application-container">
        <Grid item sx={styles.appbar} xs={12}>
          <Navigation
            selectedMenuItemKey={selectedMenuItemKey}
            userSignedIn={userSignedIn}
            handleSignIn={handleSignIn}
            handleSignOut={handleSignOut}
          />
        </Grid>
        <Grid item sx={styles.content} xs={12}>
          {PageRouter}
        </Grid>
      </Grid>
    </>
  );
}

export default DefaultLayout;
