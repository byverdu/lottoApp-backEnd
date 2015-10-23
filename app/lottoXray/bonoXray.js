'use strict';

import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
let configBono = require('../config/config')().lotto.bonoloto,
  storage = require('../config/storage');

let globalHelper = new GlobalHelper(),
  xray = new Xray();

console.log('bonoXray file called');

module.exports = () => {

  xray.get(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]} ).then(result => {

    let bonoStorage = storage.getItem('bonoNumbers').numbers;

    console.log(result.numbers, 'result.numbers');
    console.log(bonoStorage, 'presistent node-persist bonoNumbers');
    if (!globalHelper.compare2arrays(bonoStorage, result.numbers, configBono.sliceCountBall)) {

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
