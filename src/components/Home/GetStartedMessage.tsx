import React from "react";
import Grid from "@mui/material/Grid";

function GetStartedMessage({
  displayGetStarted,
  locData,
}: {
  displayGetStarted: boolean;
  locData: any;
}) {
  if (displayGetStarted === false) {
    return <></>;
  }
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <p id="get-started-message">
          {locData.getstartedmessage}
        </p>
      </Grid>
    </Grid>
  );
}

export default GetStartedMessage;
