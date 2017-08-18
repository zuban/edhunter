/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import express from 'express';
import expressValidator from 'express-validator';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
// import expressJwt, {UnauthorizedError as Jwt401Error} from 'express-jwt';
// import expressGraphQL from 'express-graphql';
// import jwt from 'jsonwebtoken';
// import nodeFetch from 'node-fetch';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import {ErrorPageWithoutStyle} from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
// import createFetch from './createFetch';
const passport = require('passport');
import router from './router';
// import models from './data/models';
// import schema from './data/schema';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved
import configureStore from './store/configureStore';
import {setRuntimeVariable} from './actions/runtime';
const compression = require('compression');
const session = require('express-session');
const chalk = require('chalk');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
// const expressStatusMonitor = require('express-status-monitor');

/**
 * Controllers (route handlers).
 */
// const homeController = require('./controllers/home');
import userController from './controllers/user';
const educationController = require('./controllers/education');
const apiController = require('./controllers/api');
const contactController = require('./controllers/contact');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({path: '.env.example'});

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

import config from './config';
const app = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true,
    clear_interval: 3600
  })
}));

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
// //
// // Authentication
// // -----------------------------------------------------------------------------
// app.use(
//   expressJwt({
//     secret: config.auth.jwt.secret,
//     credentialsRequired: false,
//     getToken: req => req.cookies.id_token,
//   }),
// );
// // Error handler for express-jwt
// app.use((err, req, res, next) => {
//   // eslint-disable-line no-unused-vars
//   if (err instanceof Jwt401Error) {
//     console.error('[express-jwt-error]', req.cookies.id_token);
//     // `clearCookie`, otherwise user can't use web-app until cookie expires
//     res.clearCookie('id_token');
//   }
//   next(err);
// });

app.use(passport.initialize());
app.use(passport.session());

app.post('/login', userController.postLogin);
// app.get('/logout', userController.logout);
// app.get('/forgot', userController.getForgot);
app.post('/forgot', userController.postForgot);
// app.get('/reset/:token', userController.getReset);
app.post('/reset/:token', userController.postReset);
// app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);
// app.get('/signup-employer', userController.getSignupEmployer);
app.post('/signup-employer', userController.postSignup);
// app.get('/register-teacher', userController.getSignupStudent);
app.post('/api/register', userController.postSignup);
// app.get('/contact', contactController.getContact);
// app.post('/contact', contactController.postContact);
// app.get('/education', educationController.getContact);
// app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
// app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
// app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
// app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
// app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);

app.post('/api/contact', apiController.contact);
app.post('/api/news', apiController.news);
// app.get('/api/currentUser', apiController.currentUser);

// app.get('/success', apiController.success);

if (__DEV__) {
  app.enable('trust proxy');
}


/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

// app.use(expressStatusMonitor());
app.use(compression());
// //
// // Register API middleware
// // -----------------------------------------------------------------------------
// app.use(
//   '/graphql',
//   expressGraphQL(req => ({
//     schema,
//     graphiql: __DEV__,
//     rootValue: { request: req },
//     pretty: __DEV__,
//   })),
// );

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const css = new Set();

    // Universal HTTP client
    // const fetch = createFetch(nodeFetch, {
    //   baseUrl: config.api.serverUrl,
    //   cookie: req.headers.cookie,
    // });


    console.log('---------------');
    console.log(req.user);
    console.log('---------------');

    let name = null;
    if (req.user) {
      if (req.user.email)
        name = req.user.email;
      if (req.user.contactPerson)
        name = req.user.contactPerson;
      if (req.user.name)
        name = req.user.name;
    }
    const initialState = {
      user: name,
    };

    const store = configureStore(initialState, {
      // fetch,
      // I should not use `history` on server.. but how I do redirection? follow universal-router
    });

    store.dispatch(
      setRuntimeVariable({
        name: 'initialNow',
        value: Date.now(),
      }),
    );

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
      // fetch,
      // You can access redux through react-redux connect
      store,
      storeSubscription: null,
    };

    const route = await router.resolve({
      ...context,
      path: req.path,
      query: req.query,
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = {...route};
    data.children = ReactDOM.renderToString(
      <App context={context} store={store}>
        {route.component}
      </App>,
    );
    data.styles = [{id: 'css', cssText: [...css].join('')}];
    data.scripts = [assets.vendor.js];
    if (route.chunks) {
      data.scripts.push(...route.chunks.map(chunk => assets[chunk].js));
    }
    data.scripts.push(assets.client.js);
    data.app = {
      apiUrl: config.api.clientUrl,
      state: context.store.getState(),
    };

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{id: 'css', cssText: errorPageStyle._getCss()}]} // eslint-disable-line no-underscore-dangle
    >
    {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err}/>)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
  app.listen(config.port, () => {
    console.info(`The server is running at http://localhost:${config.port}/`);
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

export default app;
