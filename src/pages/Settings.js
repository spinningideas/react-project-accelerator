import React, { useState, useEffect, useRef } from "react";
import { capitalize, reloadWindow } from "utils";
import { colors } from "styling/colors";
import { DEFAULT_COLOR_SETTING } from "styling/theming";
// Material UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// Icons
import CheckIcon from "@mui/icons-material/Check";
// Services
import LocalCacheService from "services/LocalCacheService";
// Components
import Notifications from "components/Shared/Notifications";

function Settings() {
  const [settingsState, setSettingsState] = useState(DEFAULT_COLOR_SETTING);

  const localCacheService = LocalCacheService();

  const notificationsRef = useRef(null);

  useEffect(() => {
    let colorSetting = localCacheService.get("color", "blue");

    setSettingsState(colorSetting);
  }, []);

  const setColor = (color) => {
    localCacheService.set("color", color);
    setSettingsState(color);
    reloadWindow("/settings");
  };

  const ColorButtons = () => {
    let colorsArray = [];
    for (const [key, value] of Object.entries(colors)) {
      colorsArray.push({ colorName: key, colors: value });
    }

    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: window.innerWidth,
        }}
      >
        {colorsArray.map((colorObj) => {
          return (
            <ColorButton
              key={colorObj.colorName}
              colorName={colorObj.colorName}
              colors={colorObj.colors}
            />
          );
        })}
      </Box>
    );
  };

  const ColorButton = ({ colorName, colors }) => {
    let colorHex = colors[800];

    return (
      <Button
        style={{
          display: "flex",
          width: 140,
          minWidth: 140,
          backgroundColor: colorHex,
          color: "#ffffff",
          borderColor: " tranparent",
        }}
        title={"Set color to " + colorName}
        onClick={() => setColor(colorName)}
      >
        {settingsState === colorName ? (
          <CheckIcon sx={{ marginRight: 1 }} />
        ) : undefined}
        {capitalize(colorName)}
      </Button>
    );
  };

  return (
    <Grid
      item
      xs={12}
      className="scrollable"
      style={{
        height: window.innerHeight,
        marginTop: "20px",
      }}
    >
      <Card>
        <CardContent className="main-contentgrid p-0 m-0">
          <h3>Settings</h3>

          <Card>
            <CardContent>
              <h4 className="card-title">Color</h4>
              <p className="card-text">
                Choose a primary color for the application theme
              </p>
            </CardContent>
            <CardActions>
              <ColorButtons />
            </CardActions>
          </Card>
        </CardContent>
      </Card>

      <Notifications ref={notificationsRef} />
    </Grid>
  );
}

export default Settings;
