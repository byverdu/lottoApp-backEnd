// Web Scrapper settings, using  Promise to avoid null result
import globalXray from 'x-ray';
import { globalHelper } from '../helpers/globalHelper';
import xraySendMail from '../config/nodemailerXray';

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

const getRaffleInfo = function ( lottoID ) {
  const selectors = globalHelper.getSelectorsRaffle( lottoID );
  const url = globalHelper.getRaffleUrlForType( 'url', lottoID );
  return xray.getValues( url, selectors );
};

const getWinnersInfo = function ( lottoID ) {
  const selectors = globalHelper.getSelectorsWinnersRaffle( lottoID );
  const url = globalHelper.getRaffleUrlForType( 'urlPrice', lottoID );
  return xray.getValues( url, selectors );
};

const checkForEmptyPromise = function ( result ) {
  let errored = '';
  for ( const item in result ) {
    if ( result[ item ].length === 0 ) {
      errored += `${item} - `;
    }
  }
  return errored.slice( 0, -3 );
};

const emptyPromiseAction = function ( emptyPromise, lottoID ) {
  if ( emptyPromise.length > 0 ) {
    const errorMsg = `something went wrong for ${lottoID} => ${emptyPromise}`;
    xraySendMail( lottoID, errorMsg );
    throw new Error( errorMsg );
  }
};

module.exports = {
  getRaffleInfo,
  getWinnersInfo,
  checkForEmptyPromise,
  emptyPromiseAction
};
