// Web Scrapper settings, using  Promise to avoid null result
import globalXray from 'x-ray';
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
  const selectors = globalHelper.getSelectorsRaffle( lottoID );
  const url = globalHelper.getRaffleUrlForType( 'url', lottoID );
  return xray.getValues( url, selectors );
};
