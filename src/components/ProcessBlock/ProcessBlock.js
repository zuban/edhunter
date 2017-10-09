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
  Col
} from 'reactstrap';

class ProcessBlock extends React.Component {
  render() {
    return (
      <div className={s.darkSection}>
        <Container>
          <Row>
            <Col>
              <h1 className={s.processName}>НАШ ПРОЦЕСС</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={3}>
              <div className={s.firstBlock}>
                <h3>ПОСТУПЛЕНИЕ 😉</h3>
                <p>Запланируем в вами skype-сессию, чтобы понять ваш уровень. После этого можно оплачивать курс.</p>
              </div>
            </Col>
            <Col sm={3}>
              <div className={s.secondBlock}>
                <h3>
                  НАЧАЛО УЧЕБЫ 💻
                </h3>
                <p> Вебинары с преподавателем проходят 2 раза в неделю. По времени подстраиваемся под вас.</p>
                <a href="https://www.bigmarker.com/" className={s.helpLink}>НА ПЛАТФОРМЕ BIGMARKER</a>
              </div>
            </Col>
            <Col sm={3}>
              <div className={s.thirdBlock}>
                <h3>ПРАКТИКА 🙌</h3>
                <p>
                  Основное в наших курсах - домашние задания. Мы дадим учебные материалы,
                  и будем дистанционно помогать их выполнять.
                  Практика - путь к успеху.
                </p>
                <a href="/java#homework" className={s.helpLink}>ПРИМЕР ДОМАШНЕГО ЗАДАНИЯ</a>
              </div>
            </Col>
            <Col sm={3}>
              <div className={s.foursBlock}>
                <h3>ВЫПУСК 🎉</h3>
                <p>
                  Мы обеспечим собеседования в ведущих компаниях и поможем с составлением резюме.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(ProcessBlock);
