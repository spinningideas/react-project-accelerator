import React from "react";
import Grid from "@mui/material/Grid";

function GetStartedMessage(props) {
  if (props.displayGetStarted === false) {
    return <></>;
  }
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <p className="whitetext" id="get-started-message">{props.locData.getstartedmessage}</p>
      </Grid>
    </Grid>
  );
}

export default GetStartedMessage;
