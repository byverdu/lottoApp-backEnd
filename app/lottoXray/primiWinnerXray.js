// Scrapper for the primitiva winners draw

import Xray from '../config/xray';
import { globalHelper } from '../helpers/globalHelper';
import storage from '../config/storage';
const xray = new Xray();
// const globalHelper = new GlobalHelper();
const configPrimi = require( '../config/config' ).lotto.primitiva;

module.exports = () => {
  console.log( 'primiWinnerXray file called' );

  xray.get( configPrimi.urlPrice, { // creating object with scrapped values
    categoryPrice: [configPrimi.categoryPrice],
    winnerPrice: [configPrimi.winnerPrice],
    moneyPrice: [configPrimi.moneyPrice],
    extraInfoPrice: [configPrimi.extraInfoPrice]
  }).then( result => { // Promise resolved
    const convertedResult = globalHelper.getPricesInfo( result );
      // getting 4th winners value from result,
      // assures that the values changes on every draw
    const newWinner = convertedResult[ 4 ].winners;
      // stored value, same as newWinner
    const oldWinner = storage.getItem( 'primiWinners' ).allWinners[ 4 ].winners;

    console.log( oldWinner, newWinner, 'primiWinnerXray' );

    if ( oldWinner !== newWinner ) {
      // Object with new values to store
      const newStorage = {
        allWinners: convertedResult,
        extraInfo: result.extraInfoPrice
      };
      // Setting new values to store, returns a promise
      storage.setItem( 'primiWinners', newStorage ).then(
        () => {
          console.log( 'setItem for primiWinners' );
          // Calling instance file after promise is solved
          require( '../instances/primiWinner' )();
        }, () => {
        console.log( 'error setting primiWinners' );
      });
    }
    console.log( 'primiWinners xray end call' );
  });
};
