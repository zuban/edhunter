/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
// import config from '../config';

import appleIcon57 from '../favicon/apple-icon-57x57.png';
import appleIcon60 from '../favicon/apple-icon-60x60.png';
import appleIcon72 from '../favicon/apple-icon-72x72.png';
import appleIcon76 from '../favicon/apple-icon-76x76.png';
import appleIcon114 from '../favicon/apple-icon-114x114.png';
import appleIcon120 from '../favicon/apple-icon-120x120.png';
import appleIcon144 from '../favicon/apple-icon-144x144.png';
import appleIcon152 from '../favicon/apple-icon-152x152.png';
import appleIcon180 from '../favicon/apple-icon-180x180.png';
import androidIcon192 from '../favicon/android-icon-192x192.png';
import favicon32 from '../favicon/favicon-32x32.png';
import favicon96 from '../favicon/favicon-96x96.png';
import favicon16 from '../favicon/favicon-16x16.png';
import manifest from '../favicon/manifest.json';
import msIcon144 from '../favicon/ms-icon-144x144.png';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired,
      }).isRequired,
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>
            {title}
          </title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57} />
          <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60} />
          <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72} />
          <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76} />
          <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114} />
          <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120} />
          <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144} />
          <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152} />
          <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180} />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={androidIcon192}
          />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="manifest" href={manifest} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content={msIcon144} />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          {
            <script
              id="mcjs"
              dangerouslySetInnerHTML={{
                __html: ` !function(c,h,i,m,p){m = c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/db8555557d6e3e6c079798299/126a61b8f8ecb8734fc4fdac7.js");`,
              }}
            />
          }
          {scripts.map(script =>
            <link key={script} rel="preload" href={script} as="script" />,
          )}
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          {styles.map(style =>
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />,
          )}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {scripts.map(script => <script key={script} src={script} />)}
          <div id="fb-root" />
          {
            <script
              dangerouslySetInnerHTML={{
                __html:
                  `(function(d, s, id) {` +
                  `var js, fjs = d.getElementsByTagName(s)[0];` +
                  `if (d.getElementById(id)) return;` +
                  `js = d.createElement(s); js.id = id;` +
                  `js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.10&appId=342185052891354";` +
                  `fjs.parentNode.insertBefore(js, fjs);` +
                  `}(document, 'script', 'facebook-jssdk'))`,
              }}
            />
          }
          {
            <script
              dangerouslySetInnerHTML={{
                __html:
                  "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
                  ' (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),' +
                  'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)' +
                  "})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');" +
                  "ga('create', 'UA-104645744-1', 'auto');" +
                  "ga('send', 'pageview');",
              }}
            />
          }
          {
            <script
              dangerouslySetInnerHTML={{
                __html:
                  `try {` +
                  `var yaCounter45269349 = new Ya.Metrika({` +
                  `id:45269349,` +
                  `clickmap:true,` +
                  `trackLinks:true,` +
                  `accurateTrackBounce:true,` +
                  `webvisor:true` +
                  `});` +
                  `} catch(e) { }`,
              }}
            />
          }
          <script
            src="https://mc.yandex.ru/metrika/watch.js"
            type="text/javascript"
          />
          <div id="vk_community_messages"></div>
          {
            <script
              dangerouslySetInnerHTML={{
                __html:
                `VK.Widgets.CommunityMessages("vk_community_messages", 151080301, {expandTimeout: "30000",tooltipButtonText: "Есть вопрос?"});`
              }}
            />
          }
        </body>
      </html>
    );
  }
}

export default Html;
