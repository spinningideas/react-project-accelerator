import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
// material-ui Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// material-ui Icons
import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import Email from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings"; // services
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
  menuButton: {
    paddingRight: 1,
  },
};

const Navigation = ({
  selectedMenuItemKey,
  userSignedIn = false,
  handleSignIn,
  handleSignOut,
}: {
  selectedMenuItemKey?: string;
  userSignedIn: boolean;
  handleSignIn: () => void;
  handleSignOut: () => void;
}) => {
  const [locData, setLocData] = useState<Record<string, string>>({});
  const [openNavigation, setOpenNavigation] = useState(false);
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);

  const localizationService = useMemo(LocalizationService, []);
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
  }, [localizationService]);

  const toggleDrawerOpen = () => {
    setOpenNavigation(!openNavigation);
  };

  const closeDrawer = () => {
    setOpenNavigation(false);
  };

  const handleSignInClick = () => {
    setSignInDialogOpen(false);
    handleSignIn();
  };

  const handleSignOutClick = () => {
    handleSignOut();
  };

  const menuItemIsSelected = (menuItemKey, locationPath) => {
    if (menuItemKey && locationPath) {
      return menuItemKey === locationPath;
    }
    return false;
  };

  return (
    <Box sx={styles.root}>
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
          <LanguageSelection
            setUserLocale={(selectedLocale: string) => {
              localizationService.setUserLocale(selectedLocale);
            }}
          />
          <AuthButton
            locData={locData}
            userSignedIn={userSignedIn}
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
        PaperProps={{
          sx: {
            width: drawerWidth,
          },
        }}
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
          <ListItemButton
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/"
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={locData.home} />
          </ListItemButton>
          <ListItemButton
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/contact"
          >
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={locData.contact} />
          </ListItemButton>
          <ListItemButton
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/settings"
            selected={menuItemIsSelected(selectedMenuItemKey, "/settings")}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={locData.settings} />
          </ListItemButton>
          <ListItemButton
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/about"
          >
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary={locData.about} />
          </ListItemButton>
        </List>
      </Drawer>
      <AuthDialog
        locData={locData}
        open={signInDialogOpen}
        handleSignIn={handleSignInClick}
        handleSignInCancel={() => setSignInDialogOpen(false)}
      />
    </Box>
  );
};

export default React.memo(Navigation);
