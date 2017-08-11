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
import s from './Login.css';
import Button from '../../components/Button';
import qs from 'qs'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      notification: null,
      email: null,
      password: null,
    }
  }

  changeFieldName(field, value) {
    let state = this.state;
    state[field] = value;
    this.setState(state);
    console.log(state);
  }

  send() {
    const _this = this;
    let formData = new FormData();
    let state = this.state;
    formData.append('email', state.email);
    formData.append('password', state.password);
    fetch("/login", {
      method: "POST",
      body: qs.stringify({
        email: state.email,
        password: state.password
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }).then(function (response) {
      if (response.status === 200) {
        window.location.href = '/'
      }
      return response.json();
    }).then(function (result) {
      _this.setState({notification: result.errors})
    }).catch(function (error) {
      console.log('Request failed', error);
    });
  }

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row className={s.loginRow}>
            <Col>
              <h1>
                Войти
              </h1>
              <Form>
                {
                  this.state.notification ? <p>{this.state.notification}</p> : null
                }
                <FormGroup>
                  <Label>Ваш email</Label>
                  <Input onBlur={e => this.changeFieldName('email', e.target.value)} type="email" name="email"
                         placeholder="Ваш email"/>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Пароль</Label>
                  <Input onBlur={e => this.changeFieldName('password', e.target.value)} type="password" name="password"
                         placeholder="Введите ваш пароль"/>
                </FormGroup>
              </Form>
              <Button onClick={() => this.send()} text="Войти" primary/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Login);
