//  File to test scrapper keeps working

import Xray from './app/config/xray';
const xray = new Xray();
const config = require( './app/config/config' ).lotto;
const iterations = 6;

function getUrlFor( raffle ) {
  const { url, urlPrice } = config[ raffle ];

  return {
    url,
    urlPrice
  };
}

function getSelectorsFor( raffle ) {
  const { numbers, moneyPrice } = config[ raffle ];

  return {
    numbers,
    moneyPrice
  };
}

function getNumberValuesFor( raffle ) {
  const url = getUrlFor( raffle ).url;
  const selector = getSelectorsFor( raffle ).numbers;
  xray.get(
    url, {
      numbers: [selector]
    }
  ).then( result =>
    console.log( `${raffle}: ${result.numbers}` )
  );
}

function getPriceValuesFor( raffle ) {
  const url = getUrlFor( raffle ).urlPrice;
  const selector = getSelectorsFor( raffle ).moneyPrice;
  xray.get(
    url, {
      moneyPrice: [selector]
    }
  ).then( result =>
    console.log( `${raffle}: ${result.moneyPrice}` )
  );
}


function *executeXray() {
  yield getNumberValuesFor( 'bonoloto' );
  yield getPriceValuesFor( 'bonoloto' );
  yield getNumberValuesFor( 'primitiva' );
  yield getPriceValuesFor( 'primitiva' );
  yield getNumberValuesFor( 'euromillions' );
  yield getPriceValuesFor( 'euromillions' );
}

const executor = executeXray();
for ( let i = 0; i < iterations; i++ ) {
  executor.next();
}
