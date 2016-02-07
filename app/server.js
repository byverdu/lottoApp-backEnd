'use strict';

import {GlobalHelper} from './helpers/globalHelper';

let config = require('./config/config')().lotto,
  globalHelper = new GlobalHelper(),
  // Array with numbers representing the draw days
  bonoRaffles = config.bonoloto.raffleDays,
  primiRaffles = config.primitiva.raffleDays,
  euroRaffles = config.euromillions.raffleDays;

setInterval(() => {
  console.log('server file called');

  let newDate = new Date(),
    day = newDate.getDay(),
    hour = newDate.getHours();

  // 9pm, draw hour
  if (hour === 21) {
    console.log('checking hour raffle');

    // checkRaffleDay returns true if the array withs draw days contains the actual day
    if (globalHelper.checkRaffleDay(bonoRaffles, day)) {
      console.log('checkDayBono');
      require('./lottoXray/bonoXray')();
    }
    // Setting a delay to avoid db crashing
    setTimeout(()=>{
      if (globalHelper.checkRaffleDay(primiRaffles, day)) {
        console.log('checkDayPrimi');
        require('./lottoXray/primiXray')();
      }
    }, 15000);
    setTimeout(()=>{
      if (globalHelper.checkRaffleDay(euroRaffles, day)) {
        console.log('checkDayEuro');
        require('./lottoXray/euroXray')();
      }
    }, 24000);

  }
  // 10pm, draw winners hour
  if (hour === 22) {
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
    }, 15000);

    setTimeout(()=>{
      if (globalHelper.checkRaffleDay(euroRaffles, day)) {
        console.log('checkDayEuro');
        require('./lottoXray/euroWinnerXray')();
      }
    }, 24000);
  }
}, 600000);

module.exports = require('express')();
