import React, { useEffect, useState, useRef } from 'react';
// forms
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
// material-ui
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// shared components
import Notifications from 'components/Shared/Notifications';
// Services
import LocalizationService from 'services/LocalizationService';

export default function Contact() {
  const [locData, setLocData] = useState({});
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const localizationService = LocalizationService();

  const notificationsRef = useRef(null);

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();

      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          'contact',
          'contactdescription',
          'moreinfo',
          'save',
          'name',
          'email',
          'message',
          'messagedescription',
          'success'
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  const useStyles = makeStyles((theme) => ({
    formField: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 400
      }
    }
  }));

  const classes = useStyles();

  const showNotification = (message, type) => {
    notificationsRef.current.show(message, type);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <h3>{locData.contact}</h3>
        <p>{locData.contactdescription}</p>

        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Formik
              initialValues={formData}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = 'Required';
                }
                if (!values.email) {
                  errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                  errors.email = 'Invalid email address';
                }
                if (!values.message) {
                  errors.message = 'Required';
                }
                return errors;
              }}
              onSubmit={(values) => {
                setFormIsSubmitting(false);
                showNotification(locData.success, 'success');
                setFormData({
                  name: values.name,
                  email: values.email,
                  message: values.message
                });
              }}
            >
              {({ submitForm }) => (
                <Form>
                  <Card>
                    <CardContent>
                      <div className={classes.formField}>
                        <Field component={TextField} name="name" type="text" label={locData.name} required />
                      </div>
                      <div className={classes.formField}>
                        <Field component={TextField} name="email" type="email" label={locData.email} required />
                      </div>
                      <div className={classes.formField}>
                        <Field
                          type="text"
                          component={TextField}
                          name="message"
                          label={locData.message}
                          required
                          multiline
                          rows={4}
                        />
                      </div>
                    </CardContent>
                    <CardActions>
                      <Button className="ml-2" color="secondary" disabled={formIsSubmitting} onClick={submitForm}>
                        {locData.save}
                      </Button>
                    </CardActions>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Grid>
      <Notifications ref={notificationsRef} />
    </Grid>
  );
}
