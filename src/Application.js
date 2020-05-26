import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
// Routes
import routes from 'routes';
// Services
import AuthService from 'services/AuthService';
// Components
import Navigation from 'components/Application/Navigation';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  appbar: {
    height: '65px',
    width: '100%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
});

function Application(props) {
  const [userSignedIn, setUserSignedIn] = useState(false);

  const { classes } = props;

  const authService = AuthService();
  const refLocation = useRef(props.location);

  useEffect(() => {
    let userHasSignedIn = authService.userHasSignedIn();
    setUserSignedIn(userHasSignedIn);
  }, [userSignedIn]);

  useEffect(() => {
    // Route Change Detection
    if (
      refLocation &&
      refLocation.current &&
      props.location &&
      props.location.pathname &&
      refLocation.current !== props.location.pathname
    ) {
      refLocation.current = props.location.pathname;
      // Can track page views here via TBD servvice: analyticsService.trackPageView(props.location.pathname);
      window.scrollTo(0, 0);
    }
  }, [props.location.key]);

  const handleSignIn = () => {
    authService.signIn();
    if (window && window.location) {
      window.location.reload(true);
    }
  };

  const handleSignOut = () => {
    authService.signOut();
    if (window && window.location) {
      window.location.reload(true);
    }
  };

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item className={classes.appbar} xs={12}>
        <Navigation userSignedIn={userSignedIn} handleSignIn={handleSignIn} handleSignOut={handleSignOut} />
      </Grid>
      <Grid item className={classes.content} xs={12}>
        {routes}
      </Grid>
    </Grid>
  );
}

export default withRouter(withStyles(styles, { withTheme: true })(Application));
