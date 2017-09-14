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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Homework.css';
import EmailForm from '../EmailForm';
class Homework extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      show: true,
    }
  }

  handleSubmit(props) {
    debugger;
    const _this = this;
    fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({
        email: props.email,
      }),
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      if (response.status === 500) {
        throw new Error();
      }
      else {
        return response;
      }
    }).then(function (result) {
      _this.setState({show: true})
    }).catch(function (error) {
      console.log('Request failed', error);
    });
  }

  render() {
    return (
      <div className={s.root}>
        {this.state.show ?
          <h3>
            <a href="https://www.dropbox.com/sh/pxywvwu9kjr8km8/AAC_ZJHtOJPuNO4w4EKe-tfja?dl=0">Ссылка</a>
            &nbsp;на 3 домашних задания.
          </h3> : <EmailForm onSubmit={(props) => this.handleSubmit(props)}/>}
      </div>
    );
  }
}

export default withStyles(s)(Homework);
