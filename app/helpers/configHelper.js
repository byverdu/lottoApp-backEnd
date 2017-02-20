// Setup for common Configuration

const commonXraySelectors = {
  numbers: '.cuerpoRegionIzq li',
  extras: '.cuerpoRegionDerecha li',
  categoryPrice: '.escrutinioBox_premios .col1',
  winnerPrice: '.escrutinioBox_premios .col2',
  extraInfoPrice: '.escrutinioBox_premios .ctrlFloat'
};

const specificEuroProps = {
  lottoID: 'euromillions',
  totalNumberBalls: 50,
  totalNumberStars: 11,
  sliceCountBall: 5,
  sliceCountBallStar: 2,
  raffleDays: [2, 5],
  spanishWinners: '.escrutinioBox_premios .col3',
  moneyPrice: '.escrutinioBox_premios .col4'
};

const specificPrimiProps = {
  lottoID: 'primitiva',
  joker: '.cuerpoRegionIzq span',
  totalNumberBalls: 49,
  sliceCountBall: 6,
  raffleDays: [4, 6],
  moneyPrice: '.escrutinioBox_premios .col3'
};

const specificBonoProps = {
  lottoID: 'bonoloto',
  joker: '.cuerpoRegionIzq span',
  totalNumberBalls: 49,
  sliceCountBall: 6,
  raffleDays: [1, 2, 3, 5],
  moneyPrice: '.escrutinioBox_premios .col3'
};

function getUrlRaffles( raffle ) {
  let innerRaffle = raffle;
  if ( raffle === 'primitiva' ) {
    innerRaffle = `la-${raffle}`;
  }
  return `http://www.loteriasyapuestas.es/es/${innerRaffle}`;
}
const getUrlRafflesPrices = ( raffle ) => `http://${raffle}.combinacionganadora.com/`;

const buildPropsFor = ( raffle, specificProps ) => {
  const tempProps = {
    url: getUrlRaffles( raffle ),
    urlPrice: getUrlRafflesPrices( raffle )
  };

  return Object.assign( tempProps, commonXraySelectors, specificProps );
};

export {
  specificEuroProps,
  specificPrimiProps,
  specificBonoProps,
  buildPropsFor
};
