'use strict';

import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var configPrimi = require('../config/config')().lotto.primitiva,
  storage = require('../config/storage');

let globalHelper = new GlobalHelper(),
  xray = new Xray();

console.log('primiXray file called');

module.exports = () => {

xray.get(configPrimi.url, {numbers:[configPrimi.numbers],extras:[configPrimi.extras]} ).then(result => {

  let primiStorage = storage.getItem('primiNumbers').numbers;

  console.log(result.numbers, 'result.numbers');
  console.log(primiStorage, 'presistent node-persist primiNumbers');

  if (!globalHelper.compare2arrays(primiStorage, result.numbers, configPrimi.sliceCountBall)) {

    let newStorage = {
      numbers: result.numbers,
      extras: result.extras
    };

    storage.setItem('primiNumbers', newStorage).then(
      function() {
        console.log('setItems for primiNumbers');
        require('../instances/primi')();
      },
      function() {
        console.log('fuck it');
      });
  }
      console.log('setTimeout Xray primi');
});
};
