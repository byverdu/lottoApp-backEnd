'use strict';

import Xray from '../helpers/xray';
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

    let newWinner = globalHelper.getPricesInfo(result),
      fourthWinner = newWinner[4].winners,
      oldWinner = storage.getItem('primiWinners');

      if (fourthWinner !== oldWinner.allWinners[4].winners){

        let newStorage = {
          allWinners: newWinner,
          extraInfo: result.extraInfo
        };

        storage.setItem('primiWinners', newStorage).then(
          ()=>{
            console.log('setItem for primiWinners');
          },()=>{
            console.log('error setting primiWinners');
          });
      }

      console.log('primiWinners xray end call');
  });
};
