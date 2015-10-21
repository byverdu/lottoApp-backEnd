'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
var configBono = require('../config/config')().lotto.bonoloto,
  storage = require('../config/storage');

let globalHelper = new GlobalHelper(),
  xray = new Xray();

console.log('bonoXray file called');

module.exports = () => {


    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let urls = ['http://www.loteriasyapuestas.es/es/la-primitiva',configBono.url];
    let thisUrl = urls[getRandomIntInclusive(0,1)];
    console.log(thisUrl);


xray.get(thisUrl, {numbers:[configBono.numbers],extras:[configBono.extras]} ).then(result => {

  let bonoStorage = storage.getItem('bonoNumbers').numbers;

  console.log(result.numbers, 'result.numbers');
  console.log(bonoStorage, 'presistent node-persist');
  if (!globalHelper.compare2arrays(bonoStorage, result.numbers, configBono.sliceCountBall)) {

    let newStorage = {
      numbers: result.numbers,
      extras: result.extras
    };

    storage.setItem('bonoNumbers', newStorage).then(
      function() {
        console.log('setItems for bonoNumbers');
        require('../instances/bono')();
      },
      function() {
        console.log('fuck it');
      });
  }
    console.log('after if Xray bono');

});
};
