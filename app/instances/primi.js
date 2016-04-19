// Primi instance fiel
import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import { globalHelper } from '../helpers/globalHelper';
import { schemaHelper } from '../helpers/schemaHelper';
const configPrimi = require( '../config/config' ).lotto.primitiva;
const storage = require( '../config/storage' );
// const globalHelper = new GlobalHelper();
// const schemaHelper = new SchemaHelper();

module.exports = () => {
  require( '../config/db' )();

  console.log( 'instances file called primitiva' );

  const db = mongoose.connection;

  db.on( 'error', console.error.bind( console, 'connection error:' ));
  db.once( 'open', () => {
    console.log( 'open connection primitiva' );

    globalHelper.customFindOneMongoose( Lotto, { lottoID: 'primitiva' }, ( err, lotto ) => {
      if ( err ) {
        console.log( err );
      } else {
        console.log( lotto.lastResult, 'outside if condition primitiva' );

        const primiStorage = storage.getItem( 'primiNumbers' );
        const DBlastResult = lotto.getLastResult();
        const newPrimiStorage = schemaHelper.setXrayArrayToSave( primiStorage.numbers );

        console.log( newPrimiStorage, 'newPrimiStorage' );
        console.log( DBlastResult, 'DBlastResult' );

        if ( newPrimiStorage !== DBlastResult ) {
          lotto.setNewDate();
          lotto.setLastResult( primiStorage.numbers );
          lotto.setExtras( primiStorage.extras );
          lotto.setAllResults( lotto.lastResult );
          lotto.setStatistics( lotto.getAllResults, 'lotto' );
          lotto.setMostRepeated( configPrimi.sliceCountBall );
          lotto.save(( saveErr, saveLotto ) => {
            if ( saveErr ) {
              console.log( saveErr );
            } else {
              console.log( saveLotto, 'inside if condition primitiva' );
            }
          });
        }
      }
      setTimeout(() => {
        mongoose.disconnect();
        console.log( 'primi disconnect mongoDB' );
      }, 2000 );
    });
  });
};
