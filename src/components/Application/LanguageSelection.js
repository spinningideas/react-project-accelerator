import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { reloadWindow } from "utils";

const LanguageSelection = (props) => {
  const [anchorEl, setAnchorEl] = useState(undefined);

  const languageSelectionOpen = (event) => {
    if (event && event.target) {
      setAnchorEl(event.currentTarget);
    }
  };

  const languageSelectionClose = () => {
    setAnchorEl(undefined);
  };

  const languageSelectionMakeChoice = (locale) => {
    props.localizationService.setUserLocale(locale);
    setAnchorEl(undefined);
    reloadWindow();
  };

  return (
    <>
      <Button
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={languageSelectionOpen}
        color="secondary"
        sx={{ marginRight: 1 }}
      >
        Language
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl ? anchorEl : null}
        keepMounted
        open={anchorEl ? Boolean(anchorEl) : false}
        onClose={() => languageSelectionClose()}
      >
        <MenuItem onClick={() => languageSelectionMakeChoice("enUS")}>
          English
        </MenuItem>
        <MenuItem onClick={() => languageSelectionMakeChoice("zhCN")}>
          Chinese
        </MenuItem>
        <MenuItem onClick={() => languageSelectionMakeChoice("esES")}>
          Spanish
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelection;
