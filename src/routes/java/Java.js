import React from 'react';
import PropTypes from 'prop-types';
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
} from 'reactstrap';

class Java extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };


  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Java);
