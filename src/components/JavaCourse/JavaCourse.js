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
  Row
} from 'reactstrap';

class JavaCourse extends React.Component {
  render() {
    return (
      <div className={s.courseContainer}>
        <Container>
          <Row>
            <h1>КУРС JAVA</h1>
          </Row>
          <Row>
            <div className={`col-sm-2`}>
              Процесс разработки
            </div>
            <div className={`col-sm-2`}>
              Java core
            </div>
            <div className={`col-sm-2`}>
              Многопоточность
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(JavaCourse);
