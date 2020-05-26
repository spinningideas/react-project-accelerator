import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// material-ui Components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// material-ui Icons
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import Email from '@material-ui/icons/Email';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import MenuIcon from '@material-ui/icons/Menu';
// Services
import LocalizationService from 'services/LocalizationService';
// Components
import SignInDialog from 'components/Application/SignInDialog';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appTitle: {
    flexGrow: 1
  },
  sideMenuDrawer: {
    top: '65px',
    width: drawerWidth,
    height: '100%',
    flexShrink: 0
  },
  sideMenuDrawerPaper: {
    width: drawerWidth
  },
  sideMenuList: {
    padding: 10,
    width: drawerWidth + 'px'
  },
  sideMenuListItem: {
    paddingLeft: 10
  }
}));

export default function Navigation(props) {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [locData, setLocData] = useState({});
  const [anchorEl, setAnchorEl] = useState(undefined);
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);

  const classes = useStyles();

  const localizationService = LocalizationService();

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        ['apptitle', 'signin', 'signout', 'home', 'contact', 'about'],
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

  const languageSelectionOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const languageSelectionClose = () => {
    setAnchorEl(null);
  };

  const languageSelectionMakeChoice = (locale) => {
    localizationService.setUserLocale(locale);
    setAnchorEl(null);
    window.location.reload();
  };

  const handleSignInClick = () => {
    setSignInDialogOpen(false);
    props.handleSignIn();
  };

  const handleSignOutClick = () => {
    props.handleSignOut();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => toggleDrawerOpen()}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.appTitle}>
            {locData.apptitle}
          </Typography>
          <Button aria-controls="language-menu" aria-haspopup="true" onClick={languageSelectionOpen}>
            Language
          </Button>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => languageSelectionClose}
          >
            <MenuItem onClick={() => languageSelectionMakeChoice('enUS')}>English</MenuItem>
            <MenuItem onClick={() => languageSelectionMakeChoice('zhCN')}>Chinese</MenuItem>
            <MenuItem onClick={() => languageSelectionMakeChoice('esES')}>Spanish</MenuItem>
          </Menu>
          {props.userSignedIn && (
            <Button color="inherit" onClick={handleSignOutClick}>
              {locData.signout}
            </Button>
          )}
          {!props.userSignedIn && (
            <Button color="inherit" onClick={() => setSignInDialogOpen(true)}>
              {locData.signin}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        variant="persistent"
        color="primary"
        open={openNavigation}
        className={classes.sideMenuDrawer}
        classes={{ paper: classes.sideMenuDrawerPaper }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={closeDrawer}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <List className={classes.sideMenuList}>
          <ListItem button className={classes.sideMenuListItem} onClick={closeDrawer} component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={locData.home} />
          </ListItem>
          <ListItem
            button
            className={classes.sideMenuListItem}
            onClick={() => closeDrawer}
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
            className={classes.sideMenuListItem}
            onClick={() => closeDrawer}
            component={Link}
            to="/about"
          >
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary={locData.about} />
          </ListItem>
          {props.userSignedIn && (
            <ListItem
              button
              disableGutters
              className={classes.sideMenuListItem}
              onClick={() => {
                handleSignOutClick();
              }}
            >
              <ListItemIcon>
                <MeetingRoom />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          )}
        </List>
      </Drawer>
      <SignInDialog
        open={signInDialogOpen}
        handleSignIn={handleSignInClick}
        handleSignInCancel={() => setSignInDialogOpen(false)}
      />
    </div>
  );
}
