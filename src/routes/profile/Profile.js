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
} from 'reactstrap';
import TestForm from '../../components/TestForm';
class Profile extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      notification: null,
    };
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
    const {testPassed} = this.props;
    return (
      <div className={s.root}>
        <Container className={s.container}>
          { !testPassed ? <Row>
            <TestForm onSubmit={(props) => this.handleSubmit(props)}></TestForm>
            {this.state.notification
              ? <h2 style={{margin: '1rem auto'}} className={s.textBlue}>
                {this.state.notification}
              </h2>
              : null}
          </Row> :
            <Row className={s.processVideoRow}>
              <Col className={s.textLeft}>
                <h2>Поздравляем! Вы получаете скидку 20% на курс!</h2>
              </Col>
              <Col className={s.textLeft}>
                <h3>
                  <a href="https://www.dropbox.com/sh/pxywvwu9kjr8km8/AAC_ZJHtOJPuNO4w4EKe-tfja?dl=0">Ссылка</a>
                  &nbsp;на 3 домашних задания.
                </h3>
              </Col>
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
            </Row>}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  testPassed: state.runtime.testPassed,
});

export default connect(mapStateToProps, null)(
  withStyles(s)(Profile),
);

