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

const AppTitle = ({ locData }: { locData: Record<string, string> }) => {
  const theme = useTheme();
  const isMobileViewport = useMediaQuery(theme.breakpoints.down("sm"));
  if (isMobileViewport) {
    return (
      <Typography variant="h6" sx={styles.appTitle}>
        RPA
      </Typography>
    );
  }
  return (
    <Typography variant="h6" sx={styles.appTitle}>
      {locData.apptitle}
    </Typography>
  );
};

export default React.memo(AppTitle);
