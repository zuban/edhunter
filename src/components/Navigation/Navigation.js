/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {

  logout() {
    fetch('/logout', {
      credentials: 'include',
    }).then(function (response) {
      document.cookie = 'connect.sid' +  '=; Max-Age=0';
      window.location.href = '/'
    }).catch(alert);
  }

  render() {
    const {profile} = this.props;
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="#team">
          Команда
        </Link>
        <Link className={s.link} to="#mission">
          Миссия
        </Link>
        <Link className={s.link} to="#partners">
          Партнеры
        </Link>
        <Link className={s.link} to="#courses">
          Курсы
        </Link>
        <Link className={s.link} to="#prices">
          Цены
        </Link>
        <Link className={s.link} to="#contacts">
          Контакты
        </Link>
        {profile
          ? <span><Link className={s.link} to="/profile">
              {profile}
            </Link>
             <span className={s.spacer}>или</span>
              <span className={s.link} onClick={() => this.logout()}>Выйти</span>
            </span>
          : <span>
              {' '}<span className={s.spacer}> | </span>
              <Link className={s.link} to="/login">
                Войти
              </Link>
              <span className={s.spacer}>или</span>
              <Link className={cx(s.link, s.highlight)} to="/register">
                Регистрация
              </Link>
            </span>}
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
