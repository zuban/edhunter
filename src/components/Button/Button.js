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
import s from './Button.css';
import {Button as BootstrapButton} from 'reactstrap'
class Button extends React.Component {
  render() {
    return (
      <BootstrapButton className={this.props.primary ? s.primary : s.secondary}>
        {this.props.text}
      </BootstrapButton>
    );
  }
}

export default withStyles(s)(Button);
