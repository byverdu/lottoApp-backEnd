// Scrapper for the primitiva winners draw

import { globalHelper } from '../../helpers/globalHelper';
import storage from '../../config/storage';
import xraySendMail from '../../config/nodemailerXray';
import { checkForEmptyPromise } from '../../config/xray';

console.log( 'WinnerXray file called' );

module.exports = ( xrayParams ) => {
  const { promise, lottoID } = xrayParams;

  promise.then( result => {
    const isEmptyPromise = checkForEmptyPromise( result );

    if ( isEmptyPromise.length > 0 ) {
      const errorMsg = `something went wrong for ${lottoID} => ${isEmptyPromise}`;

      xraySendMail( lottoID, errorMsg );
      throw Error( errorMsg );
    }

    const convertedResult = globalHelper.getPricesInfo( result );
      // getting 4th winners value from result,
      // assures that the values changes on every draw
    const newWinner = convertedResult[ 4 ].winners;
      // stored value, same as newWinner
    const oldWinner = storage.getItem( `${lottoID}Winner` ).allWinners[ 4 ].winners;

    console.log( oldWinner, newWinner, `${lottoID}WinnerXray` );

    if ( oldWinner !== newWinner ) {
      // Object with new values to store
      const newStorage = {
        allWinners: convertedResult,
        extraInfo: result.extraInfoPrice
      };
      // Setting new values to store, returns a promise
      storage.setItem( `${lottoID}Winner`, newStorage ).then(() => {
        console.log( `setItem for ${lottoID}Winner` );
          // Calling instance file after promise is solved
        require( '../../instances/winners' )( `${lottoID}Winner` );
      }, () => {
        console.log( `error setting ${lottoID}Winners` );
      });
    }
    console.log( `${lottoID}Winners xray end call` );
  })
  .catch( error => console.log( error.message ));
};
