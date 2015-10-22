'use strict';

setInterval(() => {
  console.log('server file called');

  // require('./lottoXray/euroXray')();
  // require('./lottoXray/primiXray')();
  // require('./lottoXray/bonoXray')();
  // require('./lottoXray/primiWinnerXray')();
  // require('./lottoXray/bonoWinnerXray')();
  require('./lottoXray/euroWinnerXray')();

}, 6000);


module.exports = require('express')();
