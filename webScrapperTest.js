//  File to test scrapper keeps working

import Xray from './app/config/xray';
const xray = new Xray();
const config = require( './app/config/config' ).lotto;
const iterations = 6;
import xraySendMail from './app/config/nodemailerXray';

function getUrlFor( raffle ) {
  const { url, urlPrice } = config[ raffle ];

  return {
    url,
    urlPrice
  };
}

function getSelectorsFor( raffle ) {
  const { numbers, winnerPrice } = config[ raffle ];

  return {
    numbers,
    winnerPrice
  };
}

function getXrayValuesFor( raffle, urlProp, selectorProp ) {
  const url = getUrlFor( raffle );
  const selector = getSelectorsFor( raffle );
  xray.get(
    url[ urlProp ], {
      [ selectorProp ]: [selector[ selectorProp ]]
    }
  ).then( result => {
    console.log( `${raffle}: ${result[ selectorProp ]}` );
    if ( result[ selectorProp ].length === 0 ) {
      const errorMsg = `something went wrong for ${raffle} => ${selectorProp}`;

      xraySendMail( raffle, errorMsg );
      throw Error( errorMsg );
    }
  }
  )
  .catch( error => console.log( error.message ));
}

function *executeXray() {
  yield getXrayValuesFor( 'bonoloto', 'url', 'numbers' );
  yield getXrayValuesFor( 'bonoloto', 'urlPrice', 'winnerPrice' );
  yield getXrayValuesFor( 'primitiva', 'url', 'numbers' );
  yield getXrayValuesFor( 'primitiva', 'urlPrice', 'winnerPrice' );
  yield getXrayValuesFor( 'euromillions', 'url', 'numbers' );
  yield getXrayValuesFor( 'euromillions', 'urlPrice', 'winnerPrice' );
}

const executor = executeXray();
for ( let i = 0; i < iterations; i++ ) {
  executor.next();
}
