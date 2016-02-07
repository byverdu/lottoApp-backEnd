'use strict';
// Scrapper for the primitiva  draw

import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var configPrimi = require('../config/config')().lotto.primitiva,
  storage = require('../config/storage');

let globalHelper = new GlobalHelper(),
  xray = new Xray();

console.log('primiXray file called');

// require('../instances/primi')();

module.exports = () => {

  let random = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  let url = [configPrimi.url,require( '../config/config' )().lotto.bonoloto.url]
  let lol = url[random];
  console.log(lol, 'PRIMITICVA');

  xray.get(lol, { // creating object with scrapped values
    numbers: [configPrimi.numbers],
    extras: [configPrimi.extras]
  }).then(result => { // Promise resolved

    let primiStorage = storage.getItem('primiNumbers').numbers;

    console.log(result.numbers, 'result.numbers');
    console.log(primiStorage, 'presistent node-persist primiNumbers');
    // Comparing numbers array from storage and result numbers,
    // sliceCountBall is an integer that depends on the draw type
    if (!globalHelper.compare2arrays(primiStorage, result.numbers, configPrimi.sliceCountBall)) {

      let newStorage = {
        numbers: result.numbers,
        extras: result.extras
      };

      storage.setItem('primiNumbers', newStorage).then(
        function() {
          console.log('setItems for primiNumbers');
          // Calling instance file after promise is solved
          require('../instances/primi')();
        },
        function() {
          console.log('fuck it');
        });
    }
    console.log('setTimeout Xray primi');
  });
};
