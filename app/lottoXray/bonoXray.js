'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var config = require('../config/config');
var storedBonoJSON = require('../json/bono');

console.log('bonoXray file called');

let globalHelper = new GlobalHelper(),
  configBono = config().lotto.bonoloto,
  xray = new Xray();

xray.get(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]} ).then(result => {
  console.log(result.numbers, 'latest-result Xray');
  if (!globalHelper.compare2arrays(storedBonoJSON.numbers, result.numbers)) {
    globalHelper.saveScrappedDataToJson(configBono.pathJSON ,result);
  }
    console.log('after if Xray bono');
    require('../instances/bono');
});
