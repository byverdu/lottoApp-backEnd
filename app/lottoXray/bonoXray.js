'use strict';

import Xray from '../helpers/xray';
import {Helper} from '../helpers/helpers';
var config = require('../config/config');
var storedBonoJSON = require('../json/bono');

console.log('bonoXray file called');

let helper = new Helper(),
  configBono = config().lotto.bonoloto,
  xray = new Xray();

xray.get(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]} ).then(result => {
  // console.log(result.numbers, 'latest-result Xray');
    require('../instances/bono');
  if (helper.compare2arrays(storedBonoJSON.numbers, result.numbers)) {
    helper.saveScrappedDataToJson(configBono.pathJSON ,result);
  }
    console.log('WTF');
});
