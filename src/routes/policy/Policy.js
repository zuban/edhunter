/**
 * Created by sergeyzubov on 11/08/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Styles.css';
import Page from '../../components/Page';
import policy from './policy.md';
import { Container, Row, Col } from 'reactstrap';

class Policy extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row>
            <Col>
              <Page {...policy} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Policy);
