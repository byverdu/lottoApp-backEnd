'use strict';

import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
import storage from '../config/storage';
let xray = new Xray(),
  globalHelper = new  GlobalHelper(),
  configPrimi = require('../config/config')().lotto.primitiva;

module.exports = () => {
  console.log('primiWinnerXray file called');

  xray.get(configPrimi.urlPrice, {
    categoryPrice: [configPrimi.categoryPrice],
    winnerPrice: [configPrimi.winnerPrice],
    moneyPrice: [configPrimi.moneyPrice],
    extraInfoPrice: [configPrimi.extraInfoPrice]
  }).then(result => {

    let convertedResult = globalHelper.getPricesInfo(result),
      newWinner = convertedResult[4].winners,
      oldWinner = storage.getItem('primiWinners').allWinners[4].winners;

      if (oldWinner !== newWinner){

        let newStorage = {
          allWinners: convertedResult,
          extraInfo: result.extraInfoPrice
        };

        storage.setItem('primiWinners', newStorage).then(
          ()=>{
            console.log('setItem for primiWinners');
            require('../instances/primiWinner')();
          },()=>{
            console.log('error setting primiWinners');
          });
      }

      console.log('primiWinners xray end call');
  });
};
