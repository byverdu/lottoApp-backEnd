// Euro Mongo instance
import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import { SchemaHelper } from '../helpers/schemaHelper';
import { GlobalHelper } from '../helpers/globalHelper';
const configEuro = require( '../config/config' ).lotto.euromillions;
const storage = require( '../config/storage' );
const globalHelper = new GlobalHelper();
const schemaHelper = new SchemaHelper();

module.exports = () => {
  console.log( 'instances file called euromillions' );

  require( '../config/db' )();
  const db = mongoose.connection;

  db.on( 'error', console.error.bind( console, 'connection error:' ));
  db.once( 'open', () => {
    console.log( 'open connection euromillions' );

    globalHelper.customFindOneMongoose( Lotto, { lottoID: 'euromillions' }, ( err, lotto ) => {
      if ( err ) {
        console.log( err );
      } else {
        console.log( lotto.lastResult, 'outside if condition euromillions' );

        const euroStorage = storage.getItem( 'euroNumbers' );
        const storedLastResult = lotto.getLastResult();
        const newEuroStorage = schemaHelper.setXrayArrayToSave( euroStorage.numbers );

        console.log( newEuroStorage, 'newEuroStorage' );
        console.log( storedLastResult, 'storedLastResult' );

        if ( newEuroStorage !== storedLastResult ) {
          lotto.setNewDate();
          lotto.setLastResult( euroStorage.numbers );
          lotto.setAllResults( lotto.lastResult );
          lotto.setExtras( euroStorage.extras );
          lotto.setStatistics( lotto.getAllResults, 'lotto' );
          lotto.setMostRepeated( configEuro.sliceCountBall );

          lotto.setLastResultStars( euroStorage.extras );
          lotto.setAllResultStars();
          lotto.setStatisticStars( lotto.getAllResultsStars, 'stars' );
          lotto.setMostRepeatedStars( configEuro.sliceCountBallStar );
          lotto.save(( saveErr, saveLotto ) => {
            if ( saveErr ) {
              console.log( saveErr );
            } else {
              console.log( saveLotto, 'inside if condition euromillions' );
            }
          });
        }
      }
      setTimeout(() => {
        mongoose.disconnect();
      }, 1000 );
    });
  });
};
