// Bono mongoDB instance

import mongoose from 'mongoose';
import { schemaHelper } from '../helpers/schemaHelper';
import { globalHelper } from '../helpers/globalHelper';
import LottoSchema from '../model/lottoSchema';
const Lotto = mongoose.model( 'Lotto', LottoSchema );
const configBono = require( '../config/config' ).lotto.bonoloto;
const storage = require( '../config/storage' );

module.exports = () => {
  require( '../config/db' )();
  const db = mongoose.connection;

  console.log( 'instances file called bonoloto' );

  db.on( 'error', console.error.bind( console, 'connection error:' ));
  db.once( 'open', () => {
    globalHelper.customFindOneMongoose( Lotto, { lottoID: 'bonoloto' }, ( err, lotto ) => {
      if ( !err ) {
        console.log( lotto.lastResult, 'outside if condition bonoloto' );

        const bonoStorage = storage.getItem( 'bonoNumbers' );
        const DBLastResult = lotto.getLastResult();
        const newPrimiStorage = schemaHelper.setXrayArrayToSave( bonoStorage.numbers );

          console.log( newPrimiStorage, 'newPrimiStorage' );
          console.log( DBLastResult, 'DBLastResult' );

        if ( newPrimiStorage !== DBLastResult ) {
          lotto.setNewDate();
          lotto.setLastResult( bonoStorage.numbers );
          lotto.setExtras( bonoStorage.extras );
          lotto.setAllResults( lotto.lastResult );
          lotto.setStatistics( lotto.getAllResults, 'lotto', configBono.totalNumberBalls );
          lotto.setMostRepeated( configBono.sliceCountBall );
          lotto.save(( saveError, saveLotto ) => {
            if ( saveError ) {
              console.log( saveError );
            } else {
              console.log( saveLotto, 'inside if condition bonoloto' );
            }
          });
        }
      }
      setTimeout(() => {
        mongoose.disconnect();
        console.log( 'bono disconnect mongoDB' );
      }, 1000 );
    });
  });
};