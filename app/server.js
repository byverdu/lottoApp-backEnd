'use strict';

let config = require('./config/config')(),
  configBono = config.lotto.bonoloto,
  configPrimi = config.lotto.primitiva,
  configEuro = config.lotto.euromillions;

setInterval(() => {
  console.log('server file called');

  let newDate = new Date(),
    day = newDate.getDay(),
    hour = newDate.getHours(),
    checkDayBono = configBono.raffleDays.includes(day),
    checkDayPrimi = configPrimi.raffleDays.includes(day),
    checkDayEuro = configEuro.raffleDays.includes(day);

    if (hour === 20) {
      console.log('checking hour raffle');

      if (checkDayBono) {
        console.log('checkDayBono');
        require('./lottoXray/bonoXray')();
      }

      if (checkDayPrimi) {
        console.log('checkDayPrimi');
        require('./lottoXray/primiXray')();
      }

      if (checkDayEuro) {
        console.log('checkDayEuro');
        require('./lottoXray/euroXray')();
      }
    }

    if (hour === 21) {
      console.log('checking hour winner');

      if (checkDayBono) {
        console.log('checkDayBono');
        require('./lottoXray/bonoWinnerXray')();
      }

      if (checkDayPrimi) {
        console.log('checkDayPrimi');
        require('./lottoXray/primiWinnerXray')();
      }

      if (checkDayEuro) {
        console.log('checkDayEuro');
        require('./lottoXray/euroWinnerXray')();
      }
    }

}, 600000);

module.exports = require('express')();
