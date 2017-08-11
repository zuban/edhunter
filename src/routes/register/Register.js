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
import s from './Register.css';
import Link from '../../components/Link';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row className={s.registerRow}>
            <Col sm="4">
              <h2>
                <Link to="/register/student">Регистрация для студентов</Link>
              </h2>
            </Col>
            <Col sm="4">
              <h2>
                <Link to="/register/company">Регистрация для компаний</Link>
              </h2>
            </Col>
            <Col sm="4">
              <h2>
                <Link to="/register/teacher">Регистрация для преподавателей</Link>
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Register);
