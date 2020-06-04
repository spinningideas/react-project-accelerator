import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
// material-ui
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// services
import AuthService from 'services/AuthService';
import LocalizationService from 'services/LocalizationService';
import GeoService from 'services/GeoService';
// components
import Modal from 'components/Shared/Modal';
import Notifications from 'components/Shared/Notifications';
import GetStartedMessage from 'components/Home/GetStartedMessage';

function Home() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [locData, setLocData] = useState({});
  const [modalDemoState, setModalDemoState] = useState(false);
  const [weatherState, setWeatherState] = useState('');

  const authService = AuthService();
  const localizationService = LocalizationService();
  const geoService = GeoService();

  const notificationsRef = useRef(null);

  useEffect(() => {
    let userHasSignedIn = authService.userHasSignedIn();
    setUserSignedIn(userHasSignedIn);

    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          'welcome',
          'homepagewelcome',
          'getstartedmessage',
          'notifications',
          'notificationsdescription',
          'modals',
          'modalsdescription',
          'error',
          'success',
          'view',
          'close',
          'authenticatedcontent',
          'authenticatedcontentdescription',
          'weathertitle',
          'weatherdescription'
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, [authService, localizationService]);

  const showNotification = (message, type) => {
    notificationsRef.current.show(message, type);
  };

  const showWeatherUsingHttpClient = () => {
    geoService.getCurrentLocationWeather().then((weatherResponse) => {
      if (weatherResponse) {
        setWeatherState(weatherResponse.message);
      } else {
        setWeatherState('');
      }
    });
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} className="contentpanel-site">
        <h2>{locData.homepagewelcome}</h2>

        <Grid container spacing={0}>
          <Grid item xs={12}>
            <GetStartedMessage locData={locData} displayGetStarted={true} />
          </Grid>
          <Grid item xs={12} className="pt-1">
            {userSignedIn && (
              <Grid container>
                <Grid item xs={12} className="pt-1">
                  <Card>
                    <CardContent>
                      <h4 className="card-title">{locData.authenticatedcontent}</h4>
                      <p>{locData.authenticatedcontentdescription}</p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}

            <Grid container>
              <Grid item xs={12} className="pt-1 pb-1">
                <Card>
                  <CardContent>
                    <h4 className="card-title">{locData.notifications}</h4>
                    <p>{locData.notificationsdescription}</p>
                  </CardContent>
                  <CardActions>
                    <Button
                      className="ml-2"
                      color="secondary"
                      onClick={() => showNotification(locData.success, 'success')}
                    >
                      {locData.success}
                    </Button>
                    <Button className="ml-2" color="secondary" onClick={() => showNotification(locData.error, 'error')}>
                      {locData.error}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} className="pt-1">
                <Card className="card white-bg-color bl-1 bb-1">
                  <CardContent>
                    <h4 className="card-title">{locData.modals}</h4>
                    <p>{locData.modalsdescription}</p>
                  </CardContent>
                  <CardActions>
                    <Button className="ml-2" color="secondary" onClick={() => setModalDemoState(true)}>
                      {locData.view}
                    </Button>
                  </CardActions>
                </Card>

                <Modal isOpen={modalDemoState} onClose={() => setModalDemoState(false)}>
                  <h1>{locData.welcome}</h1>
                  <p>{locData.homepagewelcome}</p>
                  <Button color="secondary" onClick={() => setModalDemoState(false)}>
                    {locData.close}
                  </Button>
                </Modal>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} className="pt-1">
                <Card>
                  <CardContent>
                    <h4 className="card-title">{locData.weatherdescription}</h4>
                    <Button className="mt-3" color="secondary" onClick={showWeatherUsingHttpClient}>
                      {locData.weathertitle}
                    </Button>
                    <p className="mt-2">{weatherState}</p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Notifications ref={notificationsRef} />
    </Grid>
  );
}

export default withRouter(Home);
