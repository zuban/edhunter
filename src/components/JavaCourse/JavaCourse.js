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
import java from './java2.png'
import js from './js.png'

class JavaCourse extends React.Component {
  render() {
    return (
      <div className={s.courseContainer}>
        <Container>
          <Row>
            <Col>
              <h1 className={s.whatWeDo}>ЧТО МЫ ДЕЛАЕМ?</h1>
              <h3 className={s.sellText}>
                Даем только необходимые знания, сокращаем дистанцию между тобой и профессией, готовим под требования
                компании, настраиваем контакт между тобой и преподавателем а также помогаем подготовить резюме — всё это
                мы делаем с помощью
                наших курсов:
              </h3>
            </Col>
          </Row>
        </Container>
        <Container className={s.javaContainer}>
          <Row>
            <div className={`col-sm-4 ${s.javaBackground} ${s.textCenter}`}>
              <img
                src={java}
                width="50%"
                alt="EdHunter"
                className={s.javaPicture}
              />
            </div>
            <div className={`col-sm-8 ${s.javaDescription}`}>
              <h1>ПРОФЕССИЯ: JAVA РАЗРАБОТЧИК</h1>
              <p>В начале курса коротко рассматриваются основные концепции и синтаксические особенности языка и далее
                разбираются уже сложные и интересные возможности платформы Java. Во второй части рассматриваются
                библиотеки и фреймворки, используемые для создания крупных проектов (Spring, Hibernate, etc).
              </p>
              <ul>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 1.</strong> Процесс разработки
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 2.</strong> Java core
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 3.</strong> Многопоточность
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 4.</strong> JVM
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 5.</strong> Clean code
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 6.</strong> Enterprise
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 7.</strong> WEB
                  </a>
                </li>
              </ul>

              <i className={`fa fa-arrow-right fa-4 ${s.javaIcon}`} aria-hidden="true">
                <a href="/java" className={s.javaDescriptionButton}>ПОДРОБНЕЕ</a>
              </i>
              <div className={s.greenNote}><a className={s.groupLink} href="/register/student">01.12 - НАБОР ВТОРОЙ
                ГРУППЫ</a></div>
            </div>
          </Row>
        </Container>
        <Container className={s.javaContainer}>
          <Row>
            <div className={`col-sm-4 ${s.reactBackground} ${s.textCenter}`}>
              <img
                src={js}
                width="60%"
                alt="EdHunter"
                className={s.reactPicture}
              />
            </div>
            <div className={`col-sm-8 ${s.javaDescription}`}>
              <h1>ПРОФЕССИЯ: WEB РАЗРАБОТЧИК</h1>
              <p>Язык разметки HTML и таблицы стилей CSS устроены намного проще, чем кажется. Порция хорошей теории
                и практики на наших занятиях обеспечит вас уверенными базовыми знаниями.</p>
              <ul>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 1.</strong> Кросс-браузерная верстка HTML и
                    CSS.
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 2.</strong> Язык программирования JavaScript.
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 3.</strong> JavaScript в браузере и Web API.
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 4.</strong> Библиотека React.
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 5.</strong> Создание одностраничного
                    веб-приложения.
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 9.</strong> Шаблоны MVC, MVVM.
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 7.</strong> Композиция компонентов. JSX.
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <strong>Модуль 8.</strong> Роутинг в приложении.
                  </a>
                </li>
              </ul>
              <i className={`fa fa-arrow-right fa-4 ${s.reactIcon}`} aria-hidden="true">
                <a href="/register/student" className={s.reactDescriptionButton}>ПОДРОБНЕЕ</a>
              </i>
              <div className={s.note}><span>КУРС В РАЗРАБОТКЕ</span></div>
            </div>
          </Row>
        </Container>
        <Container className={s.companyContainer}>
          <Row>
            <Col className={s.companyNamePadding}>
              <h1>ЗДЕСЬ МОЖЕТ БЫТЬ КУРС ПО ВАШИМ ТРЕБОВАНИЯМ</h1>
              <p>Любая компания, занимающаяся разработкой программного обеспечения, несмотря на несомненную схожесть
                требований к специалистам, имеет свои индивидуальные запросы.
                Эти нюансы требований к компетенциям и квалификации кандидата часто являются самыми важными для
                компании. И для «доучивания» каждого нового сотрудника приходится тратить и время и средства компании.
                Мы неоднократно сталкивались с такой ситуацией в своей личной практике.
                Курс, полностью удовлетворяющий специфическим запросам именно Вашей компании, позволит решить эту проблему
                и, как результат, сэкономить Ваши временные и финансовые ресурсы.</p>
              <i className={`fa fa-arrow-right fa-4 ${s.companyIcon}`} aria-hidden="true">
                <a href="/register/company" className={s.companyDescriptionButton}>ЗАКАЗАТЬ</a>
              </i>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(JavaCourse);
