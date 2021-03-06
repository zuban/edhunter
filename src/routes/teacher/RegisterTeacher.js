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
} from 'reactstrap';
class RegisterTeacher extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      notification: null,
      email: null,
      name: null,
      course: null,
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
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(this.state),
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      if (response.status === 201) {
        window.location.href = '/'
      }
      return response.json();
    }).then(function (result) {
      _this.setState({notification: result.errors})
    }).catch(function (error) {
      console.log('Request failed', error);
    });
    ;
  }

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row className={s.registerRow}>
            <Col>
              <h1>
                Для учителей. Зарегистрироваться.
              </h1>
              <h2>Зарегистрируйся и получи персональный заказ на разработку курса.</h2>
              <br/>
              <h3>Через социальные сети</h3>
              <Button onClick={() => {
                window.location.href = '/auth/vkontakte';
              }} text={<span><i className="fa fa-vk"></i> через VK</span>}
                      primary/>
              <Button onClick={() => {
                window.location.href = '/auth/facebook';
              }} text={<span><i className="fa fa-facebook"></i> через Facebook</span>}
                      primary/>
              <Button onClick={() => {
                window.location.href = '/auth/google';
              }} text={<span><i className="fa fa-google-plus"></i> через Google</span>}
                      primary/>
              <h3>Или заполните форму</h3>
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
                  <Label>Ваше имя</Label>
                  <Input onBlur={e => this.changeFieldName('name', e.target.value)} type="text" name="name"
                         placeholder="Ваше имя"/>
                </FormGroup>
                <FormGroup>
                  <Label>Область ваших интересов</Label>
                  <Input onBlur={e => this.changeFieldName('course', e.target.value)} type="text" name="course"
                         placeholder="Область ваших интересов"/>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Пароль</Label>
                  <Input onBlur={e => this.changeFieldName('password', e.target.value)} type="password" name="password"
                         placeholder="Введите ваш пароль"/>
                </FormGroup>
              </Form>
              <Button onClick={() => this.send()} text="Зарегистрироваться" primary/>
              <p>Авторизуясь, вы соглашаетесь с правилами <a href="/policy">пользования сайтом</a> и даете согласие на <a href="/terms">обработку персональных данных.</a></p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(RegisterTeacher);
