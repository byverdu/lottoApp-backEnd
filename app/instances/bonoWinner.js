// Result prices bonoloto
import mongoose from 'mongoose';
import Winner from '../model/winnerSchema';
import { globalHelper } from '../helpers/globalHelper';
const storage = require( '../config/storage' );

module.exports = () => {
  require( '../config/db' )();

  console.log( 'instances file called bonolotoWinner' );

  const db = mongoose.connection;

  db.on( 'error', console.error.bind( console, 'connection error:' ));
  db.once( 'open', () => {
    console.log( 'open connection bonolotoWinner' );

    globalHelper.customFindOneMongoose( Winner, { lottoID: 'bonolotoWinner' }, ( err, winner ) => {
      if ( err ) {
        console.log( err );
      } else {
        const bonoStorage = storage.getItem( 'bonoWinners' );
        const oldWinner = winner.allWinners[ 4 ].winners;
        const newWinner = bonoStorage.allWinners[ 4 ].winners;
        const innerWinner = winner;

        console.log( oldWinner, newWinner, 'bonolotoWinner' );

        if ( oldWinner !== newWinner ) {
          innerWinner.date = globalHelper.hackyDate();
          innerWinner.allWinners = bonoStorage.allWinners;
          innerWinner.extraInfo = bonoStorage.extraInfo;
          innerWinner.save(( saveError, saveWinner ) => {
            if ( saveError ) {
              console.log( saveError );
            } else {
              console.log( saveWinner, 'saved bonolotoWinner' );
            }
          });
        }
      }
    });
  });
  setTimeout(() => {
    mongoose.disconnect();
    console.log( 'bonoWinners disconnect mongoDB' );
  }, 1000 );
};
