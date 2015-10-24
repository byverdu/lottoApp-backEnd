'use strict';

import {GlobalHelper} from './helpers/globalHelper';

let config = require('./config/config')().lotto,
  globalHelper = new GlobalHelper(),
  bonoRaffles = config.bonoloto.raffleDays,
  primiRaffles = config.primitiva.raffleDays,
  euroRaffles = config.euromillions.raffleDays;

setInterval(() => {
  console.log('server file called');

  let newDate = new Date(),
    day = newDate.getDay(),
    hour = newDate.getHours();

  if (hour === 10) {
    console.log('checking hour raffle');

    if (globalHelper.checkRaffleDay(bonoRaffles, day)) {
      console.log('checkDayBono');
      require('./lottoXray/bonoXray')();
    }

    setTimeout(()=>{
      if (globalHelper.checkRaffleDay(primiRaffles, day)) {
        console.log('checkDayPrimi');
        require('./lottoXray/primiXray')();
      }
    }, 5000);

    setTimeout(()=>{
      if (globalHelper.checkRaffleDay(euroRaffles, day)) {
        console.log('checkDayEuro');
        require('./lottoXray/euroXray')();
      }
    }, 5000);

  }

  if (hour === 0) {
    console.log('checking hour winner');

    if (globalHelper.checkRaffleDay(bonoRaffles, day)) {
      console.log('checkDayBono');
      require('./lottoXray/bonoWinnerXray')();
    }

    setTimeout(()=>{
      if (globalHelper.checkRaffleDay(primiRaffles, day)) {
        console.log('checkDayPrimi');
        require('./lottoXray/primiWinnerXray')();
      }
    }, 5000);

    setTimeout(()=>{
      if (globalHelper.checkRaffleDay(euroRaffles, day)) {
        console.log('checkDayEuro');
        require('./lottoXray/euroWinnerXray')();
      }
    }, 5000);
  }
}, 600000);

module.exports = require('express')();
