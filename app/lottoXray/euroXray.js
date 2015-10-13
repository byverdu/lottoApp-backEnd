'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var config = require('../config/config');
var storedEuroJSON = require('../json/euro.json');

console.log('euroXray file called');

let globalHelper = new GlobalHelper(),
  configEuro = config().lotto.euromillions,
  xray = new Xray();

xray.get(configEuro.url, {numbers:[configEuro.numbers],extras:[configEuro.extras]} ).then(result => {
  // console.log(result.numbers, 'latest-result Xray');
  if (!globalHelper.compare2arrays(storedEuroJSON.numbers, result.numbers)) {
    globalHelper.saveScrappedDataToJson(configEuro.pathJSON, result);
  }
      require('../instances/euro');
      console.log('setTimeout Xray euro');
});
