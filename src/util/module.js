let Module = {
  preRun: [],
  postRun: [],
  print: function (text) {
    console.log(text);
  },
  printErr: function (text) {
    console.error(text);
  },
  canvas: (function () {
    var canvas = document.getElementById('canvas');

    // As a default initial behavior, pop up an alert when webgl context is lost. To make your
    // application robust, you may want to override this behavior before shipping!
    // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
    canvas.addEventListener(
      'webglcontextlost',
      function (e) {
        alert('WebGL context lost. You will need to reload the page.');
        e.preventDefault();
      },
      false
    );

    return canvas;
  })(),
  setStatus: function (text) {
    if (!Module.setStatus.last) {
      Module.setStatus.last = { time: Date.now(), text: '' };
    }

    if (text === Module.setStatus.last.text) return;
    if (text === '' && Module.setStatus.last.text == strSyncingFs) return;
    var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
    var now = Date.now();
    if (m && now - Module.setStatus.last.time < 30) return; // if this is a progress update, skip it if too soon
    Module.setStatus.last.time = now;
    Module.setStatus.last.text = text;
    if (m) {
      text = m[1];
      progressElement.value = parseInt(m[2]) * 100;
      progressElement.max = parseInt(m[4]) * 100;
      progressElement.hidden = false;
      spinnerElement.hidden = false;
    } else {
      progressElement.value = null;
      progressElement.max = null;
      progressElement.hidden = true;
      if (!text) spinnerElement.style.display = 'none';
    }
    statusElement.innerHTML = text;
  },
  totalDependencies: 0,
  monitorRunDependencies: function (left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
    Module.setStatus(
      left
        ? 'Preparing... (' +
            (this.totalDependencies - left) +
            '/' +
            this.totalDependencies +
            ')'
        : 'All downloads complete.'
    );
  },
  onRuntimeInitialized: function () {
    onRuntimeInitialized();
  }
};

export { Module };
