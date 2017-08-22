/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Java from './Java';

function action() {
  return {
    chunks: ['java'],
    title:
      'Курс JAVA. Данный курс предназначен для тех, кто хочет сделать Java своим основным языком. В начале курса коротко рассматриваются основные концепции и синтаксические особенности языка и далее разбираются уже сложные и интересные возможности платформы Java.',
    component: (
      <Layout>
        <Java />
      </Layout>
    ),
  };
}

export default action;
