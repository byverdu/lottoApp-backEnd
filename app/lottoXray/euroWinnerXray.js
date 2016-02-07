'use strict';
// Scrapper for the euromillions winners draw

import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
import storage from '../config/storage';
let xray = new Xray(),
  globalHelper = new  GlobalHelper(),
  configEuro = require('../config/config')().lotto.euromillions;

module.exports = () => {
  console.log('euroWinnerXray file called');

  xray.get( configEuro.urlPrice, { // creating object with scrapped values
    categoryPrice: [configEuro.categoryPrice],
    winnerPrice: [configEuro.winnerPrice],
    spanishWinners: [configEuro.spanishWinners],
    moneyPrice: [configEuro.moneyPrice],
    extraInfoPrice: [configEuro.extraInfoPrice]
  }).then(result => { // Promise resolved

    let convertedResult = globalHelper.getPricesInfo(result),
      // getting 4th winners value result,
      // assures that the values changes on every draw
      newWinner = convertedResult[4].winners,
      // stored value, same as newWinner
      oldWinner = storage.getItem('euroWinners').allWinners[4].winners;

      console.log(oldWinner);

      if (oldWinner !== newWinner){
        // Object with new values to store
        let newStorage = {
          allWinners: convertedResult,
          extraInfo: result.extraInfoPrice
        };
        // Setting new values to store, returns a promise
        storage.setItem('euroWinners', newStorage)

        .then(
          ()=>{
            console.log('setItem for euroWinners');
            // Calling instance file after promise is solved
            require('../instances/euroWinner')();
          },()=>{
            console.log('error setting euroWinners');
          });
      }

      console.log('euroWinners xray end call');
  });
};
