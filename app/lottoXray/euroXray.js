'use strict';

import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var configEuro = require('../config/config')().lotto.euromillions,
  storage = require('../config/storage');

let globalHelper = new GlobalHelper(),
  xray = new Xray();

console.log('euroXray file called');

module.exports = () => {

  xray.get(configEuro.url, {numbers:[configEuro.numbers],extras:[configEuro.extras]} ).then(result => {

    let euroStorage = storage.getItem('euroNumbers').numbers;

    console.log(result.numbers, 'result.numbers');
    console.log(euroStorage, 'presistent node-persist euroNumbers');

    if (!globalHelper.compare2arrays(euroStorage, result.numbers, configEuro.sliceCountBall)) {

      let newStorage = {
        numbers: result.numbers,
        extras: result.extras
      };

      storage.setItem('euroNumbers', newStorage).then(
      function() {
        console.log('setItems for euroNumbers');
        require('../instances/euro')();
      },
      function() {
        console.log('fuck it');
      });
    }
        console.log('setTimeout Xray euro');
  });
};
