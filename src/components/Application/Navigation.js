import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// material-ui Components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// material-ui Icons
import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import Email from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";// services
import LocalizationService from "services/LocalizationService";
// Components
import AppTitle from "components/Application/AppTitle";
import AuthButton from "components/Application/AuthButton";
import AuthDialog from "components/Application/AuthDialog";
import LanguageSelection from "components/Application/LanguageSelection";

const drawerWidth = 240;

const styles = {
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: 10001,
    bgcolor: "background.default",
  },
  appTitle: {
    flexGrow: 1,
  },
  sideMenuDrawer: {
    top: "65px",
    width: drawerWidth,
    height: "100%",
    flexShrink: 0,
  },
  sideMenuDrawerPaper: {
    width: drawerWidth,
  },
  sideMenuList: {
    padding: 1,
    width: drawerWidth + "px",
  },
  sideMenuListItem: {
    paddingLeft: 1,
  },
};

function Navigation(props) {
  const [locData, setLocData] = useState({});
  const [openNavigation, setOpenNavigation] = useState(false);
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);

  const localizationService = LocalizationService();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          "apptitle",
          "signin",
          "signindescription",
          "signout",
          "home",
          "contact",
          "about",
          "cancel",
          "settings",
        ],
        locCode
      );

      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  const toggleDrawerOpen = () => {
    setOpenNavigation(!openNavigation);
  };

  const closeDrawer = () => {
    setOpenNavigation(false);
  };

  const handleSignInClick = () => {
    setSignInDialogOpen(false);
    props.handleSignIn();
  };

  const handleSignOutClick = () => {
    props.handleSignOut();
  };

  const menuItemIsSelected = (menuItemKey, locationPath) => {
    if (menuItemKey && locationPath) {
      return menuItemKey === locationPath;
    }
    return false;
  };

  return (
    <div sx={styles.root}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => toggleDrawerOpen()}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <AppTitle locData={locData} />
          <Button
            onClick={() => {
              closeDrawer();
              navigate("/settings");
            }}
            aria-label="settings"
            color="secondary"
            sx={{ marginRight: 1 }}
          >
            <SettingsIcon />
          </Button>
          <LanguageSelection localizationService={localizationService} />
          <AuthButton
            locData={locData}
            userSignedIn={props.userSignedIn}
            handleSignOutClick={handleSignOutClick}
            setSignInDialogOpen={setSignInDialogOpen}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        variant="persistent"
        color="primary"
        open={openNavigation}
        sx={styles.sideMenuDrawer}
        styles={{ paper: styles.sideMenuDrawerPaper }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={closeDrawer}
            sx={styles.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <List sx={styles.sideMenuList}>
          <ListItem
            button
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/"
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={locData.home} />
          </ListItem>
          <ListItem
            button
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/contact"
          >
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={locData.contact} />
          </ListItem>
          <ListItem
            button
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/settings"
            selected={menuItemIsSelected(
              props.selectedMenuItemKey,
              "/settings"
            )}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={locData.settings} />
          </ListItem>
          <ListItem
            button
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/about"
          >
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary={locData.about} />
          </ListItem>
        </List>
      </Drawer>
      <AuthDialog
        locData={locData}
        open={signInDialogOpen}
        handleSignIn={handleSignInClick}
        handleSignInCancel={() => setSignInDialogOpen(false)}
      />
    </div>
  );
}

export default Navigation;
