import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Styles.css';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

class Java extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row className={s.javaCourse}>
            <Col>
              <h1>Курс “Платформа Java”</h1>
              <h2>Продолжительность: 5 месяцев, 2 занятия в неделю</h2>
              <h2>
                Необходимое время в неделю: по 4 академических часа на занятия и
                на домашнюю работу
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
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
            <Col>
              <p>
                Требования к студентам: знание основ любого
                объектно-ориентированного языка, успешно сданный вступительный
                тест.
              </p>
            </Col>
          </Row>
        </Container>
        <div className={s.javaTeacherContainer}>
          <Container>
            <Row>
              <Col>
                <h1 className={s.darkText}>Александр Маторин Преподаватель</h1>
              </Col>
            </Row>
            <Row>
              <div className={`${s.teacherDescription} col-sm-7`}>
                <Row className={s.textGrey}>
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
              <div className={`${s.matoringBlock} col-sm-7 offset-md-5`} />
            </Row>
          </Container>
        </div>
        <Container>
          <ul className={s.timeline}>
            <li>
              <div className={s.tldate}>Sprint 1</div>
            </li>
            <li>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Обзор платформы Java</h4>
                  <p>
                    <small>
                      <i className="glyphicon glyphicon-time" /> 6 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>
                      Знакомство с платформой Java, Установка окружения,
                      изучение основных синтаксических конструкций языка.
                    </li>
                    <li>
                      Компиляция и запуск с командной строки. Понятие пакета.
                    </li>
                    <li>Установить Idea, JDK.</li>
                    <li>Создать проект на github.</li>
                    <li>
                      Решить 15 задач на сайте с автоматической проверкой
                      решения на основы синтаксиса.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 2</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Классы в Java</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 12 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Верхнеуровневые и внутренние классы, static классы</li>
                    <li>Наследование, полиморфизм, инкапсуляция</li>
                    <li>Конструкторы, модификаторы доступа.</li>
                    <li>Пакеты lang, util, io. Свои пакеты.</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 3</div>
            </li>
            <li>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Структуры данных в Java</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 18 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Основные интерфейсы коллекций и их реализации.</li>
                    <li>
                      Детали реализаций коллекций, Оценка сложности основных
                      операций.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 4</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Сборка проекта, тестирование</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 4 часа
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Maven</li>
                    <li>Подключение зависимостей</li>
                    <li>Тестирование с помощью JUnit</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 5</div>
            </li>
            <li>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Обработка исключений.</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 18 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Иерархия исключений. Checked и runtime исключения.</li>
                    <li>Конструкция try-catch-finally.</li>
                    <li>Правильное закрытие ресурсов.</li>
                    <li>Использование своих исключений.</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 6</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Generics</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 6 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Параметризация классов, методов, переменных</li>
                    <li>Границы дженериков T extends</li>
                    <li>Wildcards. ? extends, ? super</li>
                    <li>Type erasure</li>
                    <li>Гибкое API с дженериками.</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 7</div>
            </li>
            <li>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Reflection</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 18 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Пакет java.lang.reflect</li>
                    <li>
                      Класс Class{'<T>'}{' '}
                    </li>
                    <li>Получение информации о классе, полях, методах.</li>
                    <li>Вызовы методов, изменение полей.</li>
                    <li>Создание прокси объектов.</li>
                    <li>Использование Аннотаций</li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className={s.tldate}>Sprint 8</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Загрузка классов</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 6 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Класслоадеры, их иерархия, модель делегации</li>
                    <li>Использование своих класслоадеров</li>
                    <li>Типичные исключения при загрузке классов</li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className={s.tldate}>Sprint 9</div>
            </li>
            <li>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Java 8</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 18 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Дефолтные методы</li>
                    <li>Лямбды</li>
                    <li>stream api</li>
                    <li>функциональное программирование</li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className={s.tldate}>Sprint 10</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Введение в многопоточность</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 6 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Создание и запуск потоков</li>
                    <li>Демон потоки</li>
                    <li>Состояния потока</li>
                    <li>join и sleep методы</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 11</div>
            </li>
            <li>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Java memory model</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 18 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Понятие happens before</li>
                    <li>Reordering, visiblity</li>
                    <li>Семантика volatile, synchronized, final</li>
                    <li>double check locking</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 12</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Пакет java.util.concurrent</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 6 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>thread pools</li>
                    <li>locks</li>
                    <li>atomics</li>
                    <li>concurrent data structures</li>
                    <li>futures</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 13</div>
            </li>
            <li>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>Сериализация</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 18 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Serializable, Externalizable интерфейсы</li>
                    <li>Версии классов</li>
                    <li>Десериализация</li>
                    <li>Типичные исключения при сериализации/десериализации</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 14</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.tlCirc} />
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h4>JVM</h4>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time" /> 6 часов
                    </small>
                  </p>
                </div>
                <div style={{ color: 'black' }} className={s.tlBody}>
                  <ul>
                    <li>Оптимизации JIT.</li>
                    <li>Алгоритмы GC</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Java);
