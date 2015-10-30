'use strict';
// Scrapper for the euromillions  draw

import Xray from '../config/xray';
import { GlobalHelper } from '../helpers/globalHelper';
var configEuro = require('../config/config')().lotto.euromillions,
  storage = require('../config/storage');

let globalHelper = new GlobalHelper(),
  xray = new Xray();

console.log('euroXray file called');

module.exports = () => {

  xray.get(configEuro.url, { // creating object with scrapped values
    numbers: [configEuro.numbers],
    extras: [configEuro.extras]
  }).then(result => { // Promise resolved

    let euroStorage = storage.getItem('euroNumbers').numbers;

    console.log(result.numbers, 'result.numbers');
    console.log(euroStorage, 'presistent node-persist euroNumbers');
    // Comparing numbers array from storage and result numbers,
    // sliceCountBall is an integer that depends on the draw type
    if (!globalHelper.compare2arrays(euroStorage, result.numbers, configEuro.sliceCountBall)) {
      // Object with new values to store
      let newStorage = {
        numbers: result.numbers,
        extras: result.extras
      };
      // Setting new values to store, returns a promise
      storage.setItem('euroNumbers', newStorage).then(
        function() {
          console.log('setItems for euroNumbers');
          // Calling instance file after promise is solved
          require('../instances/euro')();
        },
        function() {
          console.log('fuck it');
        });
    }
    console.log('setTimeout Xray euro');
  });
};
