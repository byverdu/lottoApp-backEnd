'use strict';
// Scrapper for the euromillions  draw

import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
let configBono = require('../config/config')().lotto.bonoloto,
  storage = require('../config/storage');

let globalHelper = new GlobalHelper(),
  xray = new Xray();

console.log('bonoXray file called');

module.exports = () => {

  xray.get(configBono.url, { // creating object with scrapped values
    numbers: [configBono.numbers],
    extras: [configBono.extras]
  }).then(result => { // Promise resolved

    let bonoStorage = storage.getItem('bonoNumbers').numbers;

    console.log(result.numbers, 'result.numbers');
    console.log(bonoStorage, 'presistent node-persist bonoNumbers');
    // Comparing numbers array from storage and result numbers,
    // sliceCountBall is an integer that depends on the draw type
    if (!globalHelper.compare2arrays(bonoStorage, result.numbers, configBono.sliceCountBall)) {
        // Object with new values to store
      let newStorage = {
        numbers: result.numbers,
        extras: result.extras
      };
      // Setting new values to store, returns a promise
      storage.setItem('bonoNumbers', newStorage).then(
        function() {
          console.log('setItems for bonoNumbers');
          // Calling instance file after promise is solved
          require('../instances/bono')();
        },
        function() {
          console.log('fuck it');
        });
    }
    console.log('after if Xray bono');

  });
};
