//  File to test scrapper keeps working

import Xray from './app/config/xray';
const xray = new Xray();
const config = require( './app/config/config' ).lotto;
const raffleTypes = ['bonoloto', 'primitiva', 'euromillions'];

const getUrlFor = ( raffle ) => {
  const { url, urlPrice } = config[ raffle ];

  return {
    url,
    urlPrice
  };
};

const getSelectorsFor = ( raffle ) => {
  const { numbers, moneyPrice } = config[ raffle ];

  return {
    numbers,
    moneyPrice
  };
};

for ( const raffle of raffleTypes ) {
  xray.get(
    getUrlFor( raffle ).url, {
      numbers: [getSelectorsFor( raffle ).numbers]
    }
  ).then(
    result => console.log( `${raffle}: ${result.numbers}` )
  );
}
