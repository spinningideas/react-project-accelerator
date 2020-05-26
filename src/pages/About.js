import React, { useEffect, useState } from 'react';
// material-ui
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// Services
import LocalizationService from 'services/LocalizationService';

export default function About() {
  const [locData, setLocData] = useState({});

  const localizationService = LocalizationService();

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        ['homepagewelcome', 'getstartedmessage'],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} className="contentpanel-site">
        <h3>About</h3>

        <h4>Goals</h4>

        <p>
          This app was created to provide an example reference implementation to bootstrap and accelerate react project
          and to explore using various client side libraries to compose a rich user experience.
        </p>

        <h4>Technology</h4>

        <p>This application was built using the following technologies:</p>

        <Grid container spacing={0}>
          <Grid item xs={12} md={3} lg={3} xl={3} className="card-row-column">
            <Card className="card white-bg-color bl-1 bb-1">
              <CardContent>
                <h4 className="card-title">React JS</h4>
                <p className="card-text">
                  React makes it painless to create interactive UIs using encapsulated components that manage their own
                  state.
                </p>
              </CardContent>
              <CardActions>
                <Button
                  className="ml-2"
                  color="secondary"
                  href="https://facebook.github.io/react/index.html"
                  target="_blank"
                  rel="noopener"
                >
                  More Info
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} lg={3} xl={3} className="card-row-column">
            <Card className="card white-bg-color bl-1 bb-1">
              <CardContent>
                <h4 className="card-title">Material-UI</h4>
                <p className="card-text">
                  Visually appealing React components that implement Google's Material Design along with layout and
                  theming support.
                </p>
              </CardContent>
              <CardActions>
                <Button
                  className="ml-2"
                  color="secondary"
                  href="https://material-ui.com/"
                  target="_blank"
                  rel="noopener"
                >
                  More Info
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} lg={3} xl={3} className="card-row-column">
            <Card className="card white-bg-color bl-1 bb-1">
              <CardContent>
                <h4 className="card-title">Create React App</h4>
                <p className="card-text">
                  Quickly get started building React Apps using toolset that allows you to focus on development.
                </p>
              </CardContent>
              <CardActions>
                <Button
                  className="ml-2"
                  color="secondary"
                  href="https://create-react-app.dev/"
                  target="_blank"
                  rel="noopener"
                >
                  More Info
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
