import React from "react";
import { getPrimaryColor } from "styling/theming";
import CircularProgress from "@mui/material/CircularProgress";

/* "Loading..."  Component which encapsulates presenting UI indication that something is loading */
const LoadingIndicator = ({ color, loading, margin = 6, size = 100 }) => {
  const primaryColorCircularProgress = color ? color : getPrimaryColor();

  if (loading === undefined || loading === false) {
    return <></>;
  }

  return (
    <CircularProgress
      variant="indeterminate"
      disableShrink
      sx={{
        margin: margin,
        color: primaryColorCircularProgress,
        animationDuration: "800ms",
      }}
      size={size}
      thickness={5}
    />
  );
};

export default React.memo(LoadingIndicator);
