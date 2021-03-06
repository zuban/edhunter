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
import Event from './Event';
import BigmarkerEvent from './BigmarkerEvent';

function action({ path, params, query }) {
  let name = '';
  let description = '';
  let url = '';
  if (path === '/events/160717') {
    name = 'Вебинар. НЕАДЕКВАТНОЕ Java интервью';
    description = 'В блоке ВОПРОС-ОТВЕТ вы сможете задать интересующие вас вопросы.\n' +
      'Кроме того, в прямом эфире, мы разыграем два места на обучение. Победителям для получения выигрыша нужно будет связаться с нами в прямом эфире по номеру телефона.\n';
    url = 'https://edhunter.webinarninja.co/my/wnwebinarlist/thankyouOnSite/90593';
  } else if (path === '/events/220917') {
    name = 'Особенности онлайн обучения в Edhunter по программе Java Developer';
    description = 'В блоке ВОПРОС-ОТВЕТ вы сможете задать интересующие вас вопросы.\n' +
      'Кроме того, в прямом эфире, мы разыграем два места на обучение. Победителям для получения выигрыша нужно будет связаться с нами в прямом эфире по номеру телефона.\n';
    url = 'https://edhunter.webinarninja.co/my/wnwebinarlist/thankyouOnSite/91103';
  } else if (path === '/events/300917') {
    name = 'Особенности онлайн-обучения на Программе "Java Developer"';
    description = 'В блоке ВОПРОС-ОТВЕТ вы сможете задать интересующие вас вопросы.\n' +
      'Кроме того, в прямом эфире, мы разыграем места на обучение. Победителям для получения выигрыша нужно будет связаться с нами в прямом эфире по номеру телефона.\n';
    url = 'https://edhunter.webinarninja.co/my/wnwebinarlist/thankyouOnSite/1596';
  }
  else {
    // window.location.href = '/error'
  }

  let component = <Event name={name} description={description} url={url}/>;

  if (path === '/events/300917')
  {
    component = <BigmarkerEvent/>;
  }
  return {
    chunks: ['events'],
    title:
    'События Edhunter. Вебинары, день открытых дверей.' + name,
    component: (
      <Layout>
        {component}
      </Layout>
    ),
  };
}

export default action;
