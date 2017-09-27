import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BigmarkerStyles.css';
import {
  Container, Row, Col, Form, FormGroup, Label, Input, Button
} from 'reactstrap';

class BigmarkerEvent extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div className={s.bigmarkerContainer}>
        <Container className={s.containerLogo}>
          <h1>30.09.2017 - Особенности онлайн обучения в Edhunter по программе Java Developer</h1>
        </Container>
        <div className={s.containerDescription}>
          <Container>
            <Row>
              <Col className={s.webinarDescription}>
                <Row>
                  <Col sm={6} className={s.descriptionBlock}>
                    <h1 className={s.textBlue}>
                      Спикеры вебинара:
                    </h1>
                    <br/>
                    <h2>
                      Влад Яковлев, академический директор, Edhunte
                    </h2>
                    <br/>
                    <h2>
                      Александр Маторин, ведущий ментор, Edhunter
                    </h2>
                    <p>В блоке ВОПРОС-ОТВЕТ вы сможете задать интересующие вас вопросы. Кроме того, в прямом эфире, мы
                      разыграем место на обучение. Победителям для получения выигрыша нужно будет связаться с нами в
                      прямом эфире по номеру телефона.</p>
                  </Col>
                  <Col sm={6}>
                    <div className={s.webinar} id="bigmarker-conference-widget-containerec514afa6157"></div>
                    <script
                      src="https://www.bigmarker.com/widget/script.js?club=edhunter-ru&style=conference&color=35a35c&btext=Регистрация&bs=big&cid=ec514afa6157&conferences=Java-Developer"
                      type="text/javascript"></script>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    );
  }
}

export default withStyles(s)(BigmarkerEvent);
