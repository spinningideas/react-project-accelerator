import React, { useState } from "react";
import { reloadWindow } from "utils";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";

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
        <TranslateIcon />
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
