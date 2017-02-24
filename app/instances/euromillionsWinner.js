// Winners instance for euromillions
import mongoose from 'mongoose';
import { globalHelper } from '../helpers/globalHelper';
const storage = require( '../config/storage' );
import WinnerSchema from '../model/winnerSchema';
const Winner = mongoose.model( 'Winner', WinnerSchema );


module.exports = () => {
  require( '../config/db' )();

  console.log( 'instances file called euromillionsWinner' );

  const db = mongoose.connection;

  db.on( 'error', console.error.bind( console, 'connection error:' ));
  db.once( 'open', () => {
    console.log( 'open connection euromillionsWinner' );

    globalHelper.customFindOneMongoose( Winner, { lottoID: 'euromillionsWinner' }, ( err, winner ) => {
      if ( err ) {
        console.log( err );
      } else {
        const euroStorage = storage.getItem( 'euromillionsWinner' );
        const oldWinner = winner.allWinners[ 4 ].winners;
        const newWinner = euroStorage.allWinners[ 4 ].winners;
        const innerWinner = winner;

          console.log( oldWinner, newWinner, 'euromillionsWinner' );

        if ( oldWinner !== newWinner ) {
          innerWinner.date = globalHelper.hackyDate();
          innerWinner.allWinners = euroStorage.allWinners;
          innerWinner.extraInfo = euroStorage.extraInfo;
          innerWinner.save(( saveErr, saveWinner ) => {
            if ( saveErr ) {
              console.log( saveErr );
            } else {
              console.log( saveWinner, 'saved euromillionsWinner' );
            }
          });
        }
      }
    });
  });
  setTimeout(() => {
    mongoose.disconnect();
    console.log( 'euroWinners disconnect mongoDB' );
  }, 3000 );
};