import { createTheme } from "@mui/material/styles";
import { appGrey, getColor } from "styling/colors";
// Services
import LocalCacheService from "services/LocalCacheService";
import { ButtonProps } from "@mui/material";

export const DEFAULT_THEME_SETTING = "light";
export const DEFAULT_COLOR_SETTING = "blue";
const localCacheService = LocalCacheService();
const themeSetting = localCacheService.get("theme", DEFAULT_THEME_SETTING);
const colorSetting = localCacheService.get("color", DEFAULT_COLOR_SETTING);

let appPrimaryColor = getColor(colorSetting);

let appPrimaryDark = appPrimaryColor[800];
let appPrimaryDarkest = appPrimaryColor[900];
let appPrimaryLight = appPrimaryColor[200];
let appPrimaryLightest = appPrimaryColor[100];
let appPrimaryVeryLight = appPrimaryColor[50];

let appLightGrey = appGrey[100];
let appMedGrey = appGrey[600];
let appDarkestGrey = appGrey[900];

const appBarWidth = 40;

export const getLinkColor = () => {
  return themeSetting === "dark" ? appPrimaryLight : appPrimaryDark;
};

export const getThemeSetting = () => {
  return themeSetting || DEFAULT_THEME_SETTING;
};

export const getBorderColor = () => {
  return themeSetting === "dark" ? appMedGrey : appLightGrey;
};

export const getPrimaryColor = () => {
  return appPrimaryDark;
};

export const getActivePrimaryColor = () => {
  return appPrimaryDark;
};

export const getTextColor = () => {
  return themeSetting === "dark" ? appLightGrey : appDarkestGrey;
};

export const theme = createTheme({
  zIndex: {
    modal: 20000,
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  palette: {
    mode: themeSetting,
    primary: appGrey,
    secondary: appPrimaryColor,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor:
              themeSetting === "dark" ? appPrimaryLight : appPrimaryDark,
            backgroundColor: "transparent",
            color: themeSetting === "dark" ? appPrimaryLight : appPrimaryDark,
            "&:hover": {
              borderColor:
                themeSetting === "dark"
                  ? appPrimaryLightest
                  : appPrimaryDarkest,
              color:
                themeSetting === "dark"
                  ? appPrimaryLightest
                  : appPrimaryDarkest,
            },
            "&:focus": {
              borderColor:
                themeSetting === "dark"
                  ? appPrimaryLightest
                  : appPrimaryDarkest,
              color:
                themeSetting === "dark"
                  ? appPrimaryLightest
                  : appPrimaryDarkest,
            },
          },
        },
        {
          props: { variant: "contained", color: "primary" },
          style: {
            borderColor: "transparent",
            backgroundColor: appPrimaryDark,
            color: appLightGrey,
            "&:hover": {
              backgroundColor: appPrimaryDark,
              color: appLightGrey,
            },
            "&:focus": {
              backgroundColor: appPrimaryDark,
              color: appLightGrey,
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            borderColor: "transparent",
            backgroundColor: appPrimaryVeryLight,
            color: appPrimaryDark,
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            borderColor: appPrimaryDark,
            color: appPrimaryDark,
          },
        },
      ],
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: appPrimaryDark,
          borderRadius: 0,
          paddingLeft: 10,
          fontSize: "1em",
          lineHeight: "2em",
          "&:hover": {
            backgroundColor: appPrimaryDark,
            color: appLightGrey,
          },
          "&:focus": {
            backgroundColor: appPrimaryDark,
            color: appLightGrey,
          },
          textPrimary: {
            "&:hover": {
              backgroundColor: appPrimaryDark,
              color: appLightGrey,
            },
            "&:focus": {
              backgroundColor: appPrimaryDark,
              color: appLightGrey,
            },
          },
          textSecondary: {
            "&:hover": {
              backgroundColor: appPrimaryDark,
              color: appLightGrey,
            },
            "&:focus": {
              backgroundColor: appPrimaryDark,
              color: appLightGrey,
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: "text.default",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "text.default",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: 0,
          paddingLeft: 10,
        },
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            padding: 4,
            backgroundColor: appLightGrey,
            color: appPrimaryDark,
            "&:hover": {
              backgroundColor: appPrimaryDark,
              color: appLightGrey,
            },
            "&:focus": {
              backgroundColor: appPrimaryDark,
              color: appLightGrey,
            },
          },
        },
        {
          props: { variant: "rounded" } as unknown as ButtonProps,
          style: {
            margin: 0,
            borderRadius: 36,
            padding: 1,
            paddingLeft: 1,
            backgroundColor: "transparent",
            color: "text.default",
            "&:hover": {
              backgroundColor: appLightGrey,
              color: appPrimaryDark,
            },
            "&:focus": {
              backgroundColor: appLightGrey,
              color: appPrimaryDark,
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          backgroundImage: "none",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 10,
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          "&:last-child": {
            paddingBottom: 10,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        avatar: {
          marginLeft: 0,
        },
      },
    },
  },
});

export const styles = (theme) => ({
  root: {
    width: "100%",
    height: "100%",
    marginTop: 0,
    zIndex: 1,
    flexGrow: 1,
    overflow: "hidden",
  },
  flex: {
    flex: 1,
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: 0,
    height: "calc(100%)",
    marginTop: 0,
    marginLeft: appBarWidth,
  },
  typography: {
    button: {
      "border-radius": "0",
    },
  },
});
