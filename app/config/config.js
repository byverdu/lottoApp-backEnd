'use strict';

module.exports = () => {
  return {
    globals: {
      mongoUrl: ''
    },
    lotto: {
      euromillions         : {
        url                : 'http://www.euro-millions.com/results',
        numbers            : '.latest-result .balls .ball',
        stars              : '.latest-result .lucky-star',
        sliceCountBall     : 5,
        sliceCountBallStar : 2,
        urlPrice           : 'http://euromillones.combinacionganadora.com/',
        categoryPrice      : '.escrutinioBox_premios .col1',
        winnerPrice        : '.escrutinioBox_premios .col2',
        spanishWinners     : '.escrutinioBox_premios .col3',
        moneyPrice         : '.escrutinioBox_premios .col4',
        extraInfoPrice     : '.escrutinioBox_premios .ctrlFloat'
      },
      primitiva            : {
        url                : 'http://www.loteriasyapuestas.es/es/la-primitiva',
        numbers            : '.cuerpoRegionIzq li',
        extras             : '.bolaPeq',
        joker              : '.cuerpoRegionIzq span',
        sliceCountBall     : 6,
        urlPrice           : 'http://primitiva.combinacionganadora.com/',
        categoryPrice      : '.escrutinioBox_premios .col1',
        winnerPrice        : '.escrutinioBox_premios .col2',
        moneyPrice         : '.escrutinioBox_premios .col3',
        extraInfoPrice     : '.escrutinioBox_premios .ctrlFloat'
      },
      bonoloto             : {
        url                : 'http://www.loteriasyapuestas.es/es/bonoloto',
        numbers            : '.cuerpoRegionIzq li',
        extras             : '.bolaPeq',
        sliceCountBall     : 6,
        urlPrice           : 'http://bonoloto.combinacionganadora.com/',
        categoryPrice      : '.escrutinioBox_premios .col1',
        winnerPrice        : '.escrutinioBox_premios .col2',
        moneyPrice         : '.escrutinioBox_premios .col3',
        extraInfoPrice     : '.escrutinioBox_premios .ctrlFloat'
      }
    }
  };
};
