/**
 * Created by sergeyzubov on 11/08/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Styles.css';
import Page from '../../components/Page';
import terms from './terms.md';
import { Container, Row, Col } from 'reactstrap';

class Terms extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row>
            <Col>
              <Page {...terms} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Terms);
