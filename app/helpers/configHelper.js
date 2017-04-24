// Setup for common Configuration

const commonXraySelectors = {
  numbers: '.cuerpoRegionIzq li',
  categoryPrice: '.escrutinioTable tbody tr td:nth-of-type(1)',
  winnerPrice: '.escrutinioTable tbody tr td:nth-of-type(2)',
  extraInfoPrice: '.escrutinioTable tfoot tr td span'
};

const specificEuroProps = {
  lottoID: 'euromillions',
  totalNumberBalls: 50,
  totalNumberStars: 11,
  sliceCountBall: 5,
  sliceCountBallStar: 2,
  spanishWinners: '.escrutinioTable tbody tr td:nth-of-type(3)',
  raffleDays: [2, 5],
  moneyPrice: '.escrutinioTable tbody tr td:nth-of-type(4)'
};

const specificPrimiProps = {
  lottoID: 'primitiva',
  joker: '.cuerpoRegionIzq span',
  totalNumberBalls: 49,
  sliceCountBall: 6,
  raffleDays: [4, 6],
  moneyPrice: '.escrutinioTable tbody tr td:nth-of-type(3)'
};

const specificBonoProps = {
  lottoID: 'bonoloto',
  joker: '.cuerpoRegionIzq span',
  totalNumberBalls: 49,
  sliceCountBall: 6,
  raffleDays: [1, 2, 3, 5],
  moneyPrice: '.escrutinioTable tbody tr td:nth-of-type(3)'
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

  if ( raffle === 'euromillones' ) {
    commonXraySelectors.extras = '.cuerpoRegionDerecha li';
  } else {
    commonXraySelectors.extras = '.cuerpoRegionDerecha .bolaPeq';
  }

  return Object.assign( tempProps, commonXraySelectors, specificProps );
};

export {
  specificEuroProps,
  specificPrimiProps,
  specificBonoProps,
  buildPropsFor
};
