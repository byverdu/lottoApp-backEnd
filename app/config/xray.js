// Web Scrapper settings, using  Promise to avoid null result
import globalXray from 'x-ray';
const config = require( './config' ).lotto;
import { globalHelper } from '../helpers/globalHelper';

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
  const selectors = globalHelper.getCommonSelectorsRaffle( lottoID );
  const { url } = config[ lottoID ];
  return xray.getValues( url, selectors );
};
