import React from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';
class Feedback extends React.Component {
  render() {
    return <Container className={s.root} fluid>
      <div className="row">
        <div className={s.feedback}>
          <h3>Мы в социальных сетях</h3>
        </div>
      </div>
      <div className="row">
        <div className={s.feedback}>
          <a href="https://vk.com/edhunter_online" className={s.feedbackIcon} title="VK"><i className="fa fa-vk"></i></a>
          <a href="https://www.facebook.com/EdHunterra/" className={s.feedbackIcon} title="Facebook"><i className="fa fa-facebook"></i></a>
          <a href="https://www.youtube.com/channel/UCoNQ9AnLN3kcY-2TeR5aovA" className={s.feedbackIcon} title="youtube"><i className="fa fa-youtube"></i></a>
          <a href="http://t.me/edhunterra" className={s.feedbackIcon} title="telegram"><i className="fa fa-telegram"></i></a>
          <a href="https://www.instagram.com/edhunterra/" className={s.feedbackIcon} title="instagram"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </Container>
  }
}

export default withStyles(s)(Feedback);
