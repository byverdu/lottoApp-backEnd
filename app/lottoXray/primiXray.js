'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var config = require('../config/config');
var storedPrimiJSON = require('../json/primi.json');

console.log('primiXray file called');

let globalHelper = new GlobalHelper(),
  configPrimi = config().lotto.primitiva,
  xray = new Xray();

xray.get(configPrimi.url, {numbers:[configPrimi.numbers],extras:[configPrimi.extras]} ).then(result => {

  if (!globalHelper.compare2arrays(storedPrimiJSON.numbers, result.numbers)) {
    globalHelper.saveScrappedDataToJson(configPrimi.pathJSON, result);
  }
      require('../instances/primi');
      console.log('setTimeout Xray primi');
});
