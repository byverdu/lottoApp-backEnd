// Scrapper for the euromillions  draw

// TODO extract all values and define them as parameters
// passed to module.exports so we can have only one file

import { globalHelper } from '../helpers/globalHelper';
const storage = require( '../config/storage' );

console.log( 'Xray file called' );

module.exports = ( xrayParams ) => {
  const { promise, lottoID, sliceCountBall } = xrayParams;

  promise.then( result => {
    const storedNumbers = storage.getItem( `${lottoID}Numbers` ).numbers;

    console.log( result.numbers, 'result.numbers' );
    console.log( storedNumbers, `node-persist ${lottoID}` );

    // Comparing numbers array from storage and result numbers,
    // sliceCountBall is an integer that depends on the draw type
    if (
      !globalHelper.compare2arrays(
        storedNumbers,
        result.numbers,
        sliceCountBall )
      ) {
        // Object with new values to store
      const newStorage = {
        numbers: result.numbers,
        extras: result.extras
      };
      // Setting new values to store, returns a promise
      storage.setItem( `${lottoID}Numbers`, newStorage ).then(() => {
          console.log( `setItems for ${lottoID}` );
          // Calling instance file after promise is solved
          require( `../instances/${lottoID}` )();
        }, () => {
        console.log( 'fuck it' );
      });
    }
    console.log( `after if Xray ${lottoID}` );
  });
};
