'use strict';

import Xray from '../helpers/xray';
import {Helper} from '../helpers/helpers';
var config = require('../config/config');
var storedPrimiJSON = require('../json/primi.json');

console.log('primiXray file called');

let helper = new Helper(),
  configPrimi = config().lotto.primitiva,
  xray = new Xray();

xray.get(configPrimi.url, {numbers:[configPrimi.numbers],extras:[configPrimi.extras]} ).then(result => {
  // console.log(result.numbers, 'latest-result Xray');
  if (helper.compare2arrays(storedPrimiJSON.numbers, result.numbers)) {
    helper.saveScrappedDataToJson(configPrimi.pathJSON ,result);
  }
    require('../instances/primi');
    console.log('after if Xray primi');
});
