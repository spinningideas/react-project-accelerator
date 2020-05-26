import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// services
import AuthService from 'services/AuthService';
import LocalizationService from 'services/LocalizationService';
import NavigationService from 'services/NavigationService';
// components
import Modal from 'components/Modal';
import Notifications from 'components/Notifications';
import GetStartedMessage from 'components/Home/GetStartedMessage';

function Home() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [locData, setLocData] = useState({});
  const [modalDemoState, setModalDemoState] = useState(false);

  const authService = AuthService();
  const localizationService = LocalizationService();
  const navigationService = NavigationService();

  const notificationsRef = useRef(null);

  useEffect(() => {
    let userHasSignedIn = authService.userHasSignedIn();
    setUserSignedIn(userHasSignedIn);

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

  /* NOTIFICATIONS */

  const showNotification = (message, type) => {
    notificationsRef.current.show(message, type);
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
                  <Card className="card white-bg-color bl-1 bb-1">
                    <CardContent>
                      <h4 className="card-title">Authenticated Content</h4>
                      <p>Here is content displayed only if users is signed in</p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}

            <Grid container>
              <Grid item xs={12} className="pt-1 pb-1">
                <Card className="card white-bg-color bl-1 bb-1">
                  <CardContent>
                    <h4 className="card-title">Notifications</h4>
                    <p>Below are examples of notifications</p>
                  </CardContent>
                  <CardActions>
                    <Button
                      className="ml-2"
                      color="secondary"
                      onClick={() => showNotification('Success Notification Message', 'success')}
                    >
                      Success Notification
                    </Button>
                    <Button
                      className="ml-2"
                      color="secondary"
                      onClick={() => showNotification('Error Notification Message', 'error')}
                    >
                      Error Notification
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} className="pt-1">
                <Card className="card white-bg-color bl-1 bb-1">
                  <CardContent>
                    <h4 className="card-title">Modals</h4>
                    <p>Below are examples of modal dialogs</p>
                  </CardContent>
                  <CardActions>
                    <Button className="ml-2" color="secondary" onClick={() => setModalDemoState(true)}>
                      Trigger Modal
                    </Button>
                  </CardActions>
                </Card>

                <Modal isOpen={modalDemoState} onClose={() => setModalDemoState(false)}>
                  <h1>Modal title</h1>
                  <p>Example message</p>
                  <Button color="secondary" onClick={() => setModalDemoState(false)}>
                    Close
                  </Button>
                </Modal>
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
