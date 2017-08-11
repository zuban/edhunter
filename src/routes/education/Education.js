/**
 * Created by sergeyzubov on 11/08/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Styles.css';
import Button from '../../components/Button';
import qs from 'qs'
import Page from '../../components/Page';
import education from './education.md';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class Education extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };


  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row>
            <Col>
              <Page {...education}/>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Education);
