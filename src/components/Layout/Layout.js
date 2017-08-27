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
import { connect } from 'react-redux';
// external-global styles must be imported in your JS.
// import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.css';
import { UncontrolledAlert } from 'reactstrap';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { flash } = this.props;
    return (
      <div>
        <Header />
        {flash
          ? <div className={s.flashBlock}>
              <UncontrolledAlert className={s.flashMessage} color={flash.level}>
                {flash.message}
              </UncontrolledAlert>
            </div>
          : null}
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flash: state.runtime.flash,
});

export default connect(mapStateToProps, null)(
  withStyles(bootstrapCss, s)(Layout),
);
