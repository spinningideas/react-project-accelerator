import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeSelection = ({
  themeMode,
  setUserTheme,
}: {
  themeMode: string;
  setUserTheme: (themeMode: string) => void;
}) => {
  const handleThemeSelection = (themeMode: string) => {
    setUserTheme(themeMode);
  };

  return (
    <>
      <IconButton
        sx={{ mr: 1 }}
        onClick={() => {
          handleThemeSelection(themeMode === "dark" ? "light" : "dark");
        }}
        aria-label="theme"
      >
        {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>
  );
};

export default React.memo(ThemeSelection);
