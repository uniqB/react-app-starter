This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents
- [What is this?](#what-is-this)
- [Install](#install)
- [Run](#run)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
  - [npm run build:staging](#npm-run-build-staging)
  - [npm run build:production](#npm-run-build-production)
- [Custom Environment Variables](#custom-environment-variables)

## What is this?
This project is a simple, clean boilerplate to start a real world React web app.

This includes:
* [react]()
* [redux](https://github.com/reactjs/redux)
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [react-router-router](https://github.com/reactjs/react-router-redux)

And more:
* Styling with [bootstrap](https://github.com/twbs/bootstrap)
* Fetching data from server with [axios](https://github.com/axios/axios)
* Dependencies injection async client
* Redux middleware

Coming soon: for high performance and scalable web app
* [immutable](https://github.com/facebook/immutable-js/)
* [reselect](https://github.com/reactjs/reselect)
* [redux-saga](https://github.com/redux-saga/redux-saga)

## Install
* Install react app `npm install`
* Install mock server `cd mock-server` then `npm install`

## Run
* Run web app `npm start`
* For demo of login and fetching server data you need to run the mock server `cd mock-server` then `npm start`

## Folder Structure

After creation, your project should look like this:

```
react-app-stater/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions
    assets
    components
    containers
      routes
      App.js
    reducers
    store
    utils
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.

You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.

`components` folder: presentation components should be here.

`containers` folder: container components should be placed here.

A great article about presentation and container components is [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run build:staging`

Builds the app for with `.env.staging` to the `build` folder.<br>

### `npm run build:production`

Builds the app for with `.env.production` to the `build` folder.<br>

## Custom Environment Variables
* Variables can be defined in your shell or in a .env file at the project root.
* Only variables starting with REACT_APP_ are imported.
* Imported values are placed in process.env, for example process.env.REACT_APP_SECRET_CODE.
* The development server must be restarted to see new/updated variables.
* Variables from the shell take precedence those in a .env file.
* The value of NODE_ENV is set automatically to development (when using npm start) or production (when using npm build). Thus, from the point of view of create-react-app, there are only two environments.