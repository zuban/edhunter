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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logo from './logo.png';
import {Container} from 'reactstrap';
import {connect} from 'react-redux'

class Header extends React.Component {
  render() {
    const {user} = this.props;
    console.log(this.props.profile);
    return (
      <Container className={s.maxWidth}>
        <div className={s.container}>
          <Navigation profile={user}/>
          <Link className={s.brand} to="/">
            <img
              src={logo}
              srcSet={`${logo} 2x`}
              width="150"
              height="30"
              alt="EdHunter"
            />
          </Link>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.name
  }
}

export default connect(
  mapStateToProps,
  null
)(withStyles(s)(Header));
