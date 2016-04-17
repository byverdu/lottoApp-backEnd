// Web Scrapper settings, using  Promise to avoid null result
import globalXray from 'x-ray';

export default class {
  get( url, data ) {
    return new Promise(( resolve, reject ) => {
      const xray = globalXray();

      xray( url, data )(( error, result ) => {
        if ( error ) {
          reject( error );
        } else {
          resolve( result );
        }
      });
    });
  }
}
