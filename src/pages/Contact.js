import React, { useEffect, useState, useRef } from "react";
// forms
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
// material-ui
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// shared components
import Notifications from "components/Shared/Notifications";
// services
import LocalizationService from "services/LocalizationService";

export default function Contact(props) {
  const [locData, setLocData] = useState({});
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name:
      props.match && props.match.params && props.match.params.name
        ? props.match.params.name
        : "",
    email: "",
    message: "",
  });

  const localizationService = LocalizationService();

  const notificationsRef = useRef(null);

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();

      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          "contact",
          "contactdescription",
          "moreinfo",
          "save",
          "name",
          "email",
          "message",
          "messagedescription",
          "required",
          "success",
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  const styles = {
    formField: {
      display: "flex",
      flexDirection: "column",
      margin: 1,
      width: 500,
    },
  };

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
                  errors.name = locData.required;
                }
                if (!values.email) {
                  errors.email = locData.required;
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.message) {
                  errors.message = locData.required;
                }
                return errors;
              }}
              onSubmit={(values) => {
                setFormIsSubmitting(false);
                showNotification(locData.success, "success");
                setFormData({
                  name: values.name,
                  email: values.email,
                  message: values.message,
                });
              }}
            >
              {({ submitForm }) => (
                <Form>
                  <Card>
                    <CardContent sx={{ p: 0 }}>
                      <Field
                        sx={styles.formField}
                        component={TextField}
                        variant="standard"
                        name="name"
                        type="text"
                        label={locData.name}
                        required
                      />

                      <Field
                        sx={styles.formField}
                        component={TextField}
                        variant="standard"
                        name="email"
                        type="email"
                        label={locData.email}
                        required
                      />

                      <Field
                        sx={styles.formField}
                        type="text"
                        component={TextField}
                        variant="standard"
                        name="message"
                        label={locData.message}
                        required
                        multiline
                        rows={4}
                      />
                    </CardContent>
                    <CardActions>
                      <Button
                        className="ml-2"
                        color="primary"
                        variant="contained"
                        disabled={formIsSubmitting}
                        onClick={submitForm}
                      >
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
