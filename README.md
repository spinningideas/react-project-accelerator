React Project Accelerator was conceived to aid starting React JS projects and provide a reference implementation for bootstrapping projects. The project was itself bootstrapped from [create react app](https://reactjs.org/docs/create-a-new-react-app.html) and uses [react material ui](https://mui.com/) for its UX.

This application has a folder structure roughly matching https://github.com/spinningideas/resources/wiki/React-JS-Folder-Structure with the omission of redux and contexts/hooks folders for simplicity.

The project aims to include most of the basic things one needs and includes:

- localization and authorization via services based approach using hooks to manage state.
- forms and validation via [formik](https://jaredpalmer.com/formik/) and [formik-material-ui](https://stackworx.github.io/formik-mui/)
- use of a layout to layout the application pages
- use of HttpClient to call external REST API from local services
- use of local storage to cache a user setting via LocalCacheService
- testing via @testing-library/react and
- use of sass
- icons via @mui/icons-material

## Live Demo

https://spinningideas.github.io/react-project-accelerator/

## Get Started

In the project directory, you can run:

1. Install packages

`npm install`

2. Start and run the application

`npm start`

Runs the app in the development mode and launches browser to http://localhost:3000/react-project-accelerator

The page will reload if you make edits.

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

### Other Starter Kits

- https://github.com/chawk/bare_bones_react
