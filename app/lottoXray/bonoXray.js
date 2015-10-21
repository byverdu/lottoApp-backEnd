'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var configBono = require('../config/config')().lotto.bonoloto;

console.log('bonoXray file called');

let globalHelper = new GlobalHelper(),
  xray = new Xray();

var storage = require('../config/storage');

module.exports = () => {

xray.get(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]} ).then(result => {

  var bonoStorage = storage.getItem('bonoNumbers').numbers;

  console.log(result.numbers, 'result.numbers');
  console.log(bonoStorage, 'presistent node-persist');
  if (!globalHelper.compare2arrays(bonoStorage, result.numbers)) {

    let newStorage = {
      numbers: result.numbers,
      extras: result.extras
    };

    storage.setItem('bonoNumbers', newStorage).then(
      function() {
        console.log('setItems for bonoNumbers');
        require('../instances/bono')();
      },
      function() {
        console.log('fuck it');
      });
  }
    console.log('after if Xray bono');

});
};
