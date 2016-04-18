// General Configuration for Xray, db ...
module.exports = {
  globals: {
    mongoUrlTest: 'mongodb://localhost/lottoApp',
    mongoUrlProduction: process.env.MONGO_LOTTO_URL
  },
  lotto: {
    fractionNumber: 3,
    euromillions: {
      lottoID: 'euromillions',
      url: 'http://www.euro-millions.com/results',
      numbers: '.latest-result .balls .ball',
      extras: '.latest-result .lucky-star',
      totalNumberBalls: 50,
      totalNumberStars: 11,
      sliceCountBall: 5,
      sliceCountBallStar: 2,
      raffleDays: [2, 5, 1],
      urlPrice: 'http://euromillones.combinacionganadora.com/',
      categoryPrice: '.escrutinioBox_premios .col1',
      winnerPrice: '.escrutinioBox_premios .col2',
      spanishWinners: '.escrutinioBox_premios .col3',
      moneyPrice: '.escrutinioBox_premios .col4',
      extraInfoPrice: '.escrutinioBox_premios .ctrlFloat'
    },
    primitiva: {
      lottoID: 'primitiva',
      url: 'http://www.loteriasyapuestas.es/es/la-primitiva',
      numbers: '.cuerpoRegionIzq li',
      extras: '.bolaPeq',
      joker: '.cuerpoRegionIzq span',
      totalNumberBalls: 49,
      sliceCountBall: 6,
      raffleDays: [4, 6, 1],
      urlPrice: 'http://primitiva.combinacionganadora.com/',
      categoryPrice: '.escrutinioBox_premios .col1',
      winnerPrice: '.escrutinioBox_premios .col2',
      moneyPrice: '.escrutinioBox_premios .col3',
      extraInfoPrice: '.escrutinioBox_premios .ctrlFloat'
    },
    bonoloto: {
      lottoID: 'bonoloto',
      url: 'http://www.loteriasyapuestas.es/es/bonoloto',
      numbers: '.cuerpoRegionIzq li',
      extras: '.bolaPeq',
      totalNumberBalls: 49,
      sliceCountBall: 6,
      raffleDays: [1, 2, 3, 5],
      urlPrice: 'http://bonoloto.combinacionganadora.com/',
      categoryPrice: '.escrutinioBox_premios .col1',
      winnerPrice: '.escrutinioBox_premios .col2',
      moneyPrice: '.escrutinioBox_premios .col3',
      extraInfoPrice: '.escrutinioBox_premios .ctrlFloat'
    }
  }
};
