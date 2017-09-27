import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Styles.css';
import {
  Container, Row, Col, Form, FormGroup, Label, Input, Button
} from 'reactstrap';

class Stream extends React.Component {
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
                  <iframe className={s.iframeContainer} id="bigmarker_embed_conference_room"
                          src="https://www.bigmarker.com/conferences/ec514afa6157/attend_check?iframe=true" width="720" height="402" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Stream);
