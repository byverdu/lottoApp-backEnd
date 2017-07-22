// Result prices bonoloto
import mongoose from 'mongoose';
import { globalHelper } from '../../helpers/globalHelper';
const storage = require( '../../config/storage' );
import WinnerSchema from '../../model/winnerSchema';
const Winner = mongoose.model( 'Winner', WinnerSchema );

module.exports = ( lottoID ) => {
  require( '../../config/db' )();

  console.log( `instances file called ${lottoID}` );

  const db = mongoose.connection;

  db.on( 'error', console.error.bind( console, 'connection error:' ));
  db.once( 'open', () => {
    console.log( `open connection ${lottoID}` );

    globalHelper.customFindOneMongoose( Winner, { lottoID: lottoID }, ( err, winner ) => {
      if ( err ) {
        console.log( err );
      } else {
        const lottoStorage = storage.getItem( lottoID );
        const oldWinner = winner.allWinners[ 4 ].winners;
        const newWinner = lottoStorage.allWinners[ 4 ].winners;
        const innerWinner = winner;

        console.log( oldWinner, newWinner, `${lottoID}Instance` );

        if ( oldWinner !== newWinner ) {
          innerWinner.date = globalHelper.hackyDate();
          innerWinner.allWinners = lottoStorage.allWinners;
          innerWinner.extraInfo = lottoStorage.extraInfo;
          innerWinner.save(( saveError, saveWinner ) => {
            if ( saveError ) {
              console.log( saveError );
            } else {
              console.log( saveWinner, `saved ${lottoID}` );
            }
          });
        }
      }
    });
  });
  setTimeout(() => {
    mongoose.disconnect();
    console.log( `${lottoID} disconnect mongoDB` );
  }, 1000 );
};
