import React, { Component } from 'react';
import { connect } from 'react-redux';

import { type } from '../../../store/type';
import './index.scss';

class ToyPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log('222222');
  }

  render() {
    return (
      <div className="toy-panel"
        style={{ 'width': `calc(95vw - ${this.props.container_width}px)` }}
      >
        <canvas className="emscripten" id="canvas"
          // onContextMenu="event.preventDefault()"
          tabIndex='-1' />
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    version: state.sdlpallib.version,
    container_width: state.sdlpallib.control_width
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
)(ToyPanel)
