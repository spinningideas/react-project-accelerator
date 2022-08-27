import React from "react";
import { getPrimaryColor } from "styling/theming";
import CircularProgress from "@mui/material/CircularProgress";

/*
Component which encapsulates presenting indication 
that something is loading in the form of a "spinner" 
*/
const LoadingIndicator = ({
  color,
  loading = false,
  margin = 6,
  size = 100,
}: {
  color?: string;
  loading?: boolean;
  margin?: number;
  size?: number;
}) => {
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
