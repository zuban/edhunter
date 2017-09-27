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
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
    const {testPassed, plans} = this.props;
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
              {/*<Container>*/}
                {/*<Row>*/}
                  {/*<Col className={s.webinarDescription}>*/}
                    {/*<Row>*/}
                      {/*<Col>*/}
                        {/*<div className={s.whiteBlock} id="prices">*/}
                          {/*<Container>*/}
                            {/*<Row className={s.priceContainer2}>*/}
                              {/*<Col className={s.priceRow2}>*/}
                                {/*<h2 className={s.priceName2}>Думаете какой тариф выбрать? Напишите нам на*/}
                                  {/*team@edhunter.ru и мы вас проконсультируем.</h2>*/}
                              {/*</Col>*/}
                            {/*</Row>*/}
                            {/*<Row>*/}
                              {/*<div className={`offset-md-1 col-sm-3 ${s.darkPrice}`}>*/}
                                {/*<h3>ЕЖЕМЕСЯЧНЫЙ</h3>*/}
                                {/*<span className={s.priceCount2}>6400</span>*/}
                                {/*<span className={s.rouble}>₽</span>*/}
                                {/*<br/>*/}
                                {/*<BootstrapButton*/}
                                  {/*style={{marginTop: '10px'}}*/}
                                  {/*text="Зарегистрироваться"*/}
                                  {/*onClick={this.toggleMonthly}*/}
                                  {/*primary*/}
                                {/*>Оплатить</BootstrapButton>*/}
                              {/*</div>*/}
                              {/*<div className={`col-sm-4 ${s.bluePrice}`}>*/}
                                {/*<h1>РАЗОВЫЙ</h1>*/}
                                {/*<span className={s.priceCount2}>30000</span>*/}
                                {/*<span className={s.rouble}>₽</span>*/}
                                {/*<br/>*/}
                                {/*<span style={{fontSize: '0.9rem'}}>ЗА 5 МЕСЯЦЕВ</span>*/}
                                {/*<br/>*/}
                                {/*<BootstrapButton*/}
                                  {/*style={{marginTop: '10px'}}*/}
                                  {/*text="Зарегистрироваться"*/}
                                  {/*onClick={this.toggleFullCourse}*/}
                                  {/*primary*/}
                                {/*>Оплатить</BootstrapButton>*/}
                              {/*</div>*/}
                              {/*<div className={`col-sm-3 ${s.purplePrice}`}>*/}
                                {/*<h3>БЕСПЛАТНОЕ ОБУЧЕНИЕ</h3>*/}
                                {/*<span className={s.priceCount2}>45000</span>*/}
                                {/*<span className={s.rouble}>₽</span>*/}
                                {/*<br/>*/}
                                {/*<span style={{fontSize: '0.9rem'}}>ОПЛАТА ПОСЛЕ ТРУДОУСТРОЙСТВА</span>*/}
                                {/*<br/>*/}
                                {/*<BootstrapButton*/}
                                  {/*style={{marginTop: '10px'}}*/}
                                  {/*text="Зарегистрироваться"*/}
                                  {/*onClick={() => {*/}
                                    {/*window.location.href = '/register/student';*/}
                                  {/*}}*/}
                                  {/*primary*/}
                                {/*>Выбрать</BootstrapButton>*/}
                              {/*</div>*/}
                            {/*</Row>*/}
                          {/*</Container>*/}


                        {/*</div>*/}
                      {/*</Col>*/}
                    {/*</Row>*/}
                  {/*</Col>*/}
                {/*</Row>*/}
              {/*</Container>*/}
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
          <ModalHeader toggle={this.toggleMonthly}>Modal title</ModalHeader>
          <ModalBody>
            modalMonthly
          </ModalBody>
          <ModalFooter>
            <BootstrapButton color="primary" onClick={this.toggleMonthly}>Do Something</BootstrapButton>{' '}
            <BootstrapButton color="secondary" onClick={this.toggleMonthly}>Cancel</BootstrapButton>
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
});

export default connect(mapStateToProps, null)(
  withStyles(s)(Profile),
);

