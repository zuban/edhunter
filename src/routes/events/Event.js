import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Styles.css';
import {Container, Row, Col, Form, FormGroup, Label, Input, Button
} from 'reactstrap';

class Event extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row>
            <h1>
              Вебинар. НЕАДЕКВАТНОЕ Java интервью
            </h1>
          </Row>
          <Row>
            <br/>
            <h1 className={s.textBlue}>
              Спикеры вебинара:
            </h1>
          </Row>
          <Row>
            <br/>
            <h2>
              Влад Яковлев, академический директор, Edhunter
            </h2>
            <br/>
            <h2>
              Александр Маторин, ведущий ментор, Edhunter
            </h2>
          </Row>
          <Row>
            <br/>
            <h2 className={s.textBlue}>
              В блоке ВОПРОС-ОТВЕТ вы сможете задать интересующие вас вопросы.
              Кроме того, в прямом эфире, мы разыграем два места на обучение. Победителям для получения выигрыша нужно будет связаться с нами в прямом эфире по номеру телефона.
            </h2>
          </Row>
          <Row>
            <Form className={s.webinarContainer} action="https://edhunter.webinarninja.co/my/wnwebinarlist/thankyouOnSite/90593" method="POST">
              <FormGroup>
                <Label for="full_name"><h5>Ваше имя</h5></Label>{'  '}
                <Input type="text" name="full_name" id="full_name" placeholder="Ваше имя" required/>
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="email"><h5>Email</h5></Label>{' '}
                <Input type="email" name="email" id="email" placeholder="Email" required/>
              </FormGroup>
              {' '}
              <Button>Зарегистрироваться на вебинар!</Button>
              <br/><br/>
              Powered by<br/>
              <a href="https://webinarninja.co" target="_blank">
                <img src="https://cdn.webinarninja.co/mytest/default/images/logo.png" width="150px"
                     height="auto"/>
              </a>
            </Form>

            {/*<div className="form">*/}
              {/*<div className="main">*/}
                {/*<div className="head">*/}
                  {/*<form action="https://edhunter.webinarninja.co/my/wnwebinarlist/thankyouOnSite/90593" method="POST">*/}
                    {/*<h2>Edhunter Online school</h2>*/}
                    {/*<p>Webinar registration</p> <br/>*/}
                    {/*<div className="name">*/}
                      {/*<b>Full name*</b> <br/>*/}
                      {/*<input type="text" name="full_name" placeholder="Type Your Name" style={{*/}
                        {/*width: '175px',*/}
                        {/*height: '30px',*/}
                        {/*border: '1px #0062c4 solid',*/}
                        {/*borderRadius: '5px',*/}
                        {/*padding: '5px'*/}
                      {/*}}/>*/}
                    {/*</div>*/}
                    {/*<div className="email">*/}
                      {/*<b>Email*</b> <br/>*/}
                      {/*<input type="email" name="email" placeholder="Type Your Email" style={{*/}
                        {/*width: '175px',*/}
                        {/*height: '30px',*/}
                        {/*border: '1px #0062c4 solid',*/}
                        {/*borderRadius: '5px',*/}
                        {/*padding: '5px'*/}
                      {/*}} required/>*/}
                    {/*</div>*/}
                    {/*<button type="submit" className="#" style={{*/}
                      {/*padding: '0px',*/}
                      {/*cursor: 'pointer',*/}
                      {/*backgroundColor: '#2D59CF',*/}
                      {/*color: '#FFF',*/}
                      {/*width: '100px',*/}
                      {/*height: '30px',*/}
                      {/*textAlign: 'center',*/}
                      {/*fontFamily: 'Open Sans',*/}
                      {/*borderRadius: '5px',*/}
                      {/*textDecoration: 'none',*/}
                      {/*border: 'none',*/}
                      {/*marginTop: '20px'*/}
                    {/*}}> Register*/}
                    {/*</button>*/}
                    {/*<br/><br/>*/}
                    {/*Powered by<br/>*/}
                    {/*<a href="https://webinarninja.co" target="_blank">*/}
                      {/*<img src="https://cdn.webinarninja.co/mytest/default/images/logo.png" width="150px"*/}
                           {/*height="auto"/>*/}
                    {/*</a>*/}
                  {/*</form>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Event);
