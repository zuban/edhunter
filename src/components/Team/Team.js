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

import matorin from './matorin.png';
import zubov from './zubov.png';
import yakovlev from './yakovlev.png';
import rumyantsev from './rumyantsev.png';

class Team extends React.Component {
  render() {
    return (
      <Container className={s.paddingContainer} id="team">
        <Row>
          <Col>
            <h1>НАША КОМАНДА</h1>
          </Col>
        </Row>
        <Row>
          <div className="col-sm-4">
            Описание
          </div>
          <div className="col-sm-4">
            <div>
              <img className={s.commandPhoto} src={yakovlev} alt=""/>
              <h4 className="text-center">
                ВЛАД<br/>ЯКОВЛЕВ
              </h4>
              <p className="section-heading text-primary text-center">
                АКАДЕМИЧЕСКИЙ ДИРЕКТОР
              </p>
              <p className={s.commandDesctiption}>
                В 1999 г. закончил Финансовый институт (г. Ташкент) по
                специальности «Финансы и Кредит». В 2010 году получил степень
                MBA в Университете штата Калифорния (США) по специальности
                «Стратегическое управление». Профессиональную деятельность
                начал в 1994 году. В последующие 20 лет работал в
                производственной (Nestle) и банковской (Deutsche Bank и АО
                «Сбертех») сфере. Отвечает за создание учебных курсов,
                формирование учебных планов, взаимодействие с
                компаниями-партнерами и ВУЗами.
              </p>
            </div>

            <div>
              <img className={s.commandPhoto} src={rumyantsev}/>
              <h4 className="text-center">
                ДМИТРИЙ<br/>РУМЯНЦЕВ
              </h4>
              <p className="section-heading text-primary text-center">
                ОПЕРАЦИОННЫЙ ДИРЕКТОР
              </p>
              <p className={s.commandDesctiption}>
                Закончил Ленинградский Государственный Университет по
                специальности «Математика» в 1992 году. В 1995 году закончил
                аспирантуру в Севере-Западном Заочном Политехническом
                Институте по специальности «Теория Систем». Профессиональную
                карьеру начал в 1992 году. В последующие 25 лет работал в
                сфере ИТ технологий (Израиль, Италия), телекоммуникаций
                (Австрия, Россия, Украина), банковских технологий (Россия,
                Израиль). Отвечает за стратегическое и операционное
                управление.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div>
              <img className={s.commandPhoto} src={matorin}/>
              <h4 className="text-center">
                АЛЕКСАНДР<br/>МАТОРИН
              </h4>
              <p className="section-heading text-primary text-center">
                ПРЕПОДАВАТЕЛЬ
              </p>
              <p className={s.commandDesctiption}>
                Закончил Саратовский государственный университет им. Н.Г.
                Чернышевского, факультет компьютерных наук и информационных
                технологий по специальности “компьютерная безопасность” в 2010
                году. Работает в компании АО «Сбертех» в должности главного
                руководителя разработки. Более 10ти лет опыта коммерческой
                разработки ПО. Преподает в МФТИ на кафедре БИТ курсы по Java и
                распределённым системам. Спикер крупнейших российских и
                международных Java конференций (JPoint, Joker, JBreak,
                JEEConf). Преподаватель курса JAVA.
              </p>
            </div>

            <div>
              <img className={s.commandPhoto} src={zubov}/>
              <h4 className="text-center">
                СЕРГЕЙ<br/>ЗУБОВ
              </h4>
              <p className="section-heading text-primary text-center">
                ПРЕПОДАВАТЕЛЬ
              </p>
              <p className={s.commandDesctiption}>
                Закончил Московский Физико-Технический Институт, факультет
                инноваций и высоких технологий. Один из первых выпусников
                кафедры банковских информационных технологий Сбербанка. С 2015
                начал профессиональную деятельность в АО «Сбертех» как
                frontend разработчик в «Платформе Поддержки Развития Бизнеса»
                (ППРБ). В 2017 продолжил карьеру в компании Luxoft, в
                должности senior developer. Преподает курс по UI.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default withStyles(s)(Team);
