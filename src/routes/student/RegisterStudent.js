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
class RegisterStudent extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      notification: null,
      email: null,
      name: null,
      phone: null,
      university: null,
      about: null,
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
  }

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row className={s.registerRow}>
            <Col>
              <h1>
                Для студентов. Зарегистрироваться.
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
                  <Label>Ваше имя</Label>
                  <Input onBlur={e => this.changeFieldName('name', e.target.value)} type="text" name="name"
                         placeholder="Ваше имя"/>
                </FormGroup>
                <FormGroup>
                  <Label>Телефон</Label>
                  <Input onBlur={e => this.changeFieldName('phone', e.target.value)} type="text" name="phone"
                         placeholder="Телефон"/>
                </FormGroup>
                <FormGroup>
                  <Label>Учебное зеведение</Label>
                  <Input onBlur={e => this.changeFieldName('university', e.target.value)} type="text" name="university"
                         placeholder="Учебное зеведение"/>
                </FormGroup>
                <FormGroup>
                  <Label>Расскажите о себе</Label>
                  <Input onBlur={e => this.changeFieldName('about', e.target.value)} type="text" name="about"
                         placeholder="Расскажите о себе"/>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Пароль</Label>
                  <Input onBlur={e => this.changeFieldName('password', e.target.value)} type="password" name="password"
                         placeholder="Введите ваш пароль"/>
                </FormGroup>
              </Form>
              <Button onClick={() => this.send()} text="Зарегистрироваться" primary/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(RegisterStudent);