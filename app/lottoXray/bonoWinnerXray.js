'use strict';
// Scrapper for the bonoloto winners draw

import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
import storage from '../config/storage';
let xray = new Xray(),
  globalHelper = new  GlobalHelper(),
  configBono = require('../config/config')().lotto.bonoloto;

module.exports = () => {
  console.log('bonoWinnerXray file called');

  xray.get( configBono.urlPrice , { // creating object with scrapped values
    categoryPrice: [configBono.categoryPrice],
    winnerPrice: [configBono.winnerPrice],
    moneyPrice: [configBono.moneyPrice],
    extraInfoPrice: [configBono.extraInfoPrice]
  }).then(result => { // Promise resolved

    let convertedResult = globalHelper.getPricesInfo(result),
      // getting 4th winners value result,
      // assures that the values changes on every draw
      newWinner = convertedResult[4].winners,
      // stored value, same as newWinner
      oldWinner = storage.getItem('bonoWinners').allWinners[4].winners;

      if (oldWinner !== newWinner){

        // Object with new values to store
        let newStorage = {
          allWinners: convertedResult,
          extraInfo: result.extraInfoPrice
        };
        // Setting new values to store, returns a promise
        storage.setItem('bonoWinners', newStorage).then(
          ()=>{
            console.log('setItem for bonoWinners');
            // Calling instance file after promise is solved
            require('../instances/bonoWinner')();
          },()=>{
            console.log('error setting bonoWinners');
          });
      }

      console.log('bonoWinners xray end call');
  });
};
