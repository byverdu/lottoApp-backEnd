// Entry point, setInterval for raffleDays
import { globalHelper } from './helpers/globalHelper';
const config = require( './config/config' ).lotto;

// Array with numbers representing the draw days
const bonoRaffles = config.bonoloto.raffleDays;
const primiRaffles = config.primitiva.raffleDays;
const euroRaffles = config.euromillions.raffleDays;

console.log( 'server file called' );

let countForMail = 0;

setInterval(() => {
  console.log( 'global setInterval' );

  const newDate = new Date();
  const day = newDate.getDay();
  const hour = newDate.getHours();

  if ( hour === 17 ) {
    countForMail += 1;
    if ( globalHelper.checkRaffleDay( euroRaffles, day ) && countForMail < 2 ) {
      console.log( 'checkDayEuro for mail' );
      require( './instances/euroMail' )();
    }
  }

  // 9pm, draw hour
  if ( hour === 21 ) {
    console.log( 'checking hour raffle' );

    // reseting counter for euroMail
    countForMail = 0;
    // checkRaffleDay returns true if the array withs draw days contains the actual day
    if ( globalHelper.checkRaffleDay( bonoRaffles, day )) {
      console.log( 'checkDayBono' );
      require( './lottoXray/bonoXray' )();
    }
    // Setting a delay to avoid db crashing
    setTimeout(() => {
      if ( globalHelper.checkRaffleDay( primiRaffles, day )) {
        console.log( 'checkDayPrimi' );
        require( './lottoXray/primiXray' )();
      }
    }, 15000 );
    setTimeout(() => {
      if ( globalHelper.checkRaffleDay( euroRaffles, day )) {
        console.log( 'checkDayEuro' );
        require( './lottoXray/euroXray' )();
      }
    }, 24000 );
  }
  // 10pm, draw winners hour
  if ( hour === 22 ) {
    console.log( 'checking hour winner' );

    if ( globalHelper.checkRaffleDay( bonoRaffles, day )) {
      console.log( 'checkDayBono' );
      require( './lottoXray/bonoWinnerXray' )();
    }

    setTimeout(() => {
      if ( globalHelper.checkRaffleDay( primiRaffles, day )) {
        console.log( 'checkDayPrimi' );
        require( './lottoXray/primiWinnerXray' )();
      }
    }, 15000 );

    setTimeout(() => {
      if ( globalHelper.checkRaffleDay( euroRaffles, day )) {
        console.log( 'checkDayEuro' );
        require( './lottoXray/euroWinnerXray' )();
      }
    }, 24000 );
  }
}, 600000 );

module.exports = require( 'express' )();
