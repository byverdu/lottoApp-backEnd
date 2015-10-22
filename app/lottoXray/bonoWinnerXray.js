'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
import storage from '../config/storage';
let xray = new Xray(),
  globalHelper = new  GlobalHelper(),
  configBono = require('../config/config')().lotto.bonoloto;

module.exports = () => {
  console.log('bonoWinnerXray file called');

  xray.get(configBono.urlPrice, {
    categoryPrice: [configBono.categoryPrice],
    winnerPrice: [configBono.winnerPrice],
    moneyPrice: [configBono.moneyPrice],
    extraInfoPrice: [configBono.extraInfoPrice]
  }).then(result => {
    console.log(result);
    let convertedResult = globalHelper.getPricesInfo(result),
      newWinner = convertedResult[4].winners,
      oldWinner = storage.getItem('bonoWinners').allWinners[4].winners;

      if (oldWinner !== newWinner){

        let newStorage = {
          allWinners: convertedResult,
          extraInfo: result.extraInfoPrice
        };

        storage.setItem('bonoWinners', newStorage).then(
          ()=>{
            console.log('setItem for bonoWinners');
            require('../instances/bonoWinner')();
          },()=>{
            console.log('error setting bonoWinners');
          });
      }

      console.log('bonoWinners xray end call');
  });
};
