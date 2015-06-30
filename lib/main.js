var { setInterval } = require("sdk/timers");

var pageMod = require('sdk/page-mod');
pageMod.PageMod({
  include: '*.twitter.com',
  contentScriptFile: './twitter-depromoter.js',
  onAttach: start
});

function start(worker) {
  var interval = require('sdk/simple-prefs').prefs['interval'];
  if (interval < 2500) {
    console.log('Steady on. Use an interval > 2500');
    interval = 2500;
  }

  console.log('interval=' + interval);
  var go = function() {
    worker.port.emit('findAndStrip');
  };
  setInterval(go, interval);
}
