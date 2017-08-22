/**
 * Created by sergeyzubov on 11/08/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Styles.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

class Profile extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };


  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row className={s.processVideoRow}>
            <Col className={s.textLeft}>
              <h2 className={s.textBlue}>ВЛАД ЯКОВЛЕВ</h2>
            </Col>
            <div className={s.videoWrapper}>
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/Nh1cVIdpVUw"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </Row>
          <Row className={s.processVideoRow}>
            <Col className={s.textLeft}>
              <h2 className={s.textBlue}>ДМИТРИЙ РУМЯНЦЕВ</h2>
            </Col>
            <div className={s.videoWrapper}>
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/iDx3gu13tfE"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Profile);
