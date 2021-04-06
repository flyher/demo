import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { Form, Button, ButtonGroup } from 'react-bootstrap';

import { type } from '../../../store/type';
import './index.scss';


class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="control-panel">
        ControlPanel
        <div class="input-upload-file">
          <Form.File custom>
            <Form.File.Input isValid />
            <Form.File.Label data-browse="Browser">
              Load Zip
            </Form.File.Label>
            <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
          </Form.File>
        </div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Delete Data</Button>
          <Button variant="secondary">Download saved</Button>
          <Button variant="secondary">Launch</Button>
        </ButtonGroup>
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
)(ControlPanel)
