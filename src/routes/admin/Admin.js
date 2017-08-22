/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Admin.css';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
class Admin extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      gridData: [],
    }
  }


  componentDidMount() {
    const _this = this;
    fetch("/api/users", {
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      return response.json();
    }).then(function (result) {
      _this.setState({gridData: result.gridData})
    }).catch(function (error) {
      console.log('Request failed', error);
    });
  }

  static propTypes = {
    title: PropTypes.string
  };

  render() {
    return (
      <div className={s.root}>
        <Container className={s.container}>
          <Row>
            <Col>
              <table className="table">
                <thead>
                <tr>
                  <th>Email</th>
                  <th>Имя</th>
                  <th>Телефон</th>
                  <th>About</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.gridData.map(item => {
                    return (<tr>
                      <th scope="row">{item.email}</th>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.about}</td>
                    </tr>)
                  })
                }
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
