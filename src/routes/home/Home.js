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
import Link from '../../components/Link';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button as BootstrapButton
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

import JavaCourse from '../../components/JavaCourse';
import ProcessBlock from '../../components/ProcessBlock';

class Home extends React.Component {
  static propTypes = {};

  scrollTo(id) {
    document.getElementById(id).scrollIntoView();
  }

  constructor(...props) {
    super(...props);
    this.state = {
      notification: null,
      email: null,
      name: null,
      phone: null,
      message: null,
    };
  }

  changeFieldName(field, value) {
    const state = this.state;
    state[field] = value;
    this.setState(state);
  }

  send() {
    const _this = this;
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(this.state),
      credentials: 'include',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        _this.setState({
          notification: 'Спасибо за ваше обращение. Мы с Вами свяжемся!',
        });
        return response.json();
      })
      .then(result => {
      })
      .catch(error => {
        console.log('Request failed', error);
      });

    if (window.ga) {
      window.ga('send', 'event', 'Contacts', 'Submit');
    }
  }

  render() {
    return (
      <div className={s.homePageContent}>
        <div className={s.headerImage}>
          <section>
            <div className={s.content}>
              <div className="container">
                <h1 className={s.h1Header}>МЫ "ПРОКАЧАЕМ" ТЕБЯ</h1>
                <h3 className={s.h3Header}>
                  ДЛЯ РАБОТЫ В ВЕДУЩИХ IT КОМПАНИЯХ РОССИИ
                </h3>
                <br/>
                <p>
                  Помогаем компаниям растить правильные компетенции у
                  кандидатов и сотрудников
                </p>
                <Button
                  text="Хочу стать разработчиком"
                  onClick={() => this.scrollTo('students-video')}
                  primary
                />
                <Button
                  text="Хочу нанять разработчика"
                  onClick={() => this.scrollTo('company-video')}
                />
              </div>
            </div>
          </section>
        </div>
        <div className={s.arrowDown}>
          <img src={arrowDown} alt="arrow down"/>
        </div>
        <Container className={s.paddingContainer} id="team">
          <Row>
            <div className="col-sm-3">
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
            <div className="col-sm-3">
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
            </div>
            <div className="col-sm-3">
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
            </div>

            <div className="col-sm-3">
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
          <Row>
            <h5 className={s.work}>
              Хочешь у нас преподавать? Пройди по этой{' '}
              <a href="/register/teacher">ссылке.</a>
              &nbsp; Мы с тобой свяжемся.
            </h5>
            <h5 className={s.textBlue}>Зарегистрируйся и получи персональный заказ на разработку курса.</h5>
          </Row>

          <Row className={s.processVideoRow} id="students-video">
            <Col className={s.textLeft}>
              <h2 className={s.textBlue}>Абитуриентам</h2>
            </Col>
            <div className={s.videoWrapper}>
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/Nh1cVIdpVUw"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </Row>
        </Container>
        <div className={s.darkSection} id="mission">
          <Container fluid>
            <Row className={s.missionRow}>
              <div className={`col-sm-8 ${s.missionText}`}>
                <h1 className={s.missionHeader}>НАША МИССИЯ</h1>
                <p className={s.textParagraph}>
                  Получи знания, заяви о себе, найди себя, открой мечту. Стань
                  разработчиком, найди работу в лучших IT компаниях. Мы учим, чтобы вы работали.
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
                      <img className="d-flex ml-3" src={desctop}/>
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
                      <img className="d-flex ml-3" src={layers}/>
                    </div>
                  </div>
                </Row>
              </div>
              <div className={`${s.missionBackground} col-sm-4`}/>
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
                  <img src={bulb}/>
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
                  <h4>
                    <Link className={s.link} to="/education">
                      С помощью концепции перевернутого обучения
                    </Link>
                  </h4>
                </div>
              </Row>
            </div>
            <div className={`${s.photoHelpBlock} col-sm-7 offset-md-5`}/>
          </Row>
        </Container>

        <ProcessBlock/>

        <Container className={s.partnersContainer} id="partners">
          <Row className={s.headerPadding}>
            <Col>
              <h1 className={s.blockCenter}>НАШИ ПАРТНЕРЫ</h1>

              <hr/>
            </Col>
          </Row>
          <Row>
            <p>
              Если ваша компания заинтересована в сотрудничестве с нами,
              зарегистрируйтесь для дальнейших инструкций, или свяжитесь с нами:
              team@edhunter.ru
            </p>
          </Row>
          {/* <img*/}
          {/* src="http://toplogos.ru/images/logo-rosevrobank.png"*/}
          {/* style={{*/}
          {/* filter: 'grayscale(1)',*/}
          {/* width: '250px',*/}
          {/* opacity: 0.5,*/}
          {/* }}*/}
          {/* />*/}
          {/* <img*/}
          {/* src="https://hsto.org/getpro/moikrug/uploads/company/830/016/812/logo/medium_db0b3701909fd9944e6e9a5310f023be.png"*/}
          {/* style={{*/}
          {/* filter: 'grayscale(1)',*/}
          {/* width: '250px',*/}
          {/* opacity: 0.5,*/}
          {/* }}*/}
          {/* />*/}
          <div>
            <Button
              text="Стать партнером"
              onClick={() => {
                window.location.href = '/register/company';
              }}
              primary
            />
          </div>
        </Container>

        <div className={s.darkSection} id="courses">
          <Container>
            <Row className={s.headerPadding}>
              <h1 className={s.blockCenter}>Курсы</h1>
            </Row>
          </Container>
          <JavaCourse/>
        </div>
        <div className={s.whiteBlock} id="prices">
          <Container className="text-center">
            <Row className={s.headerPadding}>
              <h1 className={s.blockCenter}>НАШИ ЦЕНЫ <span className={s.textBlue}>НА ПЕРВЫЙ НАБОР</span></h1>
            </Row>
          </Container>
          <Container>
            <Row className={s.priceContainer2}>
              <Col className={s.priceRow2}>
                <h1 className={s.priceName2}>Что вы получаете?</h1>
                <Row>
                  <Col>
                    <Row className={s.priceTopics}>
                      <div className='offset-md-3 col-sm-1'>
                        <svg style={{width: '35px', display: 'block'}} fill="rgb(255, 255, 255)"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 100 100">
                          <path
                            d="M50.1 98.9c-26.7 0-48.5-21.8-48.5-48.5S23.4 1.9 50.1 1.9c8.9 0 17.5 2.4 25.1 7 .7.4.9 1.4.5 2.1-.4.7-1.4.9-2.1.5C66.5 7.2 58.4 5 50.1 5 25 4.9 4.6 25.3 4.6 50.4S25 95.9 50.1 95.9s45.5-20.4 45.5-45.5c0-3.2-.3-6.4-1-9.5-.2-.8.3-1.6 1.2-1.8.8-.2 1.6.3 1.8 1.2.7 3.3 1.1 6.7 1.1 10.1-.1 26.7-21.8 48.5-48.6 48.5z"></path>
                          <path
                            d="M50.1 63.9c-.4 0-.8-.2-1.1-.4L24.8 39.2c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l23.2 23.2 46.8-48c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-47.8 49c-.3.3-.7.5-1.1.5z"></path>
                        </svg>
                      </div>
                      <div className='col-sm-8'>
                        <h3>
                          Курс Core Java
                        </h3>
                      </div>
                    </Row>
                    <Row className={s.priceTopics}>
                      <div className='offset-md-3 col-sm-1'>
                        <svg style={{width: '35px', display: 'block'}} fill="rgb(255, 255, 255)"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 100 100">
                          <path
                            d="M50.1 98.9c-26.7 0-48.5-21.8-48.5-48.5S23.4 1.9 50.1 1.9c8.9 0 17.5 2.4 25.1 7 .7.4.9 1.4.5 2.1-.4.7-1.4.9-2.1.5C66.5 7.2 58.4 5 50.1 5 25 4.9 4.6 25.3 4.6 50.4S25 95.9 50.1 95.9s45.5-20.4 45.5-45.5c0-3.2-.3-6.4-1-9.5-.2-.8.3-1.6 1.2-1.8.8-.2 1.6.3 1.8 1.2.7 3.3 1.1 6.7 1.1 10.1-.1 26.7-21.8 48.5-48.6 48.5z"></path>
                          <path
                            d="M50.1 63.9c-.4 0-.8-.2-1.1-.4L24.8 39.2c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l23.2 23.2 46.8-48c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-47.8 49c-.3.3-.7.5-1.1.5z"></path>
                        </svg>
                      </div>
                      <div className='col-sm-8'>
                        <h3>
                          Курс Java enterprise
                        </h3>
                      </div>
                    </Row>
                    <Row className={s.priceTopics}>
                      <div className='offset-md-3 col-sm-1'>
                        <svg style={{width: '35px', display: 'block'}} fill="rgb(255, 255, 255)"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 100 100">
                          <path
                            d="M50.1 98.9c-26.7 0-48.5-21.8-48.5-48.5S23.4 1.9 50.1 1.9c8.9 0 17.5 2.4 25.1 7 .7.4.9 1.4.5 2.1-.4.7-1.4.9-2.1.5C66.5 7.2 58.4 5 50.1 5 25 4.9 4.6 25.3 4.6 50.4S25 95.9 50.1 95.9s45.5-20.4 45.5-45.5c0-3.2-.3-6.4-1-9.5-.2-.8.3-1.6 1.2-1.8.8-.2 1.6.3 1.8 1.2.7 3.3 1.1 6.7 1.1 10.1-.1 26.7-21.8 48.5-48.6 48.5z"></path>
                          <path
                            d="M50.1 63.9c-.4 0-.8-.2-1.1-.4L24.8 39.2c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l23.2 23.2 46.8-48c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-47.8 49c-.3.3-.7.5-1.1.5z"></path>
                        </svg>
                      </div>
                      <div className='col-sm-8'>
                        <h3>
                          Feedback по каждому ДЗ
                        </h3>

                      </div>
                    </Row>
                    <Row className={s.priceTopics}>
                      <div className='offset-md-3 col-sm-1'>
                        <svg style={{width: '35px', display: 'block'}} fill="rgb(255, 255, 255)"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 100 100">
                          <path
                            d="M50.1 98.9c-26.7 0-48.5-21.8-48.5-48.5S23.4 1.9 50.1 1.9c8.9 0 17.5 2.4 25.1 7 .7.4.9 1.4.5 2.1-.4.7-1.4.9-2.1.5C66.5 7.2 58.4 5 50.1 5 25 4.9 4.6 25.3 4.6 50.4S25 95.9 50.1 95.9s45.5-20.4 45.5-45.5c0-3.2-.3-6.4-1-9.5-.2-.8.3-1.6 1.2-1.8.8-.2 1.6.3 1.8 1.2.7 3.3 1.1 6.7 1.1 10.1-.1 26.7-21.8 48.5-48.6 48.5z"></path>
                          <path
                            d="M50.1 63.9c-.4 0-.8-.2-1.1-.4L24.8 39.2c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l23.2 23.2 46.8-48c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-47.8 49c-.3.3-.7.5-1.1.5z"></path>
                        </svg>
                      </div>
                      <div className='col-sm-8'>
                        <h3>
                          Помощь в составлении резюме
                        </h3>
                      </div>
                    </Row>
                    <Row className={s.priceTopics}>
                      <div className='offset-md-3 col-sm-1'>
                        <svg style={{width: '35px', display: 'block'}} fill="rgb(255, 255, 255)"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 100 100">
                          <path
                            d="M50.1 98.9c-26.7 0-48.5-21.8-48.5-48.5S23.4 1.9 50.1 1.9c8.9 0 17.5 2.4 25.1 7 .7.4.9 1.4.5 2.1-.4.7-1.4.9-2.1.5C66.5 7.2 58.4 5 50.1 5 25 4.9 4.6 25.3 4.6 50.4S25 95.9 50.1 95.9s45.5-20.4 45.5-45.5c0-3.2-.3-6.4-1-9.5-.2-.8.3-1.6 1.2-1.8.8-.2 1.6.3 1.8 1.2.7 3.3 1.1 6.7 1.1 10.1-.1 26.7-21.8 48.5-48.6 48.5z"></path>
                          <path
                            d="M50.1 63.9c-.4 0-.8-.2-1.1-.4L24.8 39.2c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l23.2 23.2 46.8-48c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-47.8 49c-.3.3-.7.5-1.1.5z"></path>
                        </svg>
                      </div>
                      <div className='col-sm-8'>
                        <h3>
                          Репетиция собеседования
                        </h3>
                      </div>
                    </Row>
                    <Row className={s.priceTopics}>
                      <div className='offset-md-3 col-sm-1'>
                        <svg style={{width: '35px', display: 'block'}} fill="rgb(255, 255, 255)"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 100 100">
                          <path
                            d="M50.1 98.9c-26.7 0-48.5-21.8-48.5-48.5S23.4 1.9 50.1 1.9c8.9 0 17.5 2.4 25.1 7 .7.4.9 1.4.5 2.1-.4.7-1.4.9-2.1.5C66.5 7.2 58.4 5 50.1 5 25 4.9 4.6 25.3 4.6 50.4S25 95.9 50.1 95.9s45.5-20.4 45.5-45.5c0-3.2-.3-6.4-1-9.5-.2-.8.3-1.6 1.2-1.8.8-.2 1.6.3 1.8 1.2.7 3.3 1.1 6.7 1.1 10.1-.1 26.7-21.8 48.5-48.6 48.5z"></path>
                          <path
                            d="M50.1 63.9c-.4 0-.8-.2-1.1-.4L24.8 39.2c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l23.2 23.2 46.8-48c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-47.8 49c-.3.3-.7.5-1.1.5z"></path>
                        </svg>
                      </div>
                      <div className='col-sm-8'>
                        <h3>
                          Возможность пройти собеседование у наших партнеров
                        </h3>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <div className={`offset-md-1 col-sm-3 ${s.darkPrice}`}>
                <h3>ЕЖЕМЕСЯЧНЫЙ</h3>
                <span className={s.priceCount2}>8000</span>
                <span className={s.rouble}>₽</span>
                <br/>
                <span style={{fontSize: '0.9rem'}}>ПРОЙДИ ТЕСТ ПОСЛЕ РЕГИСТРАЦИИ, ПОЛУЧИ СКИДКУ 20{"%"}</span>
                <br/>
                <BootstrapButton
                  style={{marginTop: '10px'}}
                  text="Зарегистрироваться"
                  onClick={() => {
                    window.location.href = '/register/student';
                  }}
                  primary
                >Зарегистрироваться</BootstrapButton>
              </div>
              <div className={`col-sm-4 ${s.bluePrice}`}>
                <h1>РАЗОВЫЙ</h1>
                <span className={s.priceCount2}>30000</span>
                <span className={s.rouble}>₽</span>
                <br/>
                <span style={{fontSize: '0.9rem'}}>ЗА 5 МЕСЯЦЕВ</span>
                <br/>
                <BootstrapButton
                  style={{marginTop: '10px'}}
                  text="Зарегистрироваться"
                  onClick={() => {
                    window.location.href = '/register/student';
                  }}
                  primary
                >Зарегистрироваться</BootstrapButton>
              </div>
              <div className={`col-sm-3 ${s.purplePrice}`}>
                <h3>БЕСПЛАТНОЕ ОБУЧЕНИЕ</h3>
                <span className={s.priceCount2}>45000</span>
                <span className={s.rouble}>₽</span>
                <br/>
                <span style={{fontSize: '0.9rem'}}>ОПЛАТА ПОСЛЕ ТРУДОУСТРОЙСТВА</span>
                <br/>
                <BootstrapButton
                  style={{marginTop: '10px'}}
                  text="Зарегистрироваться"
                  onClick={() => {
                    window.location.href = '/register/student';
                  }}
                  primary
                >Зарегистрироваться</BootstrapButton>
              </div>
            </Row>
          </Container>


        </div>
        <div className={s.darkSection}>
          <Container fluid>
            <Row>
              <div className={`${s.firstBlock} col-sm-3`}>
                <h1>20 / 08 / 2017</h1>
                <p>Открыта запись на курс JAVA.</p>
              </div>
              <div className={`${s.secondBlock} col-sm-3`}>
                <h1>01 / 10 / 2017</h1>
                <p>День открытых дверей.</p>
              </div>
              <div className={`${s.thirdBlock} col-sm-3`}>
                <h1>01 / 12 / 2017</h1>
                <p>Презентация новых курсов JS и DevOps.</p>
              </div>
              <div className={`${s.foursBlock} col-sm-3`}>
                <h1>01 / 03 / 2018</h1>
                <p>Первый выпуск.</p>
                <p>Поможем вам пройти первое профессиональное собеседование.</p>
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
                {/* <img src={icon1} alt=""/>*/}
                {/* <h1></h1>*/}
                {/* <p> МФТИ / Сбертех</p>*/}
                {/* <p>„EdHunter дал мне необходимые знания для моей карьеры!“</p>*/}
              </div>
              <div className={`col-sm-4 ${s.headerMargin}`}>
                <img src={icon2} alt=""/>
                <h1>Здесь может быть твое имя</h1>
                <p>Твоя компания</p>
                <p>„EdHunter дал мне необходимые знания для моей карьеры!“</p>
              </div>
              <div className={`col-sm-4 ${s.headerMargin}`}>
                {/* <img src={icon3} alt=""/>*/}
                {/* <h1>Наташа Брезнякова</h1>*/}
                {/* <p> МФТИ / Сбертех</p>*/}
                {/* <p> „EdHunter дал мне необходимые знания для моей карьеры!“</p>*/}
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
            <h3 className={s.textBlue}>Закажи эксклюзивный курс под свои требования за половину стоимости до 1
              октября.</h3>
            <div className={s.blockCenter}>
              <Button
                text="Для компаний"
                onClick={() => {
                  window.location.href = '/register/company';
                }}
                primary
              />
            </div>
          </Row>
          <Row className={s.processVideoRow} id="company-video">
            <Col className={s.textLeft}>
              <h2 className={s.textBlue}>Работодателю</h2>
            </Col>
            <div className={s.videoWrapper}>
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/iDx3gu13tfE"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </Row>
        </Container>
        <div className={s.contactBlock} id="contacts">
          <Container>
            <Row className={s.headerPadding}>
              <h1 className={s.blockCenter}>СВЯЗАТЬСЯ С НАМИ</h1>
            </Row>
            <Row>
              <div className={`${s.contacts} col-sm-4`}>
                {/* <h3 className={s.textBlue}>НАШ АДРЕС</h3>*/}
                {/* <p>Москва, пр. Ленина 18 Офис 352</p>*/}
                <h3 className={s.textBlue}>ПОЗВОНИТЕ НАМ</h3>
                <p>+ 7 (916) 600 00 40</p>
                <h3 className={s.textBlue}>НАПИШИТЕ НАМ</h3>
                <p>team@edhunter.ru</p>
              </div>
              <div className={`${s.contactForm} col-sm-7 offset-md-1`}>
                <h3 className={s.textBlue}>Установить контакт. Мы любим, когда нам пишут. Пишите больше!</h3>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Ваше имя</Label>
                    <Input
                      onBlur={e => this.changeFieldName('name', e.target.value)}
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Ваше имя"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      onBlur={e =>
                        this.changeFieldName('email', e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Ваш телефон</Label>
                    <Input
                      onBlur={e =>
                        this.changeFieldName('phone', e.target.value)}
                      type="phone"
                      name="phone"
                      id="phone"
                      placeholder="Ваш телефон"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Ваше сообщение</Label>
                    <Input
                      onBlur={e =>
                        this.changeFieldName('message', e.target.value)}
                      type="phone"
                      name="phone"
                      id="phone"
                      placeholder="Ваше сообщение"
                    />
                  </FormGroup>
                </Form>
                <Button onClick={() => this.send()} text="Отправить" primary/>
                {this.state.notification
                  ? <p>
                    {this.state.notification}
                  </p>
                  : null}
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
