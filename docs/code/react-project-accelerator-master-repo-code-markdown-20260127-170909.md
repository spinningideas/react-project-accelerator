This consolidated file represents the codebase from a repository,
merged into a unified document optimized for AI consumption and automated
analysis workflows.

# Repository Structure

```
react-project-accelerator-master/
├── .vscode
│   └── launch.json
├── markdown
├── public
│   ├── i18n
│   │   ├── enUS.json
│   │   ├── esES.json
│   │   └── zhCN.json
│   ├── android-chrome-192x192.png
│   ├── app-logo-192.png
│   ├── app-logo.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── material-ui-logo.png
│   └── robots.txt
├── src
│   ├── components
│   │   ├── Application
│   │   │   ├── AppTitle.tsx
│   │   │   ├── AuthButton.tsx
│   │   │   ├── AuthDialog.tsx
│   │   │   ├── LanguageSelection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── ThemeSelection.tsx
│   │   ├── Home
│   │   │   └── GetStartedMessage.tsx
│   │   ├── Shared
│   │   │   ├── LoadingIndicator.tsx
│   │   │   ├── ModalDialog.tsx
│   │   │   └── SlideTransition.tsx
│   │   └── ErrorHandler.tsx
│   ├── hooks
│   │   └── useWindow.ts
│   ├── layouts
│   │   └── DefaultLayout.tsx
│   ├── models
│   │   ├── ContactSubmission.ts
│   │   └── GeoServiceLocation.ts
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Settings.tsx
│   ├── routing
│   │   └── PageRouter.tsx
│   ├── services
│   │   ├── AuthService.ts
│   │   ├── GeoService.ts
│   │   ├── HttpClient.ts
│   │   ├── LocalCacheService.ts
│   │   ├── LocalizationService.ts
│   │   └── NotificationsService.ts
│   ├── styling
│   │   ├── Application.scss
│   │   ├── colors.ts
│   │   └── theming.ts
│   ├── Application.test.tsx
│   ├── Application.tsx
│   ├── index.tsx
│   ├── setupTests.ts
│   └── utils.ts
├── .eslintrc.ts
├── LICENSE.md
├── package.json
├── react-app-env.d.ts
├── README.md
└── tsconfig.json
```

# File Contents

================================================================================
// File: .eslintrc.ts
================================================================================
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
  },
};


================================================================================
// File: .vscode/launch.json
================================================================================
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug via Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000/react-project-accelerator",
      "webRoot": "${workspaceFolder}"
    }
  ]
}


================================================================================
// File: LICENSE.md
================================================================================
MIT License

Copyright (c) 2020 spinningideas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


================================================================================
// File: package.json
================================================================================
{
  "name": "react-project-accelerator",
  "version": "0.9.1",
  "private": true,
  "description": "React JS project accelerator that can serve as reference for bootstrapping projects. Includes localization and authorization via services based approach using hooks to manage state",
  "homepage": "https://spinningideas.github.io/react-project-accelerator/",
  "scripts": {
    "dev": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "buildghpages": "set PUBLIC_URL=https://spinningideas.github.io/react-project-accelerator/&&react-scripts build",
    "deployghpages": "gh-pages -d build"
  },
  "dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.14.18",
    "@mui/material": "^5.14.18",
    "@testing-library/jest-dom": "^6.1.4",
    "@testing-library/react": "^14.1.2",
    "@testing-library/user-event": "^14.5.1",
    "@types/jest": "^29.5.10",
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.38",
    "@types/react-dom": "^18.2.17",
    "formik": "^2.4.5",
    "formik-mui": "^5.0.0-alpha.0",
    "node-sass": "^9.0.0",
    "notistack": "^3.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router": "^6.20.0",
    "react-router-dom": "^6.20.0",
    "react-scripts": "5.0.1",
    "typescript": "4.9.5"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "gh-pages": "^6.1.0"
  }
}


================================================================================
// File: public/i18n/enUS.json
================================================================================
{
	"about": "About",
	"aboutdescription": "This app was created to provide an example reference implementation to bootstrap and accelerate react project and to explore using various client side libraries to compose a rich user experience.",
	"apptitle": "React Project Accelerator",
	"authenticatedcontent": "Authenticated Content",
	"authenticatedcontentdescription": "Here is content displayed only if user is signed in",
	"cancel": "Cancel",
	"close": "Close",
	"contact": "Contact",
	"contactdescription": "Fill out the form to submit contact info - this is example use of form and styling it",
	"createreactapp": "Create React App",
	"createreactappdescription": "Quickly get started building React Apps using toolset that allows you to focus on development.",
	"email": "Email",
	"error": "Error",
	"forms": "Forms",
	"formsexample": "Forms Example",
	"formsexampledescription": "Example of use of forms and validation via formik",
	"getstartedmessage": "To get started use the menu to navigate and change languages",
	"home": "Home",
	"homepagewelcome": "Welcome to React Project Accelerator",
	"materialui": "Material-UI",
	"materialuidescription": "Visually appealing React components that implement Google's Material Design along with layout and theming support.",
	"message": "Message",
	"messagedescription": "Enter message...",
	"modals": "Modals",
	"modalsdescription": "Below are examples of modal dialogs",
	"moreinfo": "More Info",
	"name": "Name",
	"notifications": "Notifications",
	"notificationsdescription": "Below are examples of 'toast' style notifications",
	"reactjs": "React JS",
	"reactjsdescription": "React makes it painless to create interactive UIs using encapsulated components that manage their own state.",
	"required": "Required",
	"save": "Save",
	"serviceexampledescription": "Example of use of services and HttpClient",
	"serviceexampletitle": "View Ip Address",
	"services": "Services",
	"settings": "Settings",
	"settingscolor": "Color",
	"settingsdescription": "Choose a primary color for the application theme",
	"signin": "Sign In",
	"signindescription": "Sign In To Your Account",
	"signout": "Sign Out",
	"success": "Success",
	"technology": "Technology",
	"technologydescription": "This application was built using the following technologies:",
	"view": "View",
	"welcome": "Welcome!"
}

================================================================================
// File: public/i18n/esES.json
================================================================================
{
	"about": "Acerca de",
	"aboutdescription": "Esta aplicación fue creada para proporcionar una implementación de referencia de ejemplo para arrancar y acelerar el proyecto de reacción y para explorar el uso de varias bibliotecas del lado del cliente para componer una experiencia de usuario rica.",
	"apptitle": "React Project Accelerator",
	"authenticatedcontent": "Contenido Autenticado",
	"authenticatedcontentdescription": "Aquí se muestra el contenido solo si los usuarios han iniciado sesión",
	"cancel": "Cancelar",
	"close": "Cerca",
	"contact": "Contacto",
	"contactdescription": "Rellene el formulario para enviar información de contacto: este es un ejemplo de uso del formulario y su estilo",
	"createreactapp": "Crear Aplicación React",
	"createreactappdescription": "Comience rápidamente a crear aplicaciones React usando un conjunto de herramientas que le permite centrarse en el desarrollo.",
	"email": "Correo electrónico",
	"error": "Error",
	"forms": "Formas",
	"formsexample": "Ejemplo De Formularios",
	"formsexampledescription": "Ejemplo de uso de formularios y validación a través de formik",
	"getstartedmessage": "Para comenzar, use el menú para navegar y cambiar idiomas",
	"home": "Casa",
	"homepagewelcome": "Bienvenido a React Project Accelerator",
	"materialui": "Material-UI",
	"materialuidescription": "Componentes React visualmente atractivos que implementan el diseño de materiales de Google junto con el diseño y el soporte de temas.",
	"message": "Mensaje",
	"messagedescription": "Ingrese el mensaje...",
	"modals": "Diálogos Modales",
	"modalsdescription": "A continuación hay ejemplos de diálogos modales.",
	"moreinfo": "Más Información",
	"name": "Nombre",
	"notifications": "Notificaciones",
	"notificationsdescription": "A continuación hay ejemplos de notificaciones.",
	"reactjs": "Reaccionar JS",
	"reactjsdescription": "React hace que sea sencillo crear interfaces de usuario interactivas utilizando componentes encapsulados que administran su propio estado.",
	"required": "Necesario",
	"save": "Salvar",
	"serviceexampledescription": "Ejemplo de uso de servicios y HttpClient",
	"serviceexampletitle": "Ver dirección IP",
	"services": "Servicios",
	"settings": "Configuración",
	"settingscolor": "Color",
	"settingsdescription": "Elegir un color primario para el tema de la aplicación",
	"signin": "Registrarse",
	"signindescription": "Iniciar sesión en su cuenta",
	"signout": "Desconectar",
	"success": "Éxito",
	"technology": "Tecnología",
	"technologydescription": "Esta aplicación fue construida usando las siguientes tecnologías:",
	"view": "Ver",
	"welcome": "Bienvenidas!"
}

