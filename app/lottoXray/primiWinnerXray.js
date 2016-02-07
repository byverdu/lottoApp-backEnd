'use strict';
// Scrapper for the primitiva winners draw

import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
import storage from '../config/storage';
let xray = new Xray(),
  globalHelper = new  GlobalHelper(),
  configPrimi = require('../config/config')().lotto.primitiva;

module.exports = () => {
  console.log('primiWinnerXray file called');

  // require('../instances/primiWinner')();

  let random = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  let url = [configPrimi.urlPrice,require( '../config/config' )().lotto.bonoloto.urlPrice];
  let lol = url[random];
  console.log(lol, 'PRIMITIVA');

  xray.get(lol, { // creating object with scrapped values
    categoryPrice: [configPrimi.categoryPrice],
    winnerPrice: [configPrimi.winnerPrice],
    moneyPrice: [configPrimi.moneyPrice],
    extraInfoPrice: [configPrimi.extraInfoPrice]
  }).then(result => { // Promise resolved

    let convertedResult = globalHelper.getPricesInfo(result),
      // getting 4th winners value from result,
      // assures that the values changes on every draw
      newWinner = convertedResult[4].winners,
      // stored value, same as newWinner
      oldWinner = storage.getItem('primiWinners').allWinners[4].winners;

      console.log(oldWinner);

      if (oldWinner !== newWinner){
        // Object with new values to store
        let newStorage = {
          allWinners: convertedResult,
          extraInfo: result.extraInfoPrice
        };
        // Setting new values to store, returns a promise
        storage.setItem('primiWinners', newStorage).then(
          ()=>{
            console.log('setItem for primiWinners');
            // Calling instance file after promise is solved
            require('../instances/primiWinner')();
          },()=>{
            console.log('error setting primiWinners');
          });
      }

      console.log('primiWinners xray end call');
  });
};
