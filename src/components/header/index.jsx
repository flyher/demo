import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './index.scss';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const logo = require('../../assets/icon.png');
    return (
      <div className="header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">
            <img
              alt=""
              // src={logo.default}
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
      React Bootstrap
    </Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}
