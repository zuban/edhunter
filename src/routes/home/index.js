/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{me{name,email}}',
    }),
  });
  const { data } = await resp.json();
  return {
    chunks: ['home'],
    title: 'EdHunter - образование',
    component: (
      <Layout profile={data}>
        <Home />
      </Layout>
    ),
  };
}

export default action;
