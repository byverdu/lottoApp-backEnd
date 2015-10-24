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

    setTimeout(()=>{
      if (checkDayPrimi) {
        console.log('checkDayPrimi');
        require('./lottoXray/primiXray')();
      }
    }, 3000);

    setTimeout(()=>{
      if (checkDayEuro) {
        console.log('checkDayEuro');
        require('./lottoXray/euroXray')();
      }
    }, 6000);

  }

  if (hour === 21) {
    console.log('checking hour winner');

    if (checkDayBono) {
      console.log('checkDayBono');
      require('./lottoXray/bonoWinnerXray')();
    }

    setTimeout(()=>{
      if (checkDayPrimi) {
        console.log('checkDayPrimi');
        require('./lottoXray/primiWinnerXray')();
      }
    }, 3000);

    setTimeout(()=>{
      if (checkDayEuro) {
        console.log('checkDayEuro');
        require('./lottoXray/euroWinnerXray')();
      }
    }, 6000);
  }
}, 600000);

module.exports = require('express')();
