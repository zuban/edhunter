### Getting Started

  * Follow the [getting started guide](./docs/getting-started.md) to download and run the project
    ([Node.js](https://nodejs.org/) >= 6.5)
  * Check the [code recipes](./docs/recipes) used in this boilerplate, or share yours


### Customization

The `master` branch of React Starter Kit doesn't include a Flux implementation or any other
advanced integrations. Nevertheless, we have some integrations available to you in *feature*
branches that you can use either as a reference or merge into your project:

  * [feature/redux](https://github.com/kriasoft/react-starter-kit/tree/feature/redux) ([PR](https://github.com/kriasoft/react-starter-kit/pull/1084))
    — isomorphic Redux by [Pavel Lang](https://github.com/langpavel)
    (see [how to integrate Redux](./docs/recipes/how-to-integrate-redux.md)) (based on `master`)
  * [feature/apollo](https://github.com/kriasoft/react-starter-kit/tree/feature/apollo) ([PR](https://github.com/kriasoft/react-starter-kit/pull/1147))
    — isomorphic Apollo Client by [Pavel Lang](https://github.com/langpavel)
    (see [Tracking PR #1147](https://github.com/kriasoft/react-starter-kit/pull/1147)) (based on `feature/redux`)
  * [feature/react-intl](https://github.com/kriasoft/react-starter-kit/tree/feature/react-intl) ([PR](https://github.com/kriasoft/react-starter-kit/pull/1135))
    — isomorphic Redux and React Intl by [Pavel Lang](https://github.com/langpavel)
    (see [how to integrate React Intl](./docs/recipes/how-to-integrate-react-intl.md)) (based on `feature/apollo`)

You can see status of most reasonable merge combination as [PRs labeled as `TRACKING`](https://github.com/kriasoft/react-starter-kit/labels/TRACKING)

If you think that any of these features should be on `master`, or vice versa, some features should
removed from the `master` branch, please [let us know](https://gitter.im/kriasoft/react-starter-kit).
We love your feedback!


### Comparison

<table width="100%">
  <tr>
    <th>&nbsp;</th>
    <th>
      <p>React Starter Kit</p>
      <a href="https://github.com/kriasoft/react-starter-kit"><img src="https://img.shields.io/github/stars/kriasoft/react-starter-kit.svg?style=social&label=~react-starter-kit" height="20"></a>
      <a href="https://twitter.com/ReactStarter"><img src="https://img.shields.io/twitter/follow/ReactStarter.svg?style=social&label=@ReactStarter" height="20"></a>
    </th>
    <th>
      <p>React Static Boilerplate</p>
      <a href="https://github.com/kriasoft/react-static-boilerplate"><img src="https://img.shields.io/github/stars/kriasoft/react-static-boilerplate.svg?style=social&label=~react-static-boilerplate" height="20"></a>
      <a href="https://twitter.com/ReactStatic"><img src="https://img.shields.io/twitter/follow/ReactStatic.svg?style=social&label=@ReactStatic" height="20"></a>
    </th>
    <th>
      <p>ASP.NET Core Starter Kit</p>
      <a href="https://github.com/kriasoft/aspnet-starter-kit"><img src="https://img.shields.io/github/stars/kriasoft/aspnet-starter-kit.svg?style=social&label=~aspnet-starter-kit" height="20"></a>
      <a href="https://twitter.com/dotnetreact"><img src="https://img.shields.io/twitter/follow/dotnetreact.svg?style=social&label=@dotnetreact" height="20"></a>
    </th>
  <tr>
  <tr>
    <th align="right">App type</th>
    <td align="center"><a href="http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/">Isomorphic</a> (universal)</td>
    <td align="center"><a href="https://en.wikipedia.org/wiki/Single-page_application">Single-page application</a></td>
    <td align="center"><a href="https://en.wikipedia.org/wiki/Single-page_application">Single-page application</a></td>
  </tr>
  <tr>
    <th colspan="4">Frontend</th>
  <tr>
  <tr>
    <th align="right">Language</th>
    <td align="center">JavaScript (ES2015+, JSX)</td>
    <td align="center">JavaScript (ES2015+, JSX)</td>
    <td align="center">JavaScript (ES2015+, JSX)</td>
  </tr>
  <tr>
    <th align="right">Libraries</th>
    <td align="center">
      <a href="https://github.com/facebook/react">React</a>,
      <a href="https://github.com/ReactJSTraining/history">History</a>,
      <a href="https://github.com/kriasoft/universal-router">Universal Router</a>
    </td>
    <td align="center">
      <a href="https://github.com/facebook/react">React</a>,
      <a href="https://github.com/ReactJSTraining/history">History</a>,
      <a href="https://github.com/reactjs/redux">Redux</a>
    </td>
    <td align="center">
      <a href="https://github.com/facebook/react">React</a>,
      <a href="https://github.com/ReactJSTraining/history">History</a>,
      <a href="https://github.com/reactjs/redux">Redux</a>
    </td>
  </tr>
  <tr>
    <th align="right">Routes</th>
    <td align="center">Imperative (functional)</td>
    <td align="center">Declarative</td>
    <td align="center">Declarative, cross-stack</td>
  </tr>
  <tr>
    <th colspan="4">Backend</th>
  <tr>
  <tr>
    <th align="right">Language</th>
    <td align="center">JavaScript (ES2015+, JSX)</td>
    <td align="center">n/a</td>
    <td align="center">C#, F#</td>
  </tr>
  <tr>
    <th align="right">Libraries</th>
    <td align="center">
      <a href="https://nodejs.org">Node.js</a>,
      <a href="http://expressjs.com/">Express</a>,
      <a href="http://docs.sequelizejs.com/en/latest/">Sequelize</a>,<br>
      <a href="https://github.com/graphql/graphql-js">GraphQL</a></td>
    <td align="center">n/a</td>
    <td align="center">
      <a href="https://docs.asp.net/en/latest/">ASP.NET Core</a>,
      <a href="https://ef.readthedocs.io/en/latest/">EF Core</a>,<br>
      <a href="https://docs.asp.net/en/latest/security/authentication/identity.html">ASP.NET Identity</a>
    </td>
  </tr>
  <tr>
    <th align="right"><a href="https://www.quora.com/What-are-the-tradeoffs-of-client-side-rendering-vs-server-side-rendering">SSR</a></th>
    <td align="center">Yes</td>
    <td align="center">n/a</td>
    <td align="center">n/a</td>
  </tr>
  <tr>
    <th align="right">Data API</th>
    <td align="center"><a href="http://graphql.org/">GraphQL</a></td>
    <td align="center">n/a</td>
    <td align="center"><a href="https://docs.asp.net/en/latest/tutorials/first-web-api.html">Web API</a></td>
  </tr>
</table>


### Learn More

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Getting Started with GraphQL and Relay](https://quip.com/oLxzA1gTsJsE)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
  * [Enzyme — JavaScript Testing utilities for React](http://airbnb.io/enzyme/)
  * [Flow — A static type checker for JavaScript](http://flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)


### Related Projects

  * [GraphQL Starter Kit](https://github.com/kriasoft/graphql-starter-kit) — Boilerplate for building data APIs with Node.js, JavaScript (via Babel) and GraphQL
  * [Membership Database](https://github.com/membership/membership.db) — SQL schema boilerplate for user accounts, profiles, roles, and auth claims
  * [Babel Starter Kit](https://github.com/kriasoft/babel-starter-kit) — Boilerplate for authoring JavaScript/React.js libraries

### Docker 

HOW TO
docker build -t edhunter-web .
docker run -p 3000:3000 edhunter-web


$ docker exec -it <container-id> pm2 monit	Monitoring CPU/Usage of each process
$ docker exec -it <container-id> pm2 list	Listing managed processes
$ docker exec -it <container-id> pm2 show	Get more information about a process
$ docker exec -it <container-id> pm2 reload all	0sec downtime reload all applications


