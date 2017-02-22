// Web Scrapper settings, using  Promise to avoid null result
import globalXray from 'x-ray';
const config = require( './config' ).lotto;

class XrayWrapper {
  getValues( urlRaffle, selector ) {
    return new Promise(( resolve, reject ) => {
      const xray = globalXray();

      xray( urlRaffle, selector )(( error, result ) => {
        if ( error ) {
          reject( error );
        } else {
          resolve( result );
        }
      });
    });
  }
}

const xray = new XrayWrapper();

exports.getRaffleInfo = function ( lottoID ) {
  const { url, numbers, extras } = config[ lottoID ];
  return xray.getValues( url, {
    numbers: [numbers],
    extras: [extras]
  });
};
