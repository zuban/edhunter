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
import s from './Home.css';
import Button from '../../components/Button';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import arrowDown from './arrowDown.png';
import matorin from './matorin.png';
import zubov from './zubov.png';
import yakovlev from './yakovlev.png';
import rumyantsev from './rumyantsev.png';
import desctop from './desctop.png';
import layers from './layers.png';
import bulb from './bulb.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.homePageContent}>
        <div className={s.headerImage}>
          <section>
            <div className={s.content}>
              <div className="container">
                <h1 className={s.h1Header}>МЫ "ПРОКАЧАЕМ" ТЕБЯ</h1>
                <h3 className={s.h3Header}>
                  ДЛЯ РАБОТЫ В ВЕДУЩИХ КОМПАНИЯХ РОССИИ
                </h3>
                <br />
                <p>
                  Мы помогаем IT компаниям растить правильные компетенции у
                  кандидатов
                </p>

                <Button text="Хочу стать разработчиком" primary />
                <Button text="Узнать больше" />
              </div>
            </div>
          </section>
        </div>
        <div className={s.arrowDown}>
          <img src={arrowDown} alt="arrow down" />
        </div>
        <Container className={s.paddingContainer}>
          <Row>
            <div className="col-sm-3">
              <div>
                <img className={s.commandPhoto} src={rumyantsev} />
                <h4 className="text-center">
                  ДМИТРИЙ<br />РУМЯНЦЕВ
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
            <div className="col-sm-3">
              <div>
                <img className={s.commandPhoto} src={yakovlev} alt="" />
                <h4 className="text-center">
                  ВЛАД<br />ЯКОВЛЕВ
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
            </div>
            <div className="col-sm-3">
              <div>
                <img className={s.commandPhoto} src={matorin} />
                <h4 className="text-center">
                  АЛЕКСАНДР<br />МАТОРИН
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
            </div>

            <div className="col-sm-3">
              <div>
                <img className={s.commandPhoto} src={zubov} />
                <h4 className="text-center">
                  СЕРГЕЙ<br />ЗУБОВ
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
          <Row>
            <h5 className={s.work}>
              Хочешь у нас преподавать? Пройди по этой{' '}
              <a href="/signup-teacher">ссылке.</a>
              &nbsp; Мы с тобой свяжемся.
            </h5>
          </Row>
        </Container>
        <div className={s.darkSection}>
          <Container fluid>
            <Row>
              <div className={`col-sm-8 ${s.missionText}`}>
                <h1 className={s.missionHeader}>НАША МИССИЯ</h1>
                <p className={s.textParagraph}>
                  Получи знания, заяви о себе, найди себя, открой мечту. Стань
                  разработчиком, найди работу в ведущих IT компаниях.
                </p>
                <Row className={s.missionDescription}>
                  <div className="col-sm-6">
                    <h3 className="text-primary">Я ХОЧУ СТАТЬ РАЗРАБОТЧИКОМ</h3>

                    <div className="media">
                      <div className="media-body">
                        <ul className={s.missionUl}>
                          <li className={s.textParagraph}>
                            Мы даем только необходимые знания
                          </li>
                          <li className={s.textParagraph}>
                            Мы сокращаем дистанцию между тобой и профессией
                          </li>
                        </ul>
                      </div>
                      <img className="d-flex ml-3" src={desctop} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h3 className="text-primary">Я ХОЧУ ЗДЕСЬ РАБОТАТЬ</h3>
                    <div className="media">
                      <div className="media-body">
                        <ul className={s.missionUl}>
                          <li className={s.textParagraph}>
                            Подготовим тебя под требования компании
                          </li>
                          <li className={s.textParagraph}>
                            Обеспечим интервью в компании
                          </li>
                          <li className={s.textParagraph}>
                            Выдадим цифровой сертификат
                          </li>
                        </ul>
                      </div>
                      <img className="d-flex ml-3" src={layers} />
                    </div>
                  </div>
                </Row>
              </div>
              <div className={`${s.missionBackground} col-sm-4`} />
            </Row>
          </Container>
        </div>
        <Container className={s.paddingContainer}>
          <Row className={s.headerMargin}>
            <h1 className={s.blockCenter}>
              <span className={s.textBlue}>ЧТО</span> МЫ ДЕЛАЕМ
            </h1>
          </Row>
          <Row>
            <div className={`${s.helpBlock} col-sm-7`}>
              <Row className={s.textGrey}>
                <div className={`col-sm-12 text-center ${s.bulbPadding}`}>
                  <img src={bulb} />
                </div>
                <div
                  className={`col-sm-12  text-center ${s.bulbPadding} ${s.textDark}`}
                >
                  <h2>ПОМОГАЕМ НА ВСЕМ ПУТИ</h2>
                </div>
                <div className="col-sm-12  text-center">
                  <p>
                    Интерактивное общение с преподавателями Выполнение проектов,
                    построенных на реальных кейсах Профессиональная подготовка
                    резюме Имитация собеседования в компании
                  </p>
                </div>
                <div
                  className={`col-sm-12  text-center ${s.bulbPadding} ${s.textDark}`}
                >
                  <h2>КАК МЫ ЭТО ДЕЛАЕМ</h2>
                </div>
                <div className="col-sm-12  text-center">
                  <a>С помощью концепции перевернутого обучения</a>
                </div>
              </Row>
            </div>
            <div className={`${s.photoHelpBlock} col-sm-7 offset-md-5`} />
          </Row>
        </Container>
        <div className={s.processBlock}>
          <Container>
            <Row className={`${s.processHeader} ${s.headerPadding}`}>
              <h1 className={s.blockCenter}>ПРОЦЕСС ОБУЧЕНИЯ</h1>
            </Row>
          </Container>
        </div>
        <Container
          style={{
            textAlign: 'center',
          }}
        >
          <Row className={s.headerPadding}>
            <h1 className={s.blockCenter}>
              НАШИ ПАРТНЕРЫ В СТАДИИ ПЕРЕГОВОРОВ
            </h1>
            <hr />
          </Row>
          <img
            src="http://toplogos.ru/images/logo-rosevrobank.png"
            style={{
              filter: 'grayscale(1)',
              width: '250px',
              opacity: 0.5,
            }}
          />
          <img
            src="https://hsto.org/getpro/moikrug/uploads/company/830/016/812/logo/medium_db0b3701909fd9944e6e9a5310f023be.png"
            style={{
              filter: 'grayscale(1)',
              width: '250px',
              opacity: 0.5,
            }}
          />
          <div>
            <Button text="Стать партнером" primary />
          </div>
        </Container>
        <div className={s.darkSection}>
          <Container>
            <Row className={s.headerPadding}>
              <h1>Курсы</h1>
            </Row>
          </Container>

          <Container fluid>
            <Row>
              <div className="col-sm-4" />
              <div className="col-sm-4" />
              <div className="col-sm-4" />
            </Row>
            <Row>
              <div className="col-sm-4" />
              <div className="col-sm-4" />
              <div className="col-sm-4" />
            </Row>
          </Container>
        </div>
        <div className={s.whiteBlock}>
          <Container className="text-center">
            <Row className={s.headerPadding}>
              <h1 className={s.blockCenter}>НАШИ ЦЕНЫ</h1>
            </Row>
          </Container>
          <Container>
            <Row className={s.priceRow}>
              <div className={`col-sm-6 text-center`}>
                <div className={s.priceBlockDuration}>
                  <h1>Разовый</h1>
                </div>
                <div className={s.priceCount}>
                  <h1 className={s.marginPriceCount}>
                    <b>6500</b>
                  </h1>{' '}
                  <p>в месяц</p>
                </div>
                <div className={s.priceBlock}>
                  <p>
                    <b>15</b> спринтов курса java
                  </p>
                  <p>
                    <b>1</b> резюме. поможем составить его правильно
                  </p>
                  <p>
                    <b>3</b> собеседования в разные компании
                  </p>
                  <div>
                    <Button text="Зарегистрироваться" primary />
                  </div>
                </div>
              </div>
              <div className={`col-sm-6 text-center`}>
                <div className={s.priceMainBlockDuration}>
                  <h1>Разовый</h1>
                </div>
                <div className={s.priceCount}>
                  <h1 className={s.marginPriceCount}>
                    <b>6500</b>
                  </h1>{' '}
                  <p>в месяц</p>
                </div>
                <div className={s.priceBlock}>
                  <p>
                    <b>15</b> спринтов курса java
                  </p>
                  <p>
                    <b>1</b> резюме. поможем составить его правильно
                  </p>
                  <p>
                    <b>3</b> собеседования в разные компании
                  </p>
                  <div>
                    <Button text="Зарегистрироваться" primary />
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
        <div className={s.darkSection}>
          <Container fluid>
            <Row>
              <div className={`${s.firstBlock} col-sm-3`}>
                <h1>15 / 06</h1>
                <p>Открытие площадки.</p>
                <p> День открытых дверей.</p>
              </div>
              <div className={`${s.secondBlock} col-sm-3`}>
                <h1>15 / 06</h1>
                <p>Открытие площадки.</p>
                <p> День открытых дверей.</p>
              </div>
              <div className={`${s.thirdBlock} col-sm-3`}>
                <h1>15 / 06</h1>
                <p>Открытие площадки.</p>
                <p> День открытых дверей.</p>
              </div>
              <div className={`${s.foursBlock} col-sm-3`}>
                <h1>15 / 06</h1>
                <p>Открытие площадки.</p>
                <p> День открытых дверей.</p>
              </div>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className={s.headerPadding}>
            <h1 className={s.blockCenter}>НАС РЕКОМЕНДУЮТ</h1>
          </Row>
        </Container>
        <div className={s.recommendBlock}>
          <Container>
            <Row>
              <div className={`col-sm-4 ${s.headerMargin}`}>
                <img src={icon1} alt="" />
                <h1>Наташа Брезнякова</h1>
                <p> МФТИ / Сбертех</p>
                <p> „EdHunter дал мне необходимые знания для моей карьеры!“</p>
              </div>
              <div className={`col-sm-4 ${s.headerMargin}`}>
                <img src={icon2} alt="" />
                <h1>Наташа Брезнякова</h1>
                <p> МФТИ / Сбертех</p>
                <p> „EdHunter дал мне необходимые знания для моей карьеры!“</p>
              </div>
              <div className={`col-sm-4 ${s.headerMargin}`}>
                <img src={icon3} alt="" />
                <h1>Наташа Брезнякова</h1>
                <p> МФТИ / Сбертех</p>
                <p> „EdHunter дал мне необходимые знания для моей карьеры!“</p>
              </div>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className={s.headerPadding}>
            <h1 className={s.blockCenter}>ХОТИТЕ СТАТЬ ПАРТНЕРОМ ПРОЕКТА?</h1>
          </Row>
          <Row className="text-center">
            <p>
              {' '}Партнерская программа - это возможность в кратчайшие сроки
              найти и прособеседовать лучших молодых специалистов с необходимыми
              вашей компании компетенциями. Мы также готовы создать учебный курс
              по вашему заказу и предлагаем вам воспользоваться опцией
              “Таргетированный отбор”.
            </p>
            <div className={s.blockCenter}>
              <Button text="Для компаний" primary />
            </div>
          </Row>
        </Container>
        <div className={s.contactBlock}>
          <Container>
            <Row className={s.headerPadding}>
              <h1 className={s.blockCenter}>СВЯЗАТЬСЯ С НАМИ</h1>
              <p className={s.blockCenter}>
                Предложите курс, или просто оставьте контакты, мы с Вами
                свяжемся.
              </p>
            </Row>
            <Row>
              <div className={`${s.contacts} col-sm-4`}>
                <h3 className={s.textBlue}>НАШ АДРЕС</h3>
                <p>Москва, пр. Ленина 18 Офис 352</p>
                <h3 className={s.textBlue}>ПОЗВОНИТЕ НАМ</h3>
                <p>+ 7 (495) 553 22 80</p>
                <p>+ 7 (499) 688 09 72</p>
                <h3 className={s.textBlue}>НАПИШИТЕ НАМ</h3>
                <p>contactus@email.com</p>
              </div>
              <div className={`${s.contactForm} col-sm-7 offset-md-1`}>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="with a placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <Button text="Хочу стать разработчиком" primary />
                </Form>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
