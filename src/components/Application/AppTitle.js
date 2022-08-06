import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

const styles = {
  appTitle: {
    flexGrow: 1,
    marginLeft: 1,
  },
};

const AppTitle = (props) => {
  const theme = useTheme();
  const isNotMobileViewport = useMediaQuery(theme.breakpoints.up("sm"));
  if (isNotMobileViewport) {
    return (
      <Typography variant="h6" sx={styles.appTitle}>
        {props.locData.apptitle}
      </Typography>
    );
  }
  return (
    <Typography variant="h6" sx={styles.appTitle}>
      RPA
    </Typography>
  );
};

export default AppTitle;
