// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Theme - material-ui
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'theming';
// App
import 'styles/Application.scss';
import Application from 'Application';
import ErrorHandler from 'components/ErrorHandler';

const AppShell = () => (
  <ErrorHandler>
    <MuiThemeProvider theme={theme}>
      <Router basename="react-project-accelerator">
        <Application />
      </Router>
    </MuiThemeProvider>
  </ErrorHandler>
);

ReactDOM.render(<AppShell />, document.getElementById('appshell'));
