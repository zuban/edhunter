import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Styles.css';
import {Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import Link from '../../components/Link';
import Homework from '../../components/Homework';
class Java extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row className={s.javaCourse}>
            <Col>
              <h1 className={s.courseName}>
                Курс <span className={s.textBlue}>“Платформа Java”</span>
              </h1>
            </Col>
          </Row>
          <Row className={s.javaCourse}>
            <Col>
              <h2 className={s.textBlue}>
                Продолжительность: 5 месяцев, 2 занятия в неделю
              </h2>
              <h2 className={s.textBlue}>
                Необходимое время в неделю: по 4 академических часа на занятия и
                на домашнюю работу
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className={s.textLeft}>
              <p>
                Данный курс предназначен для тех, кто хочет сделать Java своим
                основным языком. В начале курса коротко рассматриваются основные
                концепции и синтаксические особенности языка и далее разбираются
                уже сложные и интересные возможности платформы Java. Во второй
                части курса рассматриваются библиотеки и фреймворки,
                используемые для создания крупных проектов (Spring, Hibernate,
                etc).
              </p>
              <p>
                В течение курса мы будем обращать особое внимание на те вопросы
                и особенности языка, которые критически важно понимать для
                создания качественного ПО. Знания этих же тем чаще всего
                проверяют на собеседованиях на позицию Java разработчик.
              </p>
              <p>
                Основная цель данного курса не просто научить вас писать на
                Java, но объяснить, что значит писать красивый поддерживаемый
                код. Для этого нужно быть уверенным, что вы правильно
                используете синтаксические конструкции языка, глубоко понимаете
                семантику этих конструкций, выбираете оптимальные библиотеки и
                фреймворки для решения задачи, и ваш код соответствует принципам
                объектно-ориентировочного дизайна.
              </p>
              <p>
                После каждого домашнего задания вам будет даваться фидбек, что,
                почему и как можно улучшить. Со временем у вас выработается
                “чувство прекрасного” при написании кода и понимание, что такое
                хороший код.
              </p>
              <p>
                Помимо самого языка в курс включены следующие модули: алгоритмы
                и структуры данных, оценка алгоритмической сложности,
                тестирование кода, паттерны проектирования, работа с базами
                данных, SQL, web ui, работа с git, методология разработки ПО,
                эффективная работа с IDE IntelliJ IDEA.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className={s.textLeft}>
              <h2 className={s.textBlue}>Как проходит обучение?</h2>
              <p>
                Каждую неделю проходят 2 вебинара. За время вебинара невозможно
                подробно и глубоко раскрыть новую тему. Поэтому мы решили
                организовать наше обучение по принципу{' '}
                <Link to="/education">
                  <span>перевернутого обучения</span>
                </Link>. Цель вебинара – не научить вас новой теме, а объяснить
                применимость темы и показать, на что обратить особое внимание
                при изучении темы. Озвучить вопросы, которые чаще всего
                спрашивают на собеседования по данной теме.
              </p>
              <p>
                Глубокое изучение темы остается за студентом в свободное время.
                Мы со своей стороны тщательно отбираем материалы, которые
                студенты должны пройти. У студентов есть возможность в любое
                время задать вопрос преподавателю по непонятным моментам.
              </p>
              <p>
                Также к каждой теме есть достаточно большое домашнее задание.
                Задание нужно сделать, выложить в github или bitbucket. После
                этого преподаватель делает code review и дает вам фидбек, что и
                как можно улучшить. Возможно, бОльшая ценность этого курса,
                заключается именно в этом фидбеке. Почему? Теоретических знаний
                о Java в свободном доступе найти не сложно, но иметь опытного
                ментора, который посмотрит ваш код, и объяснит, что можно
                сделать лучше – это действительно ценно. В процессе ревью
                проверяется не только правльность решения, но и “красота” кода,
                соответствие принципам объектно-ориентированного дизайна.
              </p>
              <p>
                В некоторых заданиях студенты сами будут делать код ревью других
                студентов, чтобы попробовать себя и со стороны того кто дает код
                на ревью, и того кто это ревью делает, поучаствовать в командной
                разработке.
              </p>
              <p>
                В процессе обучения будут вебинары, на которых мы повторяем
                пройденные темы в формате интервью, обсуждаем вопросы, которые
                часто спрашивают на собеседованиях.
              </p>
              <p>
                Так же, в курс включена индивидуальная репетиция собеседования
                на позицию Java разработчик с каждым студентом.
              </p>
            </Col>
          </Row>
          <Row className={s.processVideoRow}>
            <Col className={s.textLeft}>
              <h2 className={s.textBlue}>Cтруктура курса</h2>
            </Col>
            <div className={s.videoWrapper}>
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/6kqfSNPgdNo"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </Row>
          <Row>
            <Col className={s.textLeft}>
              <h2 className={s.textBlue}>Требования к студентам</h2>
              <p>
                Знание основ любого объектно-ориентированного языка, успешно
                сданный вступительный тест.
              </p>
            </Col>
          </Row>
        </Container>
        <div className={s.javaTeacherContainer}>
          <Container>
            <Row>
              <Col>
                <h1 className={s.darkText}>
                  <span className={s.textBlue}>Александр Маторин</span>{' '}
                  Преподаватель
                </h1>
              </Col>
            </Row>
            <Row>
              <div className={`${s.teacherDescription} col-sm-7`}>
                <Row className={s.textCenterGrey}>
                  <div
                    className={`${s.marginTeacherBlock}col-sm-12  text-center`}
                  >
                    <p>
                      Закончил Саратовский государственный университет им. Н.Г.
                      Чернышевского, факультет компьютерных наук и
                      информационных технологий по специальности “компьютерная
                      безопасность” в 2010 году.
                    </p>
                    <p>Имеет 9 лет опыта коммерческой разработки ПО на Java.</p>
                    <p>
                      Работает в компании "Сбербанк-Технологии" в должности
                      главного руководителя разработки. Отвечает за техническую
                      сторону систем управления рисками на финансовых рынках.
                    </p>
                    <p>
                      Преподает в магистратуре МФТИ курсы по Java и по
                      распределённым системам.
                    </p>
                    <p>
                      Постоянный участник и спикер на крупнейших российских и
                      международных Java конференциях (JPoint, Joker, JBreak,
                      JEEConf, JavaOne).
                    </p>
                  </div>
                </Row>
              </div>
              <div className={`${s.matoringBlock} col-sm-7 offset-md-5`}/>
            </Row>
          </Container>
          <Container>
            <Row className={s.videoRow}>
              <Col className={s.textLeft}>
                <h2 className={s.textBlue}>О процессе обучения</h2>
              </Col>
              <div className={s.videoWrapper}>
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/9ihoc742Gho"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </Row>
            <Row className={s.videoRow}>
              <Col className={s.textLeft}>
                <h2 className={s.textBlue}>Java-конференция JPoint 2016. Неочевидные Дженерики.</h2>
              </Col>
              <div className={s.videoWrapper}>
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/_0c9Fd9FacU"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </Row>
            <Row className={s.videoRow}>
              <Col className={s.textLeft}>
                <h2 className={s.textBlue}>Java-конференция Joker. Рефакторинг в функциональном стиле.</h2>
              </Col>
              <div className={s.videoWrapper}>
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/rNg8jrWelXk"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </Row>
          </Container>
        </div>
        <Container>
          <ul className={s.timeline}>
            <li>
              <div className={s.tldate}>Модуль 1</div>
            </li>
            <li>
              <div className={s.tlCirc}/>
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h2 className={s.textBlue}>Процесс разработки</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Обзор платформы Java</p>
                  <p>Эффективная работа в IntelliJ IDEA</p>
                  <p>Работа с git</p>
                  <p>Сборка проекта, Тестирование</p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Модуль 2</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.tlCirc}/>
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h2 className={s.textBlue}>Java core</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Основные классы и пакеты</p>
                  <p>Коллекции, оценка сложности</p>
                  <p>Обработка исключений</p>
                  <p>Generics</p>
                  <p>Reflection</p>
                  <p>Сериализация</p>
                  <p>Java 8, Stream API</p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Модуль 3</div>
            </li>
            <li>
              <div className={s.tlCirc}/>
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h2 className={s.textBlue}>Многопоточность</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Синхронизация потоков</p>
                  <p>Java memory model</p>
                  <p>Пакет java.util.concurrent</p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Модуль 4</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h2 className={s.textBlue}>JVM</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Загрузка классов</p>
                  <p>Оптимизации JIT компилятора</p>
                  <p>Алгоритмы сборки мусора</p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Модуль 5</div>
            </li>
            <li>
              <div className={s.tlCirc}/>
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h2 className={s.textBlue}>Clean code</h2>
                </div>
                <div className={s.tlBody}>
                  <p>GoF паттерны</p>
                  <p>Функциональное программирование</p>
                  <p>SOLID принципы</p>
                  <p>Использование своих исключений.</p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Модуль 6</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.tlCirc}/>
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h2 className={s.textBlue}>Enterprise</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Sql, JDBC</p>
                  <p>Springframework (DI, Boot, Web MVC, Data)</p>
                  <p>Hibernate</p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Модуль 7</div>
            </li>
            <li>
              <div className={s.tlCirc}/>
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h2 className={s.textBlue}>WEB</h2>
                </div>
                <div className={s.tlBody}>
                  <p>html</p>
                  <p>css</p>
                  <p>JavaScript</p>
                  <p>JS frameworks</p>
                </div>
              </div>
            </li>
          </ul>
        </Container>
        <div className={s.javaTeacherContainer} id="homework">
          <Container>
            <Homework/>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Java);
