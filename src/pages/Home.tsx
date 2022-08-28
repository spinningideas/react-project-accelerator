import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// material-ui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// services
import AuthService from "services/AuthService";
import LocalizationService from "services/LocalizationService";
import GeoService from "services/GeoService";
// components
import ModalDialog from "components/Shared/ModalDialog";
import Notifications from "components/Shared/Notifications";
import LoadingIndicator from "components/Shared/LoadingIndicator";
import GetStartedMessage from "components/Home/GetStartedMessage";

function Home() {
  const [userSignedIn, setUserSignedIn] = useState<boolean>(false);
  const [locData, setLocData] = useState<Record<string, string>>({});
  const [modalDemoState, setModalDemoState] = useState<boolean>(false);
  const [userIpAddressState, setUserIpAddressState] = useState<string>("");
  const [isLoadingState, setIsLoadingState] = useState<boolean>(false);

  const authService = AuthService();
  const localizationService = LocalizationService();
  const geoService = GeoService();

  const notificationsRef = React.forwardRef<typeof Notifications>();

  useEffect(() => {
    let userHasSignedIn = authService.userHasSignedIn();
    setUserSignedIn(userHasSignedIn);
  }, []);

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          "welcome",
          "homepagewelcome",
          "aboutdescription",
          "getstartedmessage",
          "notifications",
          "notificationsdescription",
          "modals",
          "modalsdescription",
          "error",
          "success",
          "view",
          "close",
          "authenticatedcontent",
          "authenticatedcontentdescription",
          "services",
          "serviceexampletitle",
          "serviceexampledescription",
          "forms",
          "formsexample",
          "formsexampledescription",
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  const showNotification = (message, type) => {
    notificationsRef.current.show(message, type);
  };

  const showIpAddressUsingHttpClient = async () => {
    setUserIpAddressState("");
    setIsLoadingState(true);
    await geoService.getCurrentIPAddress().then((response) => {
      if (response && response.ip) {
        setUserIpAddressState(response.message);
        setIsLoadingState(false);
      } else {
        setUserIpAddressState("Error occurred");
        setIsLoadingState(false);
      }
    });
  };

  const IpAddressDisplay = () => {
    if (!isLoadingState && userIpAddressState.length > 0) {
      return <p className="mt-2">{userIpAddressState}</p>;
    } else {
      return <LoadingIndicator loading={isLoadingState} size={20} />;
    }
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
                      <h4 className="card-title">
                        {locData.authenticatedcontent}
                      </h4>
                      <p>{locData.authenticatedcontentdescription}</p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}

            <Grid container>
              <Grid item xs={12} className="pt-1 pb-1">
                <Card className="card white-bg-color bl-1 bb-1">
                  <CardContent>
                    <h4 className="card-title">{locData.notifications}</h4>
                    <p>{locData.notificationsdescription}</p>
                  </CardContent>
                  <CardActions>
                    <Button
                      className="ml-2"
                      color="secondary"
                      variant="contained"
                      onClick={() =>
                        showNotification(locData.success, "success")
                      }
                    >
                      {locData.success}
                    </Button>
                    <Button
                      className="ml-2"
                      color="secondary"
                      variant="contained"
                      onClick={() => showNotification(locData.error, "error")}
                    >
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
                    <Button
                      className="ml-2"
                      color="secondary"
                      variant="contained"
                      onClick={() => setModalDemoState(true)}
                    >
                      {locData.view}
                    </Button>
                  </CardActions>
                </Card>

                <ModalDialog
                  title={locData.welcome}
                  open={modalDemoState}
                  onClose={() => setModalDemoState(false)}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                    <Box sx={{ p: 2 }}>{locData.homepagewelcome}</Box>
                    <Box sx={{ p: 2 }}>{locData.aboutdescription}</Box>
                    <Box sx={{ p: 2 }}>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => setModalDemoState(false)}
                      >
                        {locData.close}
                      </Button>
                    </Box>
                  </Box>
                </ModalDialog>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} className="pt-1">
                <Card className="card white-bg-color bl-1 bb-1">
                  <CardContent>
                    <h4 className="card-title">{locData.services}</h4>
                    <p>{locData.serviceexampledescription}</p>
                    <Button
                      className="mt-3"
                      color="secondary"
                      variant="contained"
                      onClick={showIpAddressUsingHttpClient}
                    >
                      {locData.serviceexampletitle}
                    </Button>
                    <IpAddressDisplay />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} className="pt-1">
                <Card>
                  <CardContent>
                    <h4 className="card-title">{locData.forms}</h4>
                    <p>{locData.formsexampledescription}</p>
                    <Button
                      className="mt-3"
                      color="secondary"
                      variant="contained"
                      component={Link}
                      to="/contact/testnameparam"
                    >
                      {locData.formsexample}
                    </Button>
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

export default Home;
