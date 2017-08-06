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
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/about">
          Команда
        </Link>
        <Link className={s.link} to="/contact">
          Миссия
        </Link>
        <Link className={s.link} to="/contact">
          Партнеры
        </Link>
        <Link className={s.link} to="/contact">
          Курсы
        </Link>
        <Link className={s.link} to="/contact">
          Цены
        </Link>
        <Link className={s.link} to="/contact">
          Контакты
        </Link>
        {
          this.props.profile.me.name ? <Link className={s.link} to="/">
              {this.props.profile.me.name }
            </Link>
            : <span>  <span className={s.spacer}> | </span>
        <Link className={s.link} to="/login">
          Войти
        </Link>
        <span className={s.spacer}>или</span>
        <Link className={cx(s.link, s.highlight)} to="/register">
          Регистрация
        </Link></span>
        }
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
