// Entry point, setInterval for raffleDays
import { globalHelper } from './helpers/globalHelper';

// Array with numbers representing the draw days
const bonoRaffles = globalHelper.getArrayRaffleDays( 'bonoloto' );
const primiRaffles = globalHelper.getArrayRaffleDays( 'primitiva' );
const euroRaffles = globalHelper.getArrayRaffleDays( 'euromillions' );

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
      const xrayParams = globalHelper.createParamsXrayModule( 'bonoloto', 'getRaffleInfo' );
      require( './scrapper/lotto' )( xrayParams );
    }
    // Setting a delay to avoid db crashing
    setTimeout(() => {
      if ( globalHelper.checkRaffleDay( primiRaffles, day )) {
        const xrayParams = globalHelper.createParamsXrayModule( 'primitiva', 'getRaffleInfo' );
        console.log( 'checkDayPrimi' );
        require( './scrapper/lotto' )( xrayParams );
      }
    }, 15000 );
    setTimeout(() => {
      if ( globalHelper.checkRaffleDay( euroRaffles, day )) {
        console.log( 'checkDayEuro' );
        const xrayParams = globalHelper.createParamsXrayModule( 'euromillions', 'getRaffleInfo' );
        require( './scrapper/lotto' )( xrayParams );
      }
    }, 24000 );
  }
  // 10pm, draw winners hour
  if ( hour === 22 ) {
    console.log( 'checking hour winner' );

    if ( globalHelper.checkRaffleDay( bonoRaffles, day )) {
      console.log( 'checkDayBono' );
      const xrayParams = globalHelper.createParamsXrayModule( 'bonoloto', 'getWinnersInfo' );
      require( './scrapper/winners' )( xrayParams );
    }

    setTimeout(() => {
      if ( globalHelper.checkRaffleDay( primiRaffles, day )) {
        console.log( 'checkDayPrimi' );
        const xrayParams = globalHelper.createParamsXrayModule( 'primitiva', 'getWinnersInfo' );
        require( './scrapper/winners' )( xrayParams );
      }
    }, 15000 );

    setTimeout(() => {
      if ( globalHelper.checkRaffleDay( euroRaffles, day )) {
        console.log( 'checkDayEuro' );
        const xrayParams = globalHelper.createParamsXrayModule( 'euromillions', 'getWinnersInfo' );
        require( './scrapper/winners' )( xrayParams );
      }
    }, 24000 );
  }
}, 600000 );

module.exports = require( 'express' )();
