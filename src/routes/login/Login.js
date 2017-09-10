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
  Alert,
} from 'reactstrap';
import LoginForm from '../../components/LoginForm';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      notification: null,
    }
  }

  handleSubmit(props) {
    const _this = this;
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        email: props.email,
        password: props.password
      }),
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
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

  changeFieldName(field, value) {
    let state = this.state;
    state[field] = value;
    this.setState(state);
    console.log(state);
  }

  send() {

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
              <h2 style={{color: '#3d95b6;'}}>Оцени уровень своих знаний - пройди тестирование после регистрации и получи скидку 25{"%"}</h2>
              <h3>Через социальные сети</h3>
              <Button onClick={() => {
                window.location.href = '/auth/vkontakte';
              }} text={<span><i className="fa fa-vk"></i> Войти через VK</span>}
                      primary/>
              <Button onClick={() => {
                window.location.href = '/auth/facebook';
              }} text={<span><i className="fa fa-facebook"></i> Войти через Facebook</span>}
                      primary/>
              <Button onClick={() => {
                window.location.href = '/auth/google';
              }} text={<span><i className="fa fa-google-plus"></i> Войти через Google</span>}
                      primary/>
              <h3>Или введите логин и пароль</h3>

              {
                this.state.notification ? <Alert color="danger">{this.state.notification}</Alert> : null
              }
              <LoginForm onSubmit={(props) => this.handleSubmit(props)}/>
              <p>Авторизуясь, вы соглашаетесь с правилами <a href="/policy">пользования сайтом</a> и даете согласие на <a href="/terms">обработку персональных данных.</a></p>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default withStyles(s)(Login);

