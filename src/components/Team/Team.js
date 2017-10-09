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
import s from './Styles.css';
import {
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import matorin from './matorin.png';
import zubov from './zubov.png';
import yakovlev from './yakovlev.png';
import rumyantsev from './rumyantsev.png';

class Team extends React.Component {
  render() {
    return (
      <div id="team" className={s.darkSection}>
        <Container>
          <Row>
            <Col sm={4}>
              <span className={s.link}>
                ПРЕПОДАВАТЕЛИ
              </span>
              <br/>
              <span className={s.link}>
                ДИРЕКТОРА
              </span>
            </Col>
            <Col sm={4}>
              
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Team);
