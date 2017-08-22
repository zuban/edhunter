/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register/student',
      load: () => import(/* webpackChunkName: 'student' */ './student'),
    },
    {
      path: '/register/company',
      load: () => import(/* webpackChunkName: 'company' */ './company'),
    },
    {
      path: '/register/teacher',
      load: () => import(/* webpackChunkName: 'teacher' */ './teacher'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/education',
      load: () => import(/* webpackChunkName: 'education' */ './education'),
    },
    {
      path: '/policy',
      load: () => import(/* webpackChunkName: 'policy' */ './policy'),
    },
    {
      path: '/java',
      load: () => import(/* webpackChunkName: 'java' */ './java'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    {
      path: '*',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title ||
      'EdHunter'} - Получи знания, заяви о себе, найди себя, открой мечту. Стань разработчиком, найди работу в ведущих IT компаниях.`;
    route.description =
      route.description ||
      'Мы помогаем IT компаниям растить правильные компетенции у кандидатов.';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
