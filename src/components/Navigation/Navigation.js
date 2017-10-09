/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Navigation extends React.Component {

  logout() {
    fetch('/logout', {
      credentials: 'include',
    }).then(function (response) {
      document.cookie = 'connect.sid' + '=; Max-Age=0';
      window.location.href = '/'
    }).catch(alert);
  }

  render() {
    const {profile} = this.props;
    return (
      <div className={s.root} role="navigation">
        {profile
          ? <span><Link className={s.link} to="/profile">
              {profile}
            </Link>
             <span className={s.spacer}>или</span>
              <span className={s.link} onClick={() => this.logout()}>Выйти</span>
            </span>
          : <span>

              <Link className={`${s.link} ${s.forCompany}`} to="/register/company">
                ДЛЯ КОМПАНИЙ
              </Link>
               {' '}<span className={s.spacer}> | </span>
              <Link className={s.link} to="/login">
                ВОЙТИ
              </Link>
            {/*{' '}<span className={s.spacer}> | </span>*/}
            {/*<UncontrolledDropdown className={s.dropdown}>*/}
            {/*<DropdownToggle>*/}
            {/*<i className="fa fa-bars" aria-hidden="true"></i>*/}
            {/*</DropdownToggle>*/}
            {/*<DropdownMenu>*/}
              {/*<DropdownItem header>Header</DropdownItem>*/}
              {/*<DropdownItem disabled>Action</DropdownItem>*/}
              {/*<DropdownItem>Another Action</DropdownItem>*/}
              {/*<DropdownItem divider/>*/}
              {/*<DropdownItem>Another Action</DropdownItem>*/}
            {/*</DropdownMenu>*/}
          {/*</UncontrolledDropdown>*/}
            </span>}
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
