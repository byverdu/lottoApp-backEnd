// Scrapper for the primitiva  draw

import Xray from '../config/xray';
import { globalHelper } from '../helpers/globalHelper';
const configPrimi = require( '../config/config' ).lotto.primitiva;
const storage = require( '../config/storage' );
const xray = new Xray();

console.log( 'primiXray file called' );

module.exports = () => {
  xray.get( configPrimi.url, { // creating object with scrapped values
    numbers: [configPrimi.numbers],
    extras: [configPrimi.extras]
  }).then( result => { // Promise resolved
    const primiStorage = storage.getItem( 'primiNumbers' ).numbers;

    console.log( result.numbers, 'result.numbers' );
    console.log( primiStorage, 'node-persist primiNumbers' );
    // Comparing numbers array from storage and result numbers,
    // sliceCountBall is an integer that depends on the draw type
    if ( !globalHelper.compare2arrays( primiStorage, result.numbers, configPrimi.sliceCountBall )) {
      const newStorage = {
        numbers: result.numbers,
        extras: result.extras
      };

      storage.setItem( 'primiNumbers', newStorage ).then(
        () => {
          console.log( 'setItems for primiNumbers' );
          // Calling instance file after promise is solved
          require( '../instances/primi' )();
        },
        () => {
          console.log( 'fuck it' );
        });
    }
    console.log( 'setTimeout Xray primi' );
  });
};