================================================================================
// File: public/i18n/zhCN.json
================================================================================
{
	"about": "关于",
	"aboutdescription": "创建该应用程序是为了提供示例参考实现，以引导和加速React项目并探索使用各种客户端库来构成丰富的用户体验",
	"apptitle": "React Project Accelerator",
	"authenticatedcontent": "认证内容",
	"authenticatedcontentdescription": "仅当用户登录时才显示以下内容",
	"cancel": "取消",
	"close": "关",
	"contact": "联系",
	"contactdescription": "填写表格以提交联系信息-这是表格使用和样式设计的示例",
	"createreactapp": "Create React App",
	"createreactappdescription": "使用工具集快速开始构建React Apps，该工具集可让您专注于开发.",
	"email": "电子邮件",
	"error": "错误",
	"forms": "形式",
	"formsexample": "表格范例",
	"formsexampledescription": "通过Formik使用表格和进行验证的示例",
	"getstartedmessage": "要开始使用菜单，请浏览和更改语言",
	"home": "家",
	"homepagewelcome": "欢迎使用 React Project Accelerator",
	"materialui": "Material-UI",
	"materialuidescription": "具有视觉吸引力的React组件，可实现Google的Material Design以及布局和主题支持",
	"message": "信息",
	"messagedescription": "输入讯息...",
	"modals": "模态对话框",
	"modalsdescription": "以下是模式对话框的示例",
	"moreinfo": "更多信息",
	"name": "名称",
	"notifications": "通知事项",
	"notificationsdescription": "以下是通知示例",
	"reactjs": "React JS",
	"reactjsdescription": "React使使用管理其自身状态的封装组件轻松创建交互式UI",
	"required": "需要",
	"save": "救",
	"serviceexampledescription": "服务和HttpClient的使用示例",
	"serviceexampletitle": "查看IP地址",
	"services": "服务",
	"settings": "设置",
	"settingscolor": "颜色",
	"settingsdescription": "为应用程序主题选择原色",
	"signin": "登入",
	"signindescription": "登录到您的帐户",
	"signout": "登出",
	"success": "成功",
	"technology": "技术",
	"technologydescription": "此应用程序是使用以下技术构建的:",
	"view": "视图",
	"welcome": "欢迎"
}

================================================================================
// File: public/index.html
================================================================================
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="React Project Accelerator" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React Project Accelerator</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="appshell"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>


================================================================================
// File: public/manifest.json
================================================================================
{
  "short_name": "React Project Accelerator",
  "name": "React Project Accelerator",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "app-logo-192.png",
      "type": "image/png",
      "sizes": "192x192"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#212121",
  "background_color": "#ffffff"
}

================================================================================
// File: react-app-env.d.ts
================================================================================
/// <reference types="react-scripts" />


