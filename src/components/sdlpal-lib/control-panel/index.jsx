import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { Form, Button, ButtonGroup, ProgressBar } from 'react-bootstrap';

import { type } from '../../../store/type';
import './index.scss';
import '../../../util/sdlpal';
import { withWasm } from "react-wasm";


class ControlPanel extends Component {
  constructor(props) {
    super(props);
    // sync_system_file 正在同步系统文件
    this.state = {
      panel_fold: false,
      file: null,
      load_msg: '',
      last_time: Date.now(),
      last_text: '',
      sync_status: 'sync_system_file',
      progress_exist: true,
      progress_value: 0,
      progress_max: 100
    };
  }


  componentDidMount() {
    // 
    const sdlpalWasm = withWasm({
      url: '../../../util/sdlpal.wasm'
    });


    const text = 'Initializing...';
    this.setState({
      load_msg: 'Initializing...',
      last_text: 'Initializing...'
    });
    const last_time = this.state.last_time;
    const last_text = this.state.last_text;
    if (last_text === text
      || (text === '' && last_text === 'sync_system_file')
    ) {
      return;
    }
    const m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
    const now = Date.now();
    if (now - last_time < 30) {
      return;
    }
    this.setState({
      last_time: now,
      last_text: text,
    })
    if (m) {
      this.setState({
        progress_exist: true,
        progress_value: parseInt(m[2]) * 100,
        progress_max: parseInt(m[4]) * 100
      });
    } else {
      this.setState({
        progress_exist: false
      })
    }
  }

  _fold() {
    const fold = this.state.panel_fold;
    this.setState({ panel_fold: !fold });
    this.props.foldMenu(fold);
  }

  _choiceZipFile(e) {
    this.setState({ file: e.target.files[0] })
    console.log(e.target.files[0]);
  }

  _loadZip() {
    console.log('111');
    this.setState({ loadzip_msg: 'loading...' });
    var fileBtn = document.getElementById('btnLoadZip');
    // Module.setStatus(strLoading + ' ' + fileBtn.files[0].name + '...');
    // spinnerElement.style.display = 'inline-block';

    // var fileInput = document.getElementById("btnLoadZip");
    // var zip = new JSZip();
    // var file = fileInput.files[0];

    // zip.loadAsync(file).then(function (z) {
    //   z.forEach(function (relativePath, zipEntry) {
    //     if (zipEntry.dir) {
    //       var pathArr = relativePath.split('/');
    //       var currPath = '/data';
    //       for (var i = 0; i < pathArr.length; i++) {
    //         currPath += '/';
    //         currPath += pathArr[i];
    //         try {
    //           FS.mkdir(currPath.toLowerCase(), 0777);
    //         } catch (e) {
    //         }
    //       }
    //     } else {
    //       zip.sync(function () {
    //         zipEntry.async('uint8array').then(function (arr) {
    //           FS.writeFile('/data/' + relativePath.toLowerCase(), arr, { encoding: 'binary' });
    //         })
    //       });
    //     }
    //   });
    //   Module.setStatus(strSyncingFs);
    //   FS.syncfs(function (err) {
    //     Module.setStatus(strDone);
    //     spinnerElement.style.display = 'none';
    //   });
    // });
  }

  render() {
    console.log(this.props);
    return (
      <div className={`control-panel ${this.state.panel_fold ? 'fold' : 'unfold'}`}
        style={{ 'width': `${this.props.container_width}px` }}
      >
        ControlPanel
        <div><ProgressBar animated now={this.state.progress_value} max={this.state.progress_max} /></div>
        <div>{this.state.load_msg}</div>
        <FontAwesomeIcon className="icon" icon={faArrowsAltH} onClick={() => this._fold()} title="fold/unfold" />
        <div className={`${this.state.panel_fold ? 'hidden' : ''}`}>
          <div className="input-upload-file">
            <input type="file" onChange={(e) => this._choiceZipFile(e)} />
            <Form.File custom onClick={() => this._loadZip()}>
              <Form.File.Input isValid />
              <Form.File.Label data-browse="Browser">
                {/* Load Zip */}
              </Form.File.Label>
              <Form.Control.Feedback type="valid">
                {this.state.loadzip_msg}
              </Form.Control.Feedback>
            </Form.File>
          </div>

          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Delete Data</Button>
            <Button variant="secondary">Download saved</Button>
            <Button variant="secondary">Launch</Button>
          </ButtonGroup>
        </div>

      </div >
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
    foldMenu: (foldStatus) => {
      dispatch({ type: type.FOLD_MENU, item: !foldStatus ? 20 : 333 });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel)
