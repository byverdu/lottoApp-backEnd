//  Instance file for primitivaWinner
import mongoose from 'mongoose';
import { globalHelper } from '../helpers/globalHelper';
const storage = require( '../config/storage' );
import WinnerSchema from '../model/winnerSchema';
const Winner = mongoose.model( 'Winner', WinnerSchema );

module.exports = () => {
  require( '../config/db' )();

  console.log( 'instances file called primitivaWinner' );

  const db = mongoose.connection;

  db.on( 'error', console.error.bind( console, 'connection error:' ));
  db.once( 'open', () => {
    console.log( 'open connection primitivaWinner' );

    globalHelper.customFindOneMongoose( Winner, { lottoID: 'primitivaWinner' }, ( err, winner ) => {
      if ( err ) {
        console.log( err, 'err customFindOneMongoose primitivaWinner' );
      } else {
        const primiStorage = storage.getItem( 'primitivaWinner' );
        const oldWinner = winner.allWinners[ 4 ].winners;
        const newWinner = primiStorage.allWinners[ 4 ].winners;
        const innerWinner = winner;

        console.log( oldWinner, newWinner, 'primitivaWinner' );
        if ( oldWinner !== newWinner ) {
          innerWinner.date = globalHelper.hackyDate();
          innerWinner.allWinners = primiStorage.allWinners;
          innerWinner.extraInfo = primiStorage.extraInfo;
          innerWinner.save(( saveErr, saveWinner ) => {
            if ( saveErr ) {
              console.log( saveErr );
            } else {
              console.log( saveWinner, 'saved primitivaWinner' );
            }
          });
        }
      }
    });
  });
  setTimeout(() => {
    mongoose.disconnect();
    console.log( 'primiWinners disconnect mongoDB' );
  }, 2000 );
};
