'use strict';

import Xray from '../helpers/xray';
import {GlobalHelper} from '../helpers/globalHelper';
import storage from '../config/storage';
let xray = new Xray(),
  globalHelper = new  GlobalHelper(),
  configEuro = require('../config/config')().lotto.euromillions;

module.exports = () => {
  console.log('euroWinnerXray file called');

  xray.get(configEuro.urlPrice, {
    categoryPrice: [configEuro.categoryPrice],
    winnerPrice: [configEuro.winnerPrice],
    spanishWinners: [configEuro.spanishWinners],
    moneyPrice: [configEuro.moneyPrice],
    extraInfoPrice: [configEuro.extraInfoPrice]
  }).then(result => {

    let convertedResult = globalHelper.getPricesInfo(result),
      newWinner = convertedResult[4].winners,
      oldWinner = storage.getItem('euroWinners').allWinners[4].winners;

      if (oldWinner !== newWinner){

        let newStorage = {
          allWinners: convertedResult,
          extraInfo: result.extraInfoPrice
        };

        storage.setItem('euroWinners', newStorage).then(
          ()=>{
            console.log('setItem for euroWinners');
            require('../instances/euroWinner')();
          },()=>{
            console.log('error setting euroWinners');
          });
      }

      console.log('euroWinners xray end call');
  });
};
