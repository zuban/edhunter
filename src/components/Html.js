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
import config from '../config';

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
    const {title, description, styles, scripts, app, children} = this.props;
    return (
      <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <title>
          {title}
        </title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {scripts.map(script =>
          <link key={script} rel="preload" href={script} as="script"/>,
        )}
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&amp;subset=cyrillic"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
        {styles.map(style =>
          <style
            key={style.id}
            id={style.id}
            dangerouslySetInnerHTML={{__html: style.cssText}}
          />,
        )}
      </head>
      <body>
      <div id="app" dangerouslySetInnerHTML={{__html: children}}/>
      <script
        dangerouslySetInnerHTML={{__html: `window.App=${serialize(app)}`}}
      />
      {scripts.map(script => <script key={script} src={script}/>)}
      {
        <script
          dangerouslySetInnerHTML={{
            __html: '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){' +
            ' (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),' +
            'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)' +
            '})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');' +
            'ga(\'create\', \'UA-104645744-1\', \'auto\');' +
            'ga(\'send\', \'pageview\');'
          }}
        />}
      {
        <script
          dangerouslySetInnerHTML={{
            __html: '(function (d, w, c) {' +
            '(w[c] = w[c] || []).push(function() {' +
            'try {' +
            'w.yaCounter45269349 = new Ya.Metrika({' +
            'id:45269349,' +
            'clickmap:true,' +
            'trackLinks:true,' +
            'accurateTrackBounce:true,' +
            'webvisor:true,' +
            'trackHash:true' +
            '});' +
            '} catch(e) { }' +
            '});' +
            'var n = d.getElementsByTagName("script")[0],' +
            's = d.createElement("script"),' +
            'f = function () { n.parentNode.insertBefore(s, n); };' +
            's.type = "text/javascript";' +
            's.async = true;' +
            's.src = "https://mc.yandex.ru/metrika/watch.js";' +
            'if (w.opera == "[object Opera]") {' +
            'd.addEventListener("DOMContentLoaded", f, false);' +
            '} else { f(); }' +
            '})(document, window, "yandex_metrika_callbacks");'
          }}
        />}
      {
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/45269349" style="position:absolute; left:-9999px;" alt=""/></div>
        </noscript>
      }
      </body>
      </html>
    );
  }
}

export default Html;
