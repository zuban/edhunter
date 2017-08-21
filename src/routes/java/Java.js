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
              <h2 className={s.textBlue}>Что получает студент за деньги?</h2>
              <h3>Курс Core Java</h3>
              <h3>Курс Java enterprise</h3>
              <h3>Фидбек по каждому ДЗ</h3>
              <h3>Помощь в составлении резюме</h3>
              <h3>Репетиция собеседования</h3>
              <h3>Возможность пройти собеседование у наших партнеров</h3>
            </Col>
          </Row>

          <Row>
            <Col className={s.textLeft}>
              <h2 className={s.textBlue}>Как проходит обучение?</h2>
              <p>
                Каждую неделю проходят 2 вебинара. За время вебинара невозможно
                подробно и глубоко раскрыть новую тему. Поэтому мы решили
                организовать наше обучение по принципу перевернутого
                обучения(ссылка на подробное описание). Цель вебинара – не
                научить вас новой теме, а объяснить применимость темы и
                показать, на что обратить особое внимание при изучении темы.
                Озвучить вопросы, которые чаще всего спрашивают на собеседования
                по данной теме.
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
          <Row>
            <Col className={s.textLeft}>
              <p>
                <span className={s.textBlue}>Требования к студентам:</span>{' '}
                знание основ любого объектно-ориентированного языка, успешно
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
                  <h2 className={s.textBlue}>Обзор платформы Java</h2>
                </div>
                <div className={s.tlBody}>
                  <p>
                    Знакомство с платформой Java, Установка окружения, изучение
                    основных синтаксических конструкций языка.
                  </p>
                  <p>Компиляция и запуск с командной строки. Понятие пакета.</p>
                  <p>Установить Idea, JDK. </p>
                  <p>Создать проект на github. </p>
                  <p>
                    Решить 15 задач на сайте с автоматической проверкой решения
                    на основы синтаксиса.
                  </p>
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
                  <h2 className={s.textBlue}>Классы в Java</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Верхнеуровневые и внутренние классы, static классы</p>
                  <p>Наследование, полиморфизм, инкапсуляция</p>
                  <p>Конструкторы, модификаторы доступа.</p>
                  <p>Пакеты lang, util, io. Свои пакеты.</p>
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
                  <h2 className={s.textBlue}>Структуры данных в Java</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Основные интерфейсы коллекций и их реализации.</p>
                  <p>
                    Детали реализаций коллекций, Оценка сложности основных
                    операций.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.tldate}>Sprint 4</div>
            </li>
            <li className={s.timelineInverted}>
              <div className={s.timelinePanel}>
                <div className={s.tlHeading}>
                  <h2 className={s.textBlue}>Сборка проекта, тестирование</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Maven</p>
                  <p>Подключение зависимостей</p>
                  <p>Тестирование с помощью JUnit</p>
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
                  <h2 className={s.textBlue}>Обработка исключений.</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Иерархия исключений. Checked и runtime исключения.</p>
                  <p>Конструкция try-catch-finally.</p>
                  <p>Правильное закрытие ресурсов.</p>
                  <p>Использование своих исключений.</p>
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
                  <h2 className={s.textBlue}>Generics</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Параметризация классов, методов, переменных</p>
                  <p>Границы дженериков T extends</p>
                  <p>Wildcards. ? extends, ? super</p>
                  <p>Type erasure</p>
                  <p>Гибкое API с дженериками</p>
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
                  <h2 className={s.textBlue}>Reflection</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Пакет java.lang.reflect</p>
                  <p>
                    Класс Class{'<T>'}{' '}
                  </p>
                  <p>Получение информации о классе, полях, методах. </p>
                  <p>Вызовы методов, изменение полей. </p>
                  <p>Создание прокси объектов. </p>
                  <p>Использование Аннотаций </p>
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
                  <h2 className={s.textBlue}>Загрузка классов</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Класслоадеры, их иерархия, модель делегации</p>
                  <p>Использование своих класслоадеров</p>
                  <p>Типичные исключения при загрузке классов</p>
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
                  <h2 className={s.textBlue}>Java 8</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Дефолтные методы</p>
                  <p>Лямбды</p>
                  <p>stream api</p>
                  <p>функциональное программирование</p>
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
                  <h2 className={s.textBlue}>Введение в многопоточность</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Создание и запуск потоков</p>
                  <p>Демон потоки</p>
                  <p>Состояния потока</p>
                  <p>join и sleep методы</p>
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
                  <h2 className={s.textBlue}>Java memory model</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Понятие happens before</p>
                  <p>Reordering, visiblity</p>
                  <p>Семантика volatile, synchronized, final</p>
                  <p>double check locking</p>
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
                  <h2 className={s.textBlue}>Пакет java.util.concurrent</h2>
                </div>
                <div className={s.tlBody}>
                  <p>thread pools</p>
                  <p>locks</p>
                  <p>atomics</p>
                  <p>concurrent data structures</p>
                  <p>futures</p>
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
                  <h2 className={s.textBlue}>Сериализация</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Serializable, Externalizable интерфейсы</p>
                  <p>Версии классов</p>
                  <p>Десериализация</p>
                  <p>Типичные исключения при сериализации/десериализации</p>
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
                  <h2 className={s.textBlue}>JVM</h2>
                </div>
                <div className={s.tlBody}>
                  <p>Оптимизации JIT.</p>
                  <p>Алгоритмы GC</p>
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
