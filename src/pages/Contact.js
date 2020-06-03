import React, { useEffect, useState } from 'react';
// material-ui
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// Services
import LocalizationService from 'services/LocalizationService';

export default function Contact() {
  const [locData, setLocData] = useState({});

  const localizationService = LocalizationService();

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();

      const locDataLoaded = await localizationService.getLocalizedTextSet(
        ['contact', 'contactdescription', 'moreinfo', 'save', 'name', 'email', 'message', 'messagedescription'],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, [localizationService]);

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 300
      }
    }
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} className="contentpanel-site">
        <h3>{locData.contact}</h3>
        <p>{locData.contactdescription}</p>

        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Card>
              <CardContent>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    <TextField id="name" label={locData.name} required />
                  </div>
                  <div>
                    <TextField id="email" label={locData.email} required />
                  </div>
                  <div>
                    <TextField
                      id="message"
                      label={locData.message}
                      multiline
                      rows={4}
                      defaultValue={locData.messagedescription}
                    />
                  </div>
                </form>
              </CardContent>
              <CardActions>
                <Button className="ml-2" color="secondary">
                  {locData.save}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
