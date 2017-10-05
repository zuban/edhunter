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
      <div className={s.processBlock}>
        <Container fluid>
          <Row className={`${s.processHeader} ${s.headerPadding}`}>
            <h1 className={s.blockCenter}>ПРОЦЕСС ОБУЧЕНИЯ</h1>
          </Row>
          <Row>
            <Col sm={2}>
              <h2>Вступительный тест.</h2>
              <h2>Этап самоподготовки.</h2>
              <p>
                Жесткий отбор.
                <br/>
                Выдадим ссылки на полезные ресурсы.
              </p>
            </Col>
            <Col sm={3}>
              <h2>Каждую неделю - вебинары</h2>
              <p>
                Интерактивный режим взаимодейсвия с преподавателем.
                <br/>
                Обсуждаем типовые задачи и их решения.
              </p>
            </Col>
            <Col sm={2}>
              <h2>Каждому выдается правтический кейс.</h2>
              <p>
                Каждому выдается ТЗ на реализацию модуля системы.
                <br/>
                Вы можете обьедениться в группы.
              </p>
            </Col>
            <Col sm={3}>
              <h2>Работа над ошибками. Выпускной тест.</h2>
              <p>
                Подробно пройдемся по неверным реализациям
              </p>
            </Col>
            <Col sm={2}>
              <h2>Составление резюме.
                <br/>
                Собеседования в компаниях.
              </h2>
              <p>
                Тебя будут собеседовать лучшие компании.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(ProcessBlock);
