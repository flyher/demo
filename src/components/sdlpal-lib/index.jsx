import React, { Component } from 'react';
import { connect } from 'react-redux';

import ControlPanel from './control-panel';
import ToyPanel from './toy-panel';

import { type } from '../../store/type';
import './index.scss';

class SdlpalLib extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="sdlpal-lib">
        <div className="container-all">
          <div className="left">
            <ControlPanel />
          </div>
          <div className="right">
            <ToyPanel />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    version: state.sdlpallib.version
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    // click: (item) => {
    //   dispatch({ type: type.xxx, item: item });
    // }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SdlpalLib)
