/**
 * Created by sergeyzubov on 11/08/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Styles.css';
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  FormText,
  Input,
  Button as BootstrapButton
} from 'reactstrap';
import TestForm from '../../components/TestForm';

class Profile extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      notification: null,
      modalMonthly: false,
      modalFullCourse: false
    };
    this.toggleMonthly = this.toggleMonthly.bind(this);
    this.toggleFullCourse = this.toggleFullCourse.bind(this);
  }


  toggleMonthly() {
    this.setState({
      modalMonthly: !this.state.modalMonthly
    });
  }

  toggleFullCourse() {
    this.setState({
      modalFullCourse: !this.state.modalFullCourse
    });
  }

  sendRequest() {
  }

  handleSubmit(props) {
    const _this = this;
    fetch("/api/test-form", {
      method: "POST",
      body: JSON.stringify(props),
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      if (response.status === 500) {
        throw new Error();
      }
      else {
        return response.json();
      }
    }).then(function (result) {
      location.reload();
    }).catch(function (error) {
      _this.setState({
        notification: 'Вы не прошли тест. Попробуйте еще раз.',
      });
    });
  }

  render() {
    const {testPassed, plans, userId} = this.props;
    return (
      <div>
        {!testPassed ? <div className={s.root}>
            <Container className={s.container}><Row>
              <TestForm onSubmit={(props) => this.handleSubmit(props)}></TestForm>
              {this.state.notification
                ? <h2 style={{margin: '1rem auto'}} className={s.textBlue}>
                  {this.state.notification}
                </h2>
                : null}
            </Row>
            </Container>
          </div> :


          <div className={s.bigmarkerContainer}>
            <Container className={s.containerLogo}>
              <h1></h1>
            </Container>
            <div className={s.containerDescription}>
              {plans.length > 0 ? null :
                <Container>
                  <Row>
                    <Col className={s.webinarDescription}>
                      <Row>
                        <Col>
                          <div className={s.whiteBlock} id="prices">
                            <Container>
                              <Row className={s.priceContainer2}>
                                <Col className={s.priceRow2}>
                                  <h2 className={s.priceName2}>Думаете какой тариф выбрать? Напишите нам на
                                    team@edhunter.ru и мы вас проконсультируем.</h2>
                                </Col>
                              </Row>
                              <Row>
                                <div className={`offset-md-1 col-sm-3 ${s.darkPrice}`}>
                                  <h3>ЕЖЕМЕСЯЧНЫЙ</h3>
                                  <span className={s.priceCount2}>6500</span>
                                  <span className={s.rouble}>₽</span>
                                  <br/>
                                  <BootstrapButton
                                    style={{marginTop: '10px'}}
                                    text="Зарегистрироваться"
                                    onClick={this.toggleMonthly}
                                    primary
                                  >Оплатить</BootstrapButton>
                                </div>
                                <div className={`col-sm-4 ${s.bluePrice}`}>
                                  <h1>РАЗОВЫЙ</h1>
                                  <span className={s.priceCount2}>30000</span>
                                  <span className={s.rouble}>₽</span>
                                  <br/>
                                  <span style={{fontSize: '0.9rem'}}>ЗА 5 МЕСЯЦЕВ</span>
                                  <br/>
                                </div>
                                <div className={`col-sm-3 ${s.purplePrice}`}>
                                  <h3>БЕСПЛАТНОЕ ОБУЧЕНИЕ</h3>
                                  <span className={s.priceCount2}>45000</span>
                                  <span className={s.rouble}>₽</span>
                                  <br/>
                                  <span style={{fontSize: '0.9rem'}}>ОПЛАТА ПОСЛЕ ТРУДОУСТРОЙСТВА</span>
                                  <br/>
                                </div>
                              </Row>
                            </Container>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              }

              {plans.length > 0 ?
                <Container>
                  <Row>
                    <Col className={s.yourBuyPlan}>
                      <h2>
                        Ваши оплаченные курсы:
                      </h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col className={s.javaPlan}>
                      <Card block style={{border: 0}}>
                        <CardTitle>Курс JAVA. Октябрь.</CardTitle>
                        <CardText>Вы оплатили курс JAVA, Александра Маторина. </CardText>
                      </Card>
                    </Col>
                  </Row>
                </Container>
                : null}
              <hr/>
              <Container>
                <Row className={s.processVideoRow}>
                  <Col className={s.textLeft}>
                    <h3>А теперь попробуйте свои силы с неадекватными вопросами по Java:</h3>
                  </Col>
                  <Col className={s.textLeft}>
                    <h2 className={s.textBlue}>Александр Маторин — Неадекватное Java-интервью</h2>
                  </Col>
                  <div className={s.videoWrapper}>
                    <iframe
                      width={560}
                      height={315}
                      src="https://www.youtube.com/embed/AR9dtVaEUSM"
                      frameBorder={0}
                      allowFullScreen
                    />
                  </div>
                  <Col className={s.textLeft}>
                    <h3>
                      <a href="https://www.dropbox.com/sh/pxywvwu9kjr8km8/AAC_ZJHtOJPuNO4w4EKe-tfja?dl=0">Ссылка</a>
                      &nbsp;на 3 домашних задания.
                    </h3>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        }
        <Modal isOpen={this.state.modalMonthly} toggle={this.toggleMonthly}>
          <ModalHeader toggle={this.toggleMonthly}>Оплата курса JAVA</ModalHeader>
          <ModalBody>
            <form method="POST"
                  action="https://money.yandex.ru/quickpay/confirm.xml">
              <input type="hidden"
                     name="receiver"
                     value="410015616964324"/>
              <input type="hidden"
                     name="formcomment"
                     value="Оплата курса JAVA. Октябрь."/>
              <input type="hidden"
                     name="short-dest"
                     value="Оплата курса JAVA. Октябрь."/>
              <input type="hidden"
                     name="label"
                     value={userId}/>
              <input type="hidden"
                     name="quickpay-form"
                     value="donate"/>
              <input type="hidden"
                     name="targets"
                     value={`транзакция ${userId}`}/>
              <input type="hidden"
                     name="sum"
                     value="6500.00"
                     data-type="number"/>
              <input type="hidden"
                     name="comment"
                     value="Укажите свои контактные данные"/>
              <input type="hidden"
                     name="need-fio"
                     value="true"/>
              <input type="hidden"
                     name="need-email"
                     value="true"/>
              <input type="hidden"
                     name="need-phone"
                     value="false"/>
              <input type="hidden"
                     name="need-address"
                     value="false"/>
              <FormGroup tag="fieldset">
                <legend>Выберите тип оплаты:</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" n name="paymentType"
                           value="PC"/>{' '}
                    Яндекс.Деньгами
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="paymentType"
                           value="AC"/>{' '}
                    Банковской картой
                  </Label>
                </FormGroup>
              </FormGroup>
              <input
                type="submit" className="btn btn-secondary" value="Оплатить"/>
            </form>
          </ModalBody>
          <ModalFooter>
            <BootstrapButton color="secondary" onClick={this.toggleMonthly}>Закрыть</BootstrapButton>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalFullCourse} toggle={this.toggleMonthly}>
          <ModalHeader toggle={this.toggleFullCourse}>Modal title</ModalHeader>
          <ModalBody>
            modalFullCourse
          </ModalBody>
          <ModalFooter>
            <BootstrapButton color="primary" onClick={this.toggleFullCourse}>Do Something</BootstrapButton>{' '}
            <BootstrapButton color="secondary" onClick={this.toggleFullCourse}>Cancel</BootstrapButton>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  testPassed: state.runtime.testPassed,
  plans: state.runtime.plans,
  userId: state.runtime.userId,
});

export default connect(mapStateToProps, null)(
  withStyles(s)(Profile),
);