================================================================================
// File: README.md
================================================================================
React Project Accelerator was conceived to aid starting React JS projects and provide a reference implementation for bootstrapping projects. The project was itself bootstrapped from [create react app](https://reactjs.org/docs/create-a-new-react-app.html) and uses [react material ui](https://mui.com/) for its UX.

This application has a folder structure roughly matching https://github.com/spinningideas/resources/wiki/React-JS-Folder-Structure with the omission of redux and contexts/hooks folders for simplicity.

The project aims to include most of the basic things one needs and includes:

- use of [Typescript](https://www.typescriptlang.org/) to better communicate the contract of components and share, document, and reuse independent components within and between projects.
- use of [Material UI](https://mui.com/material-ui/getting-started/overview/) to enable more rapid development using a set of building block components for the UI .
- theming - use of Material UI theming and ability for user to select a primary color (see styling/theming.ts).
- localization and authorization via services based approach using hooks to manage state.
- forms and validation via [formik](https://jaredpalmer.com/formik/) and [formik-material-ui](https://stackworx.github.io/formik-mui/).
- use of a layout to structure the application containing pages.
- use of services pattern and models to share contracts of core types used in the components and application between the service layer and the presentation layer.
- use of HttpClient to call external REST APIs from local services (see GeoService).
- use of local storage to cache a user setting (theme color in this case) via LocalCacheService.
- testing via @testing-library/react and helper libraries.
- use of sass.
- icons via @mui/icons-material.

## Live Demo

https://spinningideas.github.io/react-project-accelerator/

## Get Started

In the project directory, you can run:

1. Install packages

`npm install`

2. Start and run the application

`npm dev`

Runs the app in the development mode and launches browser to http://localhost:3000/react-project-accelerator

The page will reload if you make edits.

### VS Code Debugging

1. Run the application via standard npm run command

`npm dev`

2. Set a breakpoint in the application code within VS Code

3. Run the debugger via F5 or the left nav menu entry and select the launch profile "Debug via Chrome"

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## More Info

### React Material UI

- [Usage](https://material-ui.com/getting-started/usage/)
- [Responsive UX](https://material-ui.com/guides/responsive-ui/)

### React Forms

- [formik](https://jaredpalmer.com/formik/)
- [formik-material-ui](https://stackworx.github.io/formik-material-ui/)

### Icons

- https://mui.com/material-ui/material-icons/

### React Application Building

- https://github.com/spinningideas/resources/wiki/React-JS
- https://github.com/spinningideas/resources/wiki/React-JS-Folder-Structure


================================================================================
// File: src/Application.test.tsx
================================================================================
import { act, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Application from "Application";

test("renders get-started-message element", async () => {
  await act(async () =>
    render(
      <Router>
        <Application />
      </Router>
    )
  );

  const container = document.querySelector("#application-container");

  expect(container).toBeDefined();
});


================================================================================
// File: src/Application.tsx
================================================================================
import DefaultLayout from "layouts/DefaultLayout";

export default function Application() {
  return <DefaultLayout></DefaultLayout>;
}


================================================================================
// File: src/components/Application/AppTitle.tsx
================================================================================
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


================================================================================
// File: src/components/Application/AuthButton.tsx
================================================================================
import React from "react";
import Button from "@mui/material/Button";

const AuthButton = ({
  userSignedIn,
  locData,
  handleSignOutClick,
  setSignInDialogOpen,
}: {
  userSignedIn: boolean;
  locData: Record<string, string>;
  handleSignOutClick: () => void;
  setSignInDialogOpen: (open: boolean) => void;
}) => {
  if (userSignedIn) {
    return (
      <Button color="secondary" onClick={() => handleSignOutClick()}>
        {locData.signout}
      </Button>
    );
  } else {
    return (
      <Button color="primary" onClick={() => setSignInDialogOpen(true)}>
        {locData.signin}
      </Button>
    );
  }
};

export default React.memo(AuthButton);


================================================================================
// File: src/components/Application/AuthDialog.tsx
================================================================================
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function AuthDialog({
  open,
  handleSignIn,
  handleSignInCancel,
  locData,
  content,
}: {
  open: boolean;
  handleSignIn: () => void;
  handleSignInCancel: () => void;
  locData: Record<string, string>;
  content?: string;
}) {
  const handleCancelClose = () => {
    handleSignInCancel();
  };

  const handleSignInClose = () => {
    handleSignIn();
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{locData.signindescription}</DialogTitle>
        {content && (
          <DialogContent>
            <DialogContentText id="dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => handleCancelClose()}
          >
            {locData.cancel}
          </Button>
          <Button
            onClick={() => handleSignInClose()}
            color="primary"
            variant="contained"
            autoFocus
          >
            {locData.signin}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default React.memo(AuthDialog);


================================================================================
// File: src/components/Application/LanguageSelection.tsx
================================================================================
import React, { useState } from "react";
import { reloadWindow } from "utils";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";

const LanguageSelection = ({
  setUserLocale,
}: {
  setUserLocale: (locale: string) => void;
}) => {
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
    setUserLocale(locale);
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

export default React.memo(LanguageSelection);


================================================================================
// File: src/components/Application/Navigation.tsx
================================================================================
import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { reloadWindow } from "utils";
// material-ui Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// material-ui Icons
import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import Email from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
// services
import LocalizationService from "services/LocalizationService";
import LocalCacheService from "services/LocalCacheService";
// Components
import AppTitle from "components/Application/AppTitle";
import AuthButton from "components/Application/AuthButton";
import AuthDialog from "components/Application/AuthDialog";
import LanguageSelection from "components/Application/LanguageSelection";
import ThemeSelection from "components/Application/ThemeSelection";
// config
import { DEFAULT_THEME_SETTING } from "styling/theming";

const drawerWidth = 240;

const styles = {
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: 10001,
    bgcolor: "background.default",
  },
  appTitle: {
    flexGrow: 1,
  },
  sideMenuDrawer: {
    top: "65px",
    width: drawerWidth,
    height: "100%",
    flexShrink: 0,
  },
  sideMenuDrawerPaper: {
    width: drawerWidth,
  },
  sideMenuList: {
    padding: 1,
    width: drawerWidth + "px",
  },
  sideMenuListItem: {
    paddingLeft: 1,
  },
  menuButton: {
    paddingRight: 1,
  },
};

const Navigation = ({
  selectedMenuItemKey,
  userSignedIn = false,
  handleSignIn,
  handleSignOut,
}: {
  selectedMenuItemKey?: string;
  userSignedIn: boolean;
  handleSignIn: () => void;
  handleSignOut: () => void;
}) => {
  const [locData, setLocData] = useState<Record<string, string>>({});
  const [themeMode, setThemeMode] = useState<string>(DEFAULT_THEME_SETTING);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);

  const localCacheService = useMemo(LocalCacheService, []);
  const localizationService = useMemo(LocalizationService, []);

  const navigate = useNavigate();

  useEffect(() => {
    const themeSetting = localCacheService.get("theme", DEFAULT_THEME_SETTING);
    setThemeMode(themeSetting);
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          "apptitle",
          "signin",
          "signindescription",
          "signout",
          "home",
          "contact",
          "about",
          "cancel",
          "settings",
        ],
        locCode
      );

      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, [localizationService, localCacheService]);

  const toggleDrawerOpen = () => {
    setOpenNavigation(!openNavigation);
  };

  const closeDrawer = () => {
    setOpenNavigation(false);
  };

  const handleSignInClick = () => {
    setSignInDialogOpen(false);
    handleSignIn();
  };

  const handleSignOutClick = () => {
    handleSignOut();
  };

  const menuItemIsSelected = (menuItemKey, locationPath) => {
    if (menuItemKey && locationPath) {
      return menuItemKey === locationPath;
    }
    return false;
  };

  const handleThemeSelection = (themeMode: string) => {
    localCacheService.set("theme", themeMode);
    reloadWindow();
  };

  return (
    <Box sx={styles.root}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => toggleDrawerOpen()}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <AppTitle locData={locData} />
          <ThemeSelection
            setUserTheme={(selectedTheme: string) => {
              handleThemeSelection(selectedTheme);
            }}
            themeMode={themeMode}
          />
          <Button
            onClick={() => {
              closeDrawer();
              navigate("/settings");
            }}
            aria-label="settings"
            color="secondary"
            sx={{ marginRight: 1 }}
          >
            <SettingsIcon />
          </Button>
          <LanguageSelection
            setUserLocale={(selectedLocale: string) => {
              localizationService.setUserLocale(selectedLocale);
            }}
          />
          <AuthButton
            locData={locData}
            userSignedIn={userSignedIn}
            handleSignOutClick={handleSignOutClick}
            setSignInDialogOpen={setSignInDialogOpen}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        variant="persistent"
        color="primary"
        open={openNavigation}
        sx={styles.sideMenuDrawer}
        PaperProps={{
          sx: {
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={closeDrawer}
            sx={styles.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <List sx={styles.sideMenuList}>
          <ListItemButton
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/"
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={locData.home} />
          </ListItemButton>
          <ListItemButton
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/contact"
          >
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={locData.contact} />
          </ListItemButton>
          <ListItemButton
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/settings"
            selected={menuItemIsSelected(selectedMenuItemKey, "/settings")}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={locData.settings} />
          </ListItemButton>
          <ListItemButton
            sx={styles.sideMenuListItem}
            onClick={closeDrawer}
            component={Link}
            to="/about"
          >
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary={locData.about} />
          </ListItemButton>
        </List>
      </Drawer>
      <AuthDialog
        locData={locData}
        open={signInDialogOpen}
        handleSignIn={handleSignInClick}
        handleSignInCancel={() => setSignInDialogOpen(false)}
      />
    </Box>
  );
};

export default React.memo(Navigation);


================================================================================
// File: src/components/Application/ThemeSelection.tsx
================================================================================
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


================================================================================
// File: src/components/ErrorHandler.tsx
================================================================================
import Box from "@mui/material/Box";
import React from "react";

type ErrorHandlerProps = { children: any };

type ErrorHandlerState = {
  hasError: boolean;
};

/*
Component which encapsulates presenting error message 
if any application level errors occur 
*/
class ErrorHandler extends React.Component<
  ErrorHandlerProps,
  ErrorHandlerState
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ margin: 2 }}>
          <h3>Something went wrong. Please reload the page to continue</h3>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorHandler;


================================================================================
// File: src/components/Home/GetStartedMessage.tsx
================================================================================
import React from "react";
import Grid from "@mui/material/Grid";

function GetStartedMessage({
  displayGetStarted,
  locData,
}: {
  displayGetStarted: boolean;
  locData: any;
}) {
  if (displayGetStarted === false) {
    return <></>;
  }
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <p id="get-started-message">
          {locData.getstartedmessage}
        </p>
      </Grid>
    </Grid>
  );
}

export default GetStartedMessage;


================================================================================
// File: src/components/Shared/LoadingIndicator.tsx
================================================================================
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


================================================================================
// File: src/components/Shared/ModalDialog.tsx
================================================================================
import React, { useRef, useEffect } from "react";
import { getWindowHeight, getWindowWidth } from "hooks/useWindow";
import SlideTransition from "components/Shared/SlideTransition";
// Material UI
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Breakpoint } from "@mui/material";
/* 
Example Usage:

	<button onClick={() => openModal()}>Open modal</button>
	<Modal open={isModalOpen} onClose={() => closeModal()}>
		<h1>Modal title</h1>
		<p>hello</p>
		<p><button onClick={() => closeModal()}>Close</button></p>
	</Modal>
*/

const ModalDialog = ({
  title,
  open,
  onClose,
  fullScreen = false,
  maxWidth = "sm",
  height,
  contentPadding = 0,
  children,
}: {
  title?: string;
  open: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  width?: number;
  maxWidth?: Breakpoint;
  height?: number;
  contentPadding?: number;
  children: any;
}) => {
  const modalDialogTopRef = useRef<any>(null);

  const scrollContentIntoView = () => {
    document.documentElement.scrollTop = 0;
    setTimeout(() => {
      const modalDialogTop = document.getElementById(
        "modal-dialog-content-top"
      );
      if (modalDialogTop) {
        modalDialogTop.scrollTo({ top: 0, behavior: "smooth" });
        modalDialogTop.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };

  const getModalHeight = (): string => {
    if (fullScreen) {
      return windowHeight + "px";
    }
    return height ? height.toString() : "auto";
  };

  const windowHeight = getWindowHeight();
  const windowWidth = getWindowWidth();

  const closeDialog = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      scrollContentIntoView();
    }
  }, [open]);

  if (open === false) return null;

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth={maxWidth}
      scroll="paper"
      open={open}
      onClose={closeDialog}
      TransitionComponent={SlideTransition}
      hideBackdrop={true}
      PaperProps={{
        style: {
          zIndex: "9999",
          position: "absolute",
          top: fullScreen ? "0" : "5%",
          left: fullScreen ? "0" : "33%",
          height: getModalHeight(),
          maxWidth: windowWidth + "px !important",
          margin: 0,
          color: "text.default",
          backgroundColor: "background.default",
          overflow: "hidden",
        },
      }}
      sx={{
        "& .MuiModal-backdrop": {
          verticalAlign: "top",
          backgroundColor: "transparent",
        },
        "& .MuiDialog-paper": {
          boxShadow: "2",
          border: 1,
          borderColor: "divider",
        },
      }}
    >
      <AppBar
        id="modal-dialog-content-top"
        ref={modalDialogTopRef}
        sx={{
          boxShadow: "none",
          borderBottom: 1,
          borderColor: "divider",
          "& .MuiToolbar-root": {
            paddingLeft: 0,
            paddingRight: 0,
          },
          position: "relative",
          backgroundColor: "background.default",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 0,
              paddingLeft: 1,
              paddingRight: 1,
              flexGrow: 1,
            }}
          >
            <Box sx={{ flexGrow: 1, padding: 1, fontSize: 20 }}>{title}</Box>
            <IconButton
              onClick={(e) => {
                closeDialog(e);
              }}
              sx={{
                padding: 1,
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <DialogContent
        sx={{
          padding: contentPadding,
          paddingBottom: 4,
          height: getModalHeight(),
          maxWidth: windowWidth + "px !important",
          overflowX: "auto",
          overflowY: "auto",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(ModalDialog);


================================================================================
// File: src/components/Shared/SlideTransition.tsx
================================================================================
import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import Slide from '@mui/material/Slide';

const SlideTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default SlideTransition;

================================================================================
// File: src/hooks/useWindow.ts
================================================================================
import { useState, useEffect } from "react";

export const getWindowHeight = (): number => {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  );
};

export const getWindowWidth = (): number => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};

const useWindowWidth = () => {
  let [width, setWidth] = useState(getWindowWidth());
  let [height, setHeight] = useState(getWindowHeight());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId: any = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.location.reload();
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => {
        setWidth(getWindowWidth());
        setHeight(getWindowHeight());
      }, 150);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return { width: width, height: height };
};

export default useWindowWidth;


================================================================================
// File: src/index.tsx
================================================================================
// React
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// Theme - material-ui
import { ThemeProvider } from "@mui/material/styles";
// Notifications
import { SnackbarProvider } from "notistack";
// App
import { theme } from "styling/theming";
import "styling/Application.scss";
import Application from "Application";
import ErrorHandler from "components/ErrorHandler";
import { APPBASEPATH } from "utils";

const AppShell = () => (
  <ErrorHandler>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        dense
        maxSnack={3}
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{ containerRoot: "z-alert" }}
      >
        <Router basename={APPBASEPATH}>
          <Application />
        </Router>{" "}
      </SnackbarProvider>
    </ThemeProvider>
  </ErrorHandler>
);

const containerAppShell = document.getElementById("appshell");
const appShellRoot = createRoot(containerAppShell as Element);
appShellRoot.render(<AppShell />);


================================================================================
// File: src/layouts/DefaultLayout.tsx
================================================================================
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { reloadWindow } from "utils";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
// Routes
import PageRouter from "routing/PageRouter";
// services
import AuthService from "services/AuthService";
// Components
import Navigation from "components/Application/Navigation";

const styles = {
  root: {
    flexGrow: 1,
    display: "flex",
  },
  appbar: {
    height: "65px",
    width: "100%",
    bgcolor: "background.default",
  },
  content: {
    flexGrow: 1,
    padding: 2,
    bgcolor: "background.default",
  },
};

function DefaultLayout() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const location = useLocation();

  const selectedMenuItemKey = location.pathname;

  const authService = AuthService();

  useEffect(() => {
    let userHasSignedIn = authService.userHasSignedIn();
    setUserSignedIn(userHasSignedIn);
  }, [authService, userSignedIn]);

  const handleSignIn = () => {
    authService.signIn();
    reloadWindow();
  };

  const handleSignOut = () => {
    authService.signOut();
    reloadWindow();
  };

  return (
    <>
      <CssBaseline />
      <Grid container sx={styles.root} spacing={0} id="application-container">
        <Grid item sx={styles.appbar} xs={12}>
          <Navigation
            selectedMenuItemKey={selectedMenuItemKey}
            userSignedIn={userSignedIn}
            handleSignIn={handleSignIn}
            handleSignOut={handleSignOut}
          />
        </Grid>
        <Grid item sx={styles.content} xs={12}>
          {PageRouter}
        </Grid>
      </Grid>
    </>
  );
}

export default DefaultLayout;


================================================================================
// File: src/models/ContactSubmission.ts
================================================================================
export default interface ContactSubmission {
  name?: string;
  email?: string;
  message: string;
}


================================================================================
// File: src/models/GeoServiceLocation.ts
================================================================================
export default interface GeoServiceLocation {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  message: string;
}


================================================================================
// File: src/pages/About.tsx
================================================================================
import { useEffect, useMemo, useState } from "react";
// material-ui
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// services
import LocalizationService from "services/LocalizationService";

export default function About() {
  const [locData, setLocData] = useState<Record<string, string>>({});

  const localizationService = useMemo(LocalizationService, []);

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();

      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          "about",
          "aboutdescription",
          "technology",
          "technologydescription",
          "reactjs",
          "reactjsdescription",
          "materialui",
          "materialuidescription",
          "createreactapp",
          "createreactappdescription",
          "moreinfo",
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, [localizationService]);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} className="contentpanel-site">
        <h3>{locData.about}</h3>

        <p>{locData.aboutdescription}</p>

        <h4>{locData.technology}</h4>

        <p>{locData.technologydescription}</p>

        <Grid container spacing={0}>
          <Grid item xs={12} md={3} lg={3} xl={3}>
            <Card className="card bl-1 bb-1">
              <CardContent>
                <h4 className="card-title">{locData.reactjs}</h4>
                <p className="card-text">{locData.reactjsdescription}</p>
              </CardContent>
              <CardActions>
                <Button
                  className="ml-2"
                  color="secondary"
                  variant="contained"
                  href="https://facebook.github.io/react/index.html"
                  target="_blank"
                  rel="noopener"
                >
                  {locData.moreinfo}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={3} lg={3} xl={3}>
            <Card className="card bl-1 bb-1">
              <CardContent>
                <h4 className="card-title">{locData.materialui}</h4>
                <p className="card-text">{locData.materialuidescription}</p>
              </CardContent>
              <CardActions>
                <Button
                  className="ml-2"
                  color="secondary"
                  variant="contained"
                  href="https://material-ui.com/"
                  target="_blank"
                  rel="noopener"
                >
                  {locData.moreinfo}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={3} lg={3} xl={3}>
            <Card className="card bl-1 bb-1">
              <CardContent>
                <h4 className="card-title">{locData.createreactapp}</h4>
                <p className="card-text">{locData.createreactappdescription}</p>
              </CardContent>
              <CardActions>
                <Button
                  className="ml-2"
                  color="secondary"
                  variant="contained"
                  href="https://create-react-app.dev/"
                  target="_blank"
                  rel="noopener"
                >
                  {locData.moreinfo}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}


================================================================================
// File: src/pages/Contact.tsx
================================================================================
import { useEffect, useState, useMemo } from "react";
// forms
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
// material-ui
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// services
import LocalizationService from "services/LocalizationService";
import NotificationsService from "services/NotificationsService";
// models
import ContactSubmission from "models/ContactSubmission";

export default function Contact(props) {
  const [locData, setLocData] = useState<Record<string, string>>({});
  const [formIsSubmitting, setFormIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactSubmission>({
    name:
      props.match && props.match.params && props.match.params.name
        ? props.match.params.name
        : "",
    email: "",
    message: "",
  });

  const localizationService = useMemo(LocalizationService, []);
  const notificationsService = useMemo(NotificationsService, []);

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();

      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          "contact",
          "contactdescription",
          "moreinfo",
          "save",
          "name",
          "email",
          "message",
          "messagedescription",
          "required",
          "success",
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, [localizationService, notificationsService]);

  const styles = {
    formField: {
      display: "flex",
      flexDirection: "column",
      margin: 1,
      width: 500,
    },
  };

  const showNotification = (message, type) => {
    notificationsService.show(message, type);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <h3>{locData.contact}</h3>
        <p>{locData.contactdescription}</p>

        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Formik
              initialValues={formData}
              validate={(values: ContactSubmission) => {
                const errors = {} as any;
                if (!values.name) {
                  errors.name = locData.required;
                }
                if (!values.email) {
                  errors.email = locData.required;
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.message) {
                  errors.message = locData.required;
                }
                return errors;
              }}
              onSubmit={(values) => {
                setFormIsSubmitting(false);
                showNotification(locData.success, "success");
                setFormData({
                  name: values.name,
                  email: values.email,
                  message: values.message,
                });
              }}
            >
              {({ submitForm }) => (
                <Form>
                  <Card>
                    <CardContent sx={{ p: 0 }}>
                      <Field
                        sx={styles.formField}
                        component={TextField}
                        variant="standard"
                        name="name"
                        type="text"
                        label={locData.name}
                        required
                      />

                      <Field
                        sx={styles.formField}
                        component={TextField}
                        variant="standard"
                        name="email"
                        type="email"
                        label={locData.email}
                        required
                      />

                      <Field
                        sx={styles.formField}
                        type="text"
                        component={TextField}
                        variant="standard"
                        name="message"
                        label={locData.message}
                        required
                        multiline
                        rows={4}
                      />
                    </CardContent>
                    <CardActions>
                      <Button
                        className="ml-2"
                        color="primary"
                        variant="contained"
                        disabled={formIsSubmitting}
                        onClick={submitForm}
                      >
                        {locData.save}
                      </Button>
                    </CardActions>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}


================================================================================
// File: src/pages/Home.tsx
================================================================================
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
// material-ui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// services
import AuthService from "services/AuthService";
import LocalizationService from "services/LocalizationService";
import GeoService from "services/GeoService";
import NotificationsService from "services/NotificationsService";
// components
import ModalDialog from "components/Shared/ModalDialog";
import LoadingIndicator from "components/Shared/LoadingIndicator";
import GetStartedMessage from "components/Home/GetStartedMessage";

function Home() {
  const [userSignedIn, setUserSignedIn] = useState<boolean>(false);
  const [locData, setLocData] = useState<Record<string, string>>({});
  const [modalDemoState, setModalDemoState] = useState<boolean>(false);
  const [userIpAddressState, setUserIpAddressState] = useState<string>("");
  const [isLoadingState, setIsLoadingState] = useState<boolean>(false);

  const authService = useMemo(AuthService, []);
  const localizationService = useMemo(LocalizationService, []);
  const geoService = useMemo(GeoService, []);
  const notificationsService = useMemo(NotificationsService, []);

  useEffect(() => {
    let userHasSignedIn = authService.userHasSignedIn();
    setUserSignedIn(userHasSignedIn);
  }, [authService]);

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          "welcome",
          "homepagewelcome",
          "aboutdescription",
          "getstartedmessage",
          "notifications",
          "notificationsdescription",
          "modals",
          "modalsdescription",
          "error",
          "success",
          "view",
          "close",
          "authenticatedcontent",
          "authenticatedcontentdescription",
          "services",
          "serviceexampletitle",
          "serviceexampledescription",
          "forms",
          "formsexample",
          "formsexampledescription",
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, [localizationService]);

  const showNotification = (message, type) => {
    notificationsService.show(message, type);
  };

  const showIpAddressUsingHttpClient = async () => {
    setUserIpAddressState("");
    setIsLoadingState(true);
    await geoService.getCurrentIPAddress().then((response) => {
      if (response && response.ip) {
        setUserIpAddressState(response.message);
        setIsLoadingState(false);
      } else {
        setUserIpAddressState("Error occurred");
        setIsLoadingState(false);
      }
    });
  };

  const IpAddressDisplay = () => {
    if (!isLoadingState && userIpAddressState.length > 0) {
      return <p className="mt-2">{userIpAddressState}</p>;
    } else {
      return <LoadingIndicator loading={isLoadingState} size={20} />;
    }
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} className="contentpanel-site">
        <h2>{locData.homepagewelcome}</h2>

        <Grid container spacing={0}>
          <Grid item xs={12}>
            <GetStartedMessage locData={locData} displayGetStarted={true} />
          </Grid>
          <Grid item xs={12} className="pt-1">
            {userSignedIn && (
              <Grid container>
                <Grid item xs={12} className="pt-1">
                  <Card>
                    <CardContent>
                      <h4 className="card-title">
                        {locData.authenticatedcontent}
                      </h4>
                      <p>{locData.authenticatedcontentdescription}</p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}

            <Grid container>
              <Grid item xs={12} className="pt-1 pb-1">
                <Card className="card bl-1 bb-1">
                  <CardContent>
                    <h4 className="card-title">{locData.notifications}</h4>
                    <p>{locData.notificationsdescription}</p>
                  </CardContent>
                  <CardActions>
                    <Button
                      className="ml-2"
                      color="secondary"
                      variant="contained"
                      onClick={() =>
                        showNotification(locData.success, "success")
                      }
                    >
                      {locData.success}
                    </Button>
                    <Button
                      className="ml-2"
                      color="secondary"
                      variant="contained"
                      onClick={() => showNotification(locData.error, "error")}
                    >
                      {locData.error}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} className="pt-1">
                <Card className="card bl-1 bb-1">
                  <CardContent>
                    <h4 className="card-title">{locData.modals}</h4>
                    <p>{locData.modalsdescription}</p>
                  </CardContent>
                  <CardActions>
                    <Button
                      className="ml-2"
                      color="secondary"
                      variant="contained"
                      onClick={() => setModalDemoState(true)}
                    >
                      {locData.view}
                    </Button>
                  </CardActions>
                </Card>

                <ModalDialog
                  title={locData.welcome}
                  open={modalDemoState}
                  onClose={() => setModalDemoState(false)}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                    <Box sx={{ p: 2 }}>{locData.homepagewelcome}</Box>
                    <Box sx={{ p: 2 }}>{locData.aboutdescription}</Box>
                    <Box sx={{ p: 2 }}>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => setModalDemoState(false)}
                      >
                        {locData.close}
                      </Button>
                    </Box>
                  </Box>
                </ModalDialog>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} className="pt-1">
                <Card className="card bl-1 bb-1">
                  <CardContent>
                    <h4 className="card-title">{locData.services}</h4>
                    <p>{locData.serviceexampledescription}</p>
                    <Button
                      className="mt-3"
                      color="secondary"
                      variant="contained"
                      onClick={showIpAddressUsingHttpClient}
                    >
                      {locData.serviceexampletitle}
                    </Button>
                    <IpAddressDisplay />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} className="pt-1">
                <Card>
                  <CardContent>
                    <h4 className="card-title">{locData.forms}</h4>
                    <p>{locData.formsexampledescription}</p>
                    <Button
                      className="mt-3"
                      color="secondary"
                      variant="contained"
                      component={Link}
                      to="/contact/testnameparam"
                    >
                      {locData.formsexample}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;


================================================================================
// File: src/pages/Settings.tsx
================================================================================
import { useState, useEffect, useMemo } from "react";
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
import LocalizationService from "services/LocalizationService";
import LocalCacheService from "services/LocalCacheService";
import NotificationsService from "services/NotificationsService";

function Settings() {
  const [locData, setLocData] = useState<Record<string, string>>({});
  const [settingsState, setSettingsState] = useState<string>(
    DEFAULT_COLOR_SETTING
  );

  const localizationService = useMemo(LocalizationService, []);
  const localCacheService = useMemo(LocalCacheService, []);
  const notificationsService = useMemo(NotificationsService, []);

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        ["settings", "settingscolor", "settingsdescription", "success"],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, [localizationService, localCacheService]);

  useEffect(() => {
    let colorSetting = localCacheService.get("color", DEFAULT_COLOR_SETTING);

    setSettingsState(colorSetting);
  }, [localCacheService]);

  const setColor = (color) => {
    localCacheService.set("color", color);
    setSettingsState(color);
    showNotification(locData.success, "success");
    reloadWindow();
  };

  const showNotification = (message, type) => {
    notificationsService.show(message, type);
  };

  const ColorButtons = () => {
    let colorsArray: any = [];
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
          <h3>{locData.settings}</h3>

          <Card>
            <CardContent>
              <h4 className="card-title">{locData.settingscolor}</h4>
              <p className="card-text">{locData.settingsdescription}</p>
            </CardContent>
            <CardActions>
              <ColorButtons />
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Settings;


================================================================================
// File: src/routing/PageRouter.tsx
================================================================================
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingIndicator from "components/Shared/LoadingIndicator";

const HomePage = React.lazy(() => import("pages/Home"));
const AboutPage = React.lazy(() => import("pages/About"));
const ContactPage = React.lazy(() => import("pages/Contact"));
const SettingsPage = React.lazy(() => import("pages/Settings"));

const PageRouter = (
  <Suspense fallback={<LoadingIndicator loading />}>
    <Routes>
      <Route path="/" key="home" element={<HomePage />} />
      <Route path="/about" key="about" element={<AboutPage />} />
      <Route
        path="/contact/:name"
        key="contact-name"
        element={<ContactPage />}
      />
      <Route path="/contact" key="contact" element={<ContactPage />} />
      <Route path="/settings" key="settings" element={<SettingsPage />} />
      <Route path="*" key="404" element={<HomePage />} />;
    </Routes>
  </Suspense>
);

export default PageRouter;


================================================================================
// File: src/services/AuthService.ts
================================================================================
const AuthService = () => {
  const userHasSignedIn = () => {
    let signedInVal = window.localStorage.getItem("usersignedin");
    if (signedInVal) {
      return signedInVal === "true";
    }
    return false;
  };

  const setUserHasSignedIn = (signedInVal) => {
    window.localStorage.setItem("usersignedin", signedInVal);
  };

  const signIn = () => {
    setUserHasSignedIn(true);
  };

  const signOut = () => {
    setUserHasSignedIn(false);
  };

  return {
    userHasSignedIn,
    setUserHasSignedIn,
    signIn,
    signOut,
  };
};

export default AuthService;


================================================================================
// File: src/services/GeoService.ts
================================================================================
import HttpClient from "services/HttpClient";
import GeoServiceLocation from "models/GeoServiceLocation";

/* See: https://ipwhois.io/documentation */
const GeoService = () => {
  const getCurrentIPAddress = async (): Promise<GeoServiceLocation> => {
    const client = HttpClient();
    let url = "https://ipwho.is/";
    return await client.getData(url).then((response) => {
      let geoResult = response.data;

      let location = {
        ip: response.data.ip,
        city: geoResult.city,
        region: geoResult.region,
        country: geoResult.country,
        latitude: geoResult.latitude,
        longitude: geoResult.longitude,
        message: `Your ip is ${geoResult.ip} and your location: ${geoResult.latitude}, ${geoResult.longitude} which is in ${geoResult.city}, ${geoResult.region} ${geoResult.country}`,
      } as GeoServiceLocation;

      return location;
    });
  };

  return {
    getCurrentIPAddress,
  };
};

export default GeoService;


================================================================================
// File: src/services/HttpClient.ts
================================================================================
/*
	Encapsulates all outbound http communication from the application to get/set data
	and forms	the basic building block and adaptor for http requests made by the application.
	Also provides way to set auth headers needed by some requests
*/
const HttpClient = () => {
  const fetchResponseHandler = (response) => {
    // Wraps fetch response and traps most errors and returns raw response as well.
    // Ensures consisten response in form of:
    // {data: [PAYLOADRETURNED_MAY_BE_JSON], code: response.status, response: response }
    if (response.ok) {
      return response
        .json()
        .then((json) => {
          // the status was ok and there is a json body
          return Promise.resolve({
            data: json,
            code: response.status,
            response: response,
          });
        })
        .catch(() => {
          // the status was ok but there is no json body
          return Promise.resolve({
            data: response,
            code: response.status,
            response: response,
          });
        });
    } else {
      return response
        .json()
        .catch(() => {
          // the status was not ok and there is no json body
          return Promise.resolve({
            data: response.statusText,
            code: response.status,
            response: response,
          });
        })
        .then((json) => {
          // the status was not ok but there is a json body
          return Promise.resolve({
            data: json.error.message,
            code: response.status,
            response: response,
          });
        });
    }
  };

  // Modern fetch based methods to put into full use
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const getDataAuthenticated = async (url, token) => {
    return await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      return fetchResponseHandler(response);
    });
  };

  const getData = async (url) => {
    return await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      return fetchResponseHandler(response);
    });
  };

  const postData = async (url, data = {}, token) => {
    let postHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    if (token && token.length) {
      postHeaders["Authorization"] = "Bearer " + token;
    }
    return await fetch(url, {
      method: "POST",
      headers: postHeaders,
      body: JSON.stringify(data),
    }).then((response) => {
      return fetchResponseHandler(response);
    });
  };

  return {
    getData,
    getDataAuthenticated,
    postData,
  };
};

export default HttpClient;


================================================================================
// File: src/services/LocalCacheService.ts
================================================================================
// service for working with local storage in browser
const LocalCacheService = () => {
  const localStorageSupported =
    typeof window["localStorage"] != "undefined" &&
    window["localStorage"] != null;

  // add data having given key to storage
  const set = (key, data) => {
    if (localStorageSupported) {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
    }
  };

  // get data by key from storage
  const get = (key, defaultValue) => {
    if (localStorageSupported) {
      const data = localStorage.getItem(key);
      if (data === null) {
        return defaultValue;
      }
      try {
        return JSON.parse(data);
      } catch (error) {
        return defaultValue;
      }
    } else {
      return defaultValue;
    }
  };

  // remove value from storage
  const remove = (key) => {
    if (localStorageSupported) {
      localStorage.removeItem(key);
    }
  };

  // remove all items from storage
  const clear = () => {
    if (localStorageSupported) {
      localStorage.clear();
    }
  };

  return {
    set,
    get,
    remove,
    clear,
  };
};

export default LocalCacheService;


================================================================================
// File: src/services/LocalizationService.ts
================================================================================
const supportedLanguageMap = {
  enUS: "English",
  zhCN: "Chinese",
  esES: "Spanish",
};

const LocalizationService = () => {
  const defaultLocale = "enUS";

  const getLocales = () => {
    return supportedLanguageMap;
  };

  const getUserLocale = () => {
    let locale = window.localStorage.getItem("locale");
    if (locale) {
      return locale;
    }
    return defaultLocale;
  };

  const setUserLocale = (loc) => {
    window.localStorage.setItem("locale", loc);
  };

  const getCurrentLocale = () => {
    // OPTIONAL ADDITION: lookup current user local via browser and populate found and return this
    // https://github.com/i18next/i18next-browser-languageDetector/blob/master/src/browserLookups/navigator.js
    // see also: https://github.com/i18next/i18next-browser-languageDetector/blob/master/src/browserLookups/querystring.js
    // or https://github.com/i18next/i18next-browser-languageDetector/blob/master/src/browserLookups/path.js
    let found = [];
    if (found.length === 0) {
      return getUserLocale();
    }
    return found[0];
  };

  const getLocalizedTextSet = async (keys, locale) => {
    // async import the locale file for given locale
    // and extract the set of localized text values for given keys
    let textSet = {};
    const localizedData = await getLocalizedData(locale);
    if (localizedData) {
      let localizedTextSet = localizedData;
      const keysLocalizedTextSet = Object.keys(localizedTextSet);
      for (const desiredKey of keys) {
        for (const key of keysLocalizedTextSet) {
          if (desiredKey === key) {
            textSet[key] = localizedTextSet[key];
          }
        }
      }
    }
    return textSet;
  };

  const getLocalizedData = async (localeCode) => {
    // get data from folder in public by locale using fetch
    const localizedDataFilePath =
      process.env.PUBLIC_URL + `/i18n/${localeCode}.json`;
    return fetch(localizedDataFilePath)
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        let msg = "Error Reading data " + err;
        console.log(msg);
      });
  };

  return {
    setUserLocale,
    getUserLocale,
    getLocales,
    getCurrentLocale,
    getLocalizedTextSet,
  };
};

export default LocalizationService;


================================================================================
// File: src/services/NotificationsService.ts
================================================================================
import { useSnackbar, VariantType } from "notistack";

/* Notifications Service - encapsulates collection of "Toast" style 
messages of given type (eg success, warning, error) 

NOTE: Assumes setup of notistack SnackbarProvider at the application level
*/
const NotificationsService = () => {
  const { enqueueSnackbar } = useSnackbar();

  const show = (msg: string, type?: string) => {
    addNotification(msg, type ? (type as VariantType) : "success");
  };

  const success = (msg: string) => {
    addNotification(msg, "success");
  };

  const error = (msg: string) => {
    addNotification(msg, "error");
  };

  const info = (msg: string) => {
    addNotification(msg, "info");
  };

  const addNotification = (msg: string, type: VariantType) => {
    // variant can be success, error, warning, info, or default
    enqueueSnackbar(msg, { variant: type });
  };

  return {
    show,
    success,
    error,
    info,
  };
};

export default NotificationsService;


================================================================================
// File: src/setupTests.ts
================================================================================
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";


================================================================================
// File: src/styling/Application.scss
================================================================================
@import url('//fonts.googleapis.com/css?family=Roboto');

:root {
  /* NOT changed in theming */
  --light-text: #f5f5f5;
  --dark-grey: #757575;
}

/*
https://www.materialpalette.com/colors
*/

/* VARS */
$white: #FFFFFF;
$black: #212121;
$grey-darkest: #303030;
$grey-dark: #424242;
$grey-primary: #757575;
$grey-med: #999999;
$grey-medlight: #c0c0c0;
$grey-light: #e3e3e3;
$grey-lightest: #fafafa;

html,
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a,
a:hover,
a:focus {
  color: var(--link-color);
  text-decoration: none;
  outline: none !important;
}

h1 {
  font-size: 2em;
  font-weight: 400;
}
h2 {
  font-size: 1.8em;
  font-weight: 500;
}
h3 {
  font-size: 1.6em;
  font-weight: 500;
}
h4 {
  font-size: 1.4em;
  font-weight: 500;
}
h5 {
  font-size: 1.2em;
  font-weight: 500;
}

.h1,
.h2,
.h3,
.h4,
.h5,
h1,
h2,
h3,
h4,
h5 {
  padding: 0;
  margin: 5px 0 0 0;
}

/*
Utilities - inspired by https://getbootstrap.com/docs/4.0/utilities/sizing/ 
	and https://getbootstrap.com/docs/4.0/utilities/spacing/ 
*/
.full-width {
  width: 100% !important;
}
.width-100 {
  width: 100% !important;
}
.width-80 {
  width: 80% !important;
}
.width-75 {
  width: 75% !important;
}
.width-50 {
  width: 50% !important;
}
.width-25 {
  width: 25% !important;
}
.width-20 {
  width: 20% !important;
}

.flex-center {
  justify-content: center !important;
  align-items: center !important;
}

button.text-left {
  text-align: left !important;
}
.text-left {
  text-align: left !important;
}
.text-center {
  text-align: center !important;
}
.text-right {
  text-align: right !important;
}
.text-lowercase {
  text-transform: lowercase !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.text-capitalize {
  text-transform: capitalize !important;
}
.text-bold {
  font-weight: 600;
}

.scrollable {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.br-0 {
  border-radius: 0 !important;
}

.p-0 {
  padding: 0 !important;
}
.p-1 {
  padding: 0.25em !important;
}
.p-2 {
  padding: 0.5em !important;
}
.p-3 {
  padding: 1em !important;
}
.pt-1 {
  padding-top: 0.25em !important;
}
.pt-2 {
  padding-top: 0.5em !important;
}
.pt-3 {
  padding-top: 1em !important;
}
.pr-1 {
  padding-right: 0.25em !important;
}
.pr-2 {
  padding-right: 0.5em !important;
}
.pr-3 {
  padding-right: 1em !important;
}
.pb-1 {
  padding-bottom: 0.25em !important;
}
.pb-2 {
  padding-bottom: 0.5em !important;
}
.pb-3 {
  padding-bottom: 1em !important;
}
.pl-1 {
  padding-left: 0.25em !important;
}
.pl-2 {
  padding-left: 0.5em !important;
}
.pl-3 {
  padding-left: 1em !important;
}
.m-0 {
  margin: 0 !important;
}
.m-1 {
  margin: 0.25em !important;
}
.m-2 {
  margin: 0.5em !important;
}
.m-3 {
  margin: 1em !important;
}
.mt-1 {
  margin-top: 0.25em !important;
}
.mt-2 {
  margin-top: 0.5em !important;
}
.mt-3 {
  margin-top: 1em !important;
}
.mr-1 {
  margin-right: 0.25em !important;
}
.mr-2 {
  margin-right: 0.5em !important;
}
.mr-3 {
  margin-right: 1em !important;
}
.mb-1 {
  margin-bottom: 0.25em !important;
}
.mb-2 {
  margin-bottom: 0.5em !important;
}
.mb-3 {
  margin-bottom: 1em !important;
}
.ml-1 {
  margin-left: 0.25em !important;
}
.ml-2 {
  margin-left: 0.5em !important;
}
.ml-3 {
  margin-left: 1em !important;
}

.small,
small {
  font-size: 80%;
  font-weight: 400;
}

.b-1 {
  border: 1px solid $grey-light;
}
.bt-1 {
  border-top: 1px solid $grey-light !important;
}
.bb-1 {
  border-bottom: 1px solid $grey-light;
}

.no-wrap {
  white-space: nowrap;
}
.hidden {
  display: none;
}

/** Form Elements */
form {
  margin: 0;
}

button {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0 !important;
  background-image: none;
  -webkit-text-shadow: none;
  text-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  min-width: 36px !important;
}

input:focus,
textarea:focus {
  border-color: $grey-primary;
  color: $black;
  background-color: $grey-lightest;
  outline: 0;
  outline: thin solid \9;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

textarea:focus,
textarea:focus.form-control,
select:focus.form-control,
input[type='text']:focus {
  border-color: $grey-primary;
  outline: 0;
  outline: thin dotted \9;
  background-image: none;
}

textarea,
input {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}

.input-append input,
.input-append select {
  border-radius: 0;
}

/* "Toast" Notifications setup via notistack via SnackbarProvider  */
.notistack-SnackbarContainer.z-alert {
  z-index: 20000;
}

/* Global Resets for tablet and down */

@media all and (max-width: 768px) {
  h1 {
    font-size: 1.6em;
  }
  h2 {
    font-size: 1.6em;
  }
  h3 {
    font-size: 1.2em;
  }
  h4 {
    font-size: 1.2em;
  }
  h5 {
    font-size: 1em;
  }

  .MuiButton-textPrimary {
    padding: 5px 10px !important;
  }
}


================================================================================
// File: src/styling/colors.ts
================================================================================
/* 
Material UI Palette
https://materialui.co/colors 
https://gist.github.com/kawanet/a880c83f06d6baf742e45ac9ac52af96
*/

export const appGrey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161",
};

/* Colors yellow, amber, lime removed as they are too light */

export const colors = {
  /*
  yellow: {
    "50": "#fffde7",
    "100": "#fff9c4",
    "200": "#fff59d",
    "300": "#fff176",
    "400": "#ffee58",
    "500": "#ffeb3b",
    "600": "#fdd835",
    "700": "#fbc02d",
    "800": "#f9a825",
    "900": "#f57f17",
    A100: "#fff9c4",
    A200: "#fff59d",
    A400: "#ffee58",
    A700: "#fbc02d",
  },
  amber: {
    "50": "#fff8e1",
    "100": "#ffecb3",
    "200": "#ffe082",
    "300": "#ffd54f",
    "400": "#ffca28",
    "500": "#ffc107",
    "600": "#ffb300",
    "700": "#ffa000",
    "800": "#ff8f00",
    "900": "#ff6f00",
    A100: "#ffecb3",
    A200: "#ffe082",
    A400: "#ffca28",
    A700: "#ffa000",
  }, */
  orange: {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffe0b2",
    A200: "#ffcc80",
    A400: "#ffa726",
    A700: "#f57c00",
  },
  deeporange: {
    50: "#fbe9e7",
    100: "#ffccbc",
    200: "#ffab91",
    300: "#ff8a65",
    400: "#ff7043",
    500: "#ff5722",
    600: "#f4511e",
    700: "#e64a19",
    800: "#d84315",
    900: "#bf360c",
    A100: "#ffccbc",
    A200: "#ffab91",
    A400: "#ff7043",
    A700: "#e64a19",
  },
  red: {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ffcdd2",
    A200: "#ef9a9a",
    A400: "#ef5350",
    A700: "#d32f2f",
  },
  pink: {
    50: "#fce4ec",
    100: "#f8bbd0",
    200: "#f48fb1",
    300: "#f06292",
    400: "#ec407a",
    500: "#e91e63",
    600: "#d81b60",
    700: "#c2185b",
    800: "#ad1457",
    900: "#880e4f",
    A100: "#f8bbd0",
    A200: "#f48fb1",
    A400: "#ec407a",
    A700: "#c2185b",
  },
  purple: {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#e1bee7",
    A200: "#ce93d8",
    A400: "#ab47bc",
    A700: "#7b1fa2",
  },
  deeppurple: {
    50: "#ede7f6",
    100: "#d1c4e9",
    200: "#b39ddb",
    300: "#9575cd",
    400: "#7e57c2",
    500: "#673ab7",
    600: "#5e35b1",
    700: "#512da8",
    800: "#4527a0",
    900: "#311b92",
    A100: "#d1c4e9",
    A200: "#b39ddb",
    A400: "#7e57c2",
    A700: "#512da8",
  },
  indigo: {
    50: "#e8eaf6",
    100: "#c5cae9",
    200: "#9fa8da",
    300: "#7986cb",
    400: "#5c6bc0",
    500: "#3f51b5",
    600: "#3949ab",
    700: "#303f9f",
    800: "#283593",
    900: "#1a237e",
    A100: "#c5cae9",
    A200: "#9fa8da",
    A400: "#5c6bc0",
    A700: "#303f9f",
  },
  blue: {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#bbdefb",
    A200: "#90caf9",
    A400: "#42a5f5",
    A700: "#1976d2",
  },
  lightblue: {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#b3e5fc",
    A200: "#81d4fa",
    A400: "#29b6f6",
    A700: "#0288d1",
  },
  cyan: {
    50: "#e0f7fa",
    100: "#b2ebf2",
    200: "#80deea",
    300: "#4dd0e1",
    400: "#26c6da",
    500: "#00bcd4",
    600: "#00acc1",
    700: "#0097a7",
    800: "#00838f",
    900: "#006064",
    A100: "#b2ebf2",
    A200: "#80deea",
    A400: "#26c6da",
    A700: "#0097a7",
  },
  teal: {
    50: "#e0f2f1",
    100: "#b2dfdb",
    200: "#80cbc4",
    300: "#4db6ac",
    400: "#26a69a",
    500: "#009688",
    600: "#00897b",
    700: "#00796b",
    800: "#00695c",
    900: "#004d40",
    A100: "#b2dfdb",
    A200: "#80cbc4",
    A400: "#26a69a",
    A700: "#00796b",
  },
  green: {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#c8e6c9",
    A200: "#a5d6a7",
    A400: "#66bb6a",
    A700: "#388e3c",
  },
  lightgreen: {
    50: "#f1f8e9",
    100: "#dcedc8",
    200: "#c5e1a5",
    300: "#aed581",
    400: "#9ccc65",
    500: "#8bc34a",
    600: "#7cb342",
    700: "#689f38",
    800: "#558b2f",
    900: "#33691e",
    A100: "#dcedc8",
    A200: "#c5e1a5",
    A400: "#9ccc65",
    A700: "#689f38",
  } /*
  lime: {
    "50": "#f9fbe7",
    "100": "#f0f4c3",
    "200": "#e6ee9c",
    "300": "#dce775",
    "400": "#d4e157",
    "500": "#cddc39",
    "600": "#c0ca33",
    "700": "#afb42b",
    "800": "#9e9d24",
    "900": "#827717",
    A100: "#f0f4c3",
    A200: "#e6ee9c",
    A400: "#d4e157",
    A700: "#afb42b",
  },
  brown: {
    50: "#efebe9",
    100: "#d7ccc8",
    200: "#bcaaa4",
    300: "#a1887f",
    400: "#8d6e63",
    500: "#795548",
    600: "#6d4c41",
    700: "#5d4037",
    800: "#4e342e",
    900: "#3e2723",
    A100: "#d7ccc8",
    A200: "#bcaaa4",
    A400: "#8d6e63",
    A700: "#5d4037",
  }*/,
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  bluegrey: {
    50: "#eceff1",
    100: "#cfd8dc",
    200: "#b0bec5",
    300: "#90a4ae",
    400: "#78909c",
    500: "#607d8b",
    600: "#546e7a",
    700: "#455a64",
    800: "#37474f",
    900: "#263238",
    A100: "#cfd8dc",
    A200: "#b0bec5",
    A400: "#78909c",
    A700: "#455a64",
  },
};

export const getColor = (colorKey) => {
  return colors[colorKey];
};


================================================================================
// File: src/styling/theming.ts
================================================================================
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


================================================================================
// File: src/utils.ts
================================================================================
export const APPBASEPATH = "react-project-accelerator";

export const reloadWindow = (route?: string): void => {
  const routeReloadSegment = route ? route : "";
  const newUrl = window.location.origin
    ? window.location.origin + "/" + APPBASEPATH + routeReloadSegment
    : window.location.protocol +
      "/" +
      window.location.host +
      "/" +
      APPBASEPATH +
      routeReloadSegment;

  window.location.replace(newUrl);
};

export function capitalize(value) {
  if (value && value.length > 0) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return value;
}

export const pascalCaseUnHyphenated = (value) => {
  return (value || "").toLowerCase().replace(/(\b|-)\w/g, function (m) {
    return m.toUpperCase().replace(/-/, " ");
  });
};

export const generateId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


================================================================================
// File: tsconfig.json
================================================================================
{
  "compilerOptions": {    
    "baseUrl": "src",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "noImplicitAny": false, 
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}

