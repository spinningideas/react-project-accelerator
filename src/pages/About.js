import React, { useEffect, useState } from "react";
// material-ui
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// services
import LocalizationService from "services/LocalizationService";

export default function About() {
  const [locData, setLocData] = useState({});

  const localizationService = LocalizationService();

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();

      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          "about",
          "aboutdescription",
          "technology",
          "technologydescription",
          "reactjs",
          "reactjsdescription",
          "materialui",
          "materialuidescription",
          "createreactapp",
          "createreactappdescription",
          "moreinfo",
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} className="contentpanel-site">
        <h3>{locData.about}</h3>

        <p>{locData.aboutdescription}</p>

        <h4>{locData.technology}</h4>

        <p>{locData.technologydescription}</p>

        <Grid container spacing={0}>
          <Grid item xs={12} md={3} lg={3} xl={3}>
            <Card className="card white-bg-color bl-1 bb-1">
              <CardContent>
                <h4 className="card-title">{locData.reactjs}</h4>
                <p className="card-text">{locData.reactjsdescription}</p>
              </CardContent>
              <CardActions>
                <Button
                  className="ml-2"
                  color="secondary"
                  variant="contained"
                  href="https://facebook.github.io/react/index.html"
                  target="_blank"
                  rel="noopener"
                >
                  {locData.moreinfo}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={3} lg={3} xl={3}>
            <Card className="card white-bg-color bl-1 bb-1">
              <CardContent>
                <h4 className="card-title">{locData.materialui}</h4>
                <p className="card-text">{locData.materialuidescription}</p>
              </CardContent>
              <CardActions>
                <Button
                  className="ml-2"
                  color="secondary"
                  variant="contained"
                  href="https://material-ui.com/"
                  target="_blank"
                  rel="noopener"
                >
                  {locData.moreinfo}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={3} lg={3} xl={3}>
            <Card className="card white-bg-color bl-1 bb-1">
              <CardContent>
                <h4 className="card-title">{locData.createreactapp}</h4>
                <p className="card-text">{locData.createreactappdescription}</p>
              </CardContent>
              <CardActions>
                <Button
                  className="ml-2"
                  color="secondary"
                  variant="contained"
                  href="https://create-react-app.dev/"
                  target="_blank"
                  rel="noopener"
                >
                  {locData.moreinfo}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
