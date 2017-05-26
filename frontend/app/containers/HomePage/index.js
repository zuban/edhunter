/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col, Media } from 'reactstrap';
// components
import Header from '../../components/Header';

// import styles
import style from './home.css';
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <Container className={style.jumbCont}>
          <div className="row">
            <Jumbotron className={style.jumbotronImage}>
              <h1 className="display-3">Подготовка студентов к собеседованиям</h1>
              <p className="lead">Мы команда профессионалов, подготовим тебя к собеседованиям в ведущие компании</p>
              <hr className="my-2" />
              <p>Курсы Java, Javascript, DevOps</p>
              <p className="lead">
                <Button color="primary">Узнать больше!</Button>
              </p>
            </Jumbotron>
          </div>
          <div
            className="row"
            style={{
              textAlign: 'center',
              paddingTop: '15px',
              backgroundColor: '#f7f7f7',
              boxShadow: '0px 3px 5px 0 rgba(174,174,174,0.5)',
              fontWeight: 'bold',
            }}
          >
            <div className="col-md-3 webinar-promo-image">
              <img
                src="https://hyzxph.media.zestyio.com/CloudPlatform_HorizontalLockup.f1cb27a519bdb5b6ed34049a5b86e317.png"
                width="205" alt="CloudPlatform_HorizontalLockup.png"
              />
            </div>
            <div className="col-md-6 webinar-promo-info">
              <p>Зарегестрируйся сейчас, чтобы получить всю информацию. Проект создан при поддержке РАН</p>

            </div>
            <div className="col-md-3 webinar-promo-cta" style={{ marginTop: '12px' }}>
              <a href="http://hashi.co/2pTfR4h">ПОПРОБОВАТЬ</a>
            </div>
          </div>

          <div
            className="row"
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: '2rem',
            }}
          >
            <div
              style={{ margin: '0 auto' }}
            >
              <h2>Наши партнеры: </h2>
              <p
                style={{
                  color: '#717f86',
                  lineHeight: '1.6',
                  fontSize: '18px',
                  fontWeight: 'lighter',
                }}
              >Ведущие IT компании в России. Банки, поисковые системы, интеграторы.
                Мы подготовим тебя для собеседования в любую из них.
                Подберем курсы, которые будут интересны тебе. </p>
            </div>
          </div>
          <Row style={{ marginTop: '20px' }}>
            <Col>
              <img
                style={{ maxWidth: '120px', marginTop: '8px' }}
                src="https://www.abbyy.com/images/Company/Gallery/Logos/Logo_ABBYY.png"
              />
            </Col>
            <Col>
              <img
                style={{ maxWidth: '90px', marginTop: '8px' }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Yandex_logo_en.svg/1024px-Yandex_logo_en.svg.png"
              />
            </Col>
            <Col>
              <img style={{ maxWidth: '120px' }} src="https://www.luxoft.com/static/images/luxoft/luxoft-logo-full.jpg" />
            </Col>
            <Col>
              <img style={{ maxWidth: '130px' }} src="http://www.park.by/media/enterprises/16255.png" />
            </Col>
            <Col>
              <img
                style={{ maxWidth: '130px', marginTop: '8px' }}
                src="https://media.licdn.com/media/p/1/000/1ac/3e5/28257ac.png"
              />
            </Col>
            <Col>
              <img
                style={{ maxWidth: '120px', marginTop: '8px' }}
                src="https://cdn.press.kaspersky.com/files/2013/06/Kaspersky_rgb.jpg"
              />
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    );
  }
}
