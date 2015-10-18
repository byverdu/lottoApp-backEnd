'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var configBono = require('../config/config')().lotto.bonoloto;

console.log('bonoXray file called');

let globalHelper = new GlobalHelper(),
  xray = new Xray();

var storage = require('../config/storage');

module.exports = () => {
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let urls = ['http://www.loteriasyapuestas.es/es/la-primitiva',configBono.url];
  let thisUrl = urls[getRandomIntInclusive(0,1)];
  console.log(thisUrl);


xray.get(thisUrl, {numbers:[configBono.numbers],extras:[configBono.extras]} ).then(result => {

  var bonoStorage = storage.getItem('bonoNumbers');
  console.log(result.numbers, 'result.numbers');
  console.log(bonoStorage, 'presistent node-persist');

  if (!globalHelper.compare2arrays(bonoStorage, result.numbers)) {
    storage.setItem('bonoNumbers',result.numbers).then(
      function() {
        console.log('setItems for bonoNumbers');
        require('../instances/bono')();
      },
      function() {
        console.log('fuck it');
      });
    storage.setItem('bonoExtras', result.extras);
  }
    console.log('after if Xray bono');

});
};
