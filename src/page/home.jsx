import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';

import SdlpalLib from '../components/sdlpal-lib';
import './home.scss';

export class PageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div className="page-home">
          <SdlpalLib />
        </div>
      </Provider>
    )
  }
}
