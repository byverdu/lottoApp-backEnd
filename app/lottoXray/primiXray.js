'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var config = require('../config/config');

console.log('primiXray file called');

let globalHelper = new GlobalHelper(),
  configPrimi = config().lotto.primitiva,
  xray = new Xray();


var storage = require('../config/storage');

module.exports = () => {
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let urls = ['http://www.loteriasyapuestas.es/es/bonoloto',configPrimi.url];
let thisUrl = urls[getRandomIntInclusive(0,1)];
console.log(thisUrl);

xray.get(thisUrl, {numbers:[configPrimi.numbers],extras:[configPrimi.extras]} ).then(result => {

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
  }
      console.log('setTimeout Xray primi');
});
};
