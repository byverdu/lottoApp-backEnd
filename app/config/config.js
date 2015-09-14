'use strict';
var bonoJsonFile = require('../jsonResult/bono');
console.log(bonoJsonFile,'bonoJsonFile console ');
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
        sliceCountMost     : 5,
        sliceCountMostStar : 2,
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
        sliceCountMost     : 6,
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
        sliceCountMost     : 6,
        urlPrice           : 'http://bonoloto.combinacionganadora.com/',
        categoryPrice      : '.escrutinioBox_premios .col1',
        winnerPrice        : '.escrutinioBox_premios .col2',
        moneyPrice         : '.escrutinioBox_premios .col3',
        extraInfoPrice     : '.escrutinioBox_premios .ctrlFloat'
      }
    }
  };
};
