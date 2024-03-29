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
