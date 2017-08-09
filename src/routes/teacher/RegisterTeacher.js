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
import s from './Styles.css';
import Button from '../../components/Button';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
class RegisterTeacher extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      email: null,
      login: null,
    }
  }


  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row className={s.registerRow}>
            <Col>
              <h1>
                Войти
              </h1>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Check me out
                  </Label>
                </FormGroup>
                <Button text="Submit" primary />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(RegisterTeacher);
