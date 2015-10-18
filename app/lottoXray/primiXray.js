'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var configPrimi = require('../config/config')().lotto.primitiva;

console.log('primiXray file called');

let globalHelper = new GlobalHelper(),
  xray = new Xray();


var storage = require('../config/storage');

module.exports = () => {

xray.get(configPrimi.url, {numbers:[configPrimi.numbers],extras:[configPrimi.extras]} ).then(result => {

  var primiStorage = storage.getItem('primiNumbers');
  //
  // console.log(result.numbers, 'result.numbers');
  // console.log(primiStorage, 'presistent node-persist');

  if (!globalHelper.compare2arrays(primiStorage, result.numbers)) {

    storage.setItem('primiNumbers',result.numbers).then(
      function() {
        console.log('setItems for primiNumbers');
        require('../instances/primi')();
      },
      function() {
        console.log('fuck it');
      });
    storage.setItem('primiExtras', result.extras);
  }
      console.log('setTimeout Xray primi');
});
};
