// Bono mongoDB instance

import mongoose from 'mongoose';
import { schemaHelper } from '../../helpers/schemaHelper';
import { globalHelper } from '../../helpers/globalHelper';
import LottoSchema from '../../model/lottoSchema';
const Lotto = mongoose.model( 'Lotto', LottoSchema );
const storage = require( '../../config/storage' );

module.exports = ( lottoID ) => {
  require( '../../config/db' )();
  const db = mongoose.connection;
  const configLotto = require( '../../config/config' ).lotto[ `${lottoID}` ];

  console.log( `instances file called for ${lottoID}` );

  db.on( 'error', console.error.bind( console, 'connection error:' ));
  db.once( 'open', () => {
    globalHelper.customFindOneMongoose( Lotto, { lottoID: lottoID }, ( err, lotto ) => {
      if ( !err ) {
        console.log( lotto.lastResult, `outside if condition ${lottoID}` );

        const lottoStorage = storage.getItem( `${lottoID}Numbers` );
        const DBLastResult = lotto.getLastResult();
        const newStorage = schemaHelper.setXrayArrayToSave( lottoStorage.numbers );

        console.log( newStorage, 'newStorage' );
        console.log( DBLastResult, 'DBLastResult' );

        if ( newStorage !== DBLastResult ) {
          lotto.setNewDate();
          lotto.setLastResult( lottoStorage.numbers );
          lotto.setExtras( lottoStorage.extras );
          lotto.setAllResults( lotto.lastResult );
          lotto.setStatistics(
            lotto.getAllResults,
            'lotto',
            configLotto.totalNumberBalls
          );
          lotto.setMostRepeated( configLotto.sliceCountBall );

          if ( lottoID.toLowerCase() === 'euromillions' ) {
            lotto.setLastResultStars( lottoStorage.extras );
            lotto.setAllResultStars();
            lotto.setStatisticStars(
              lotto.getAllResultsStars,
              'stars',
              configLotto.totalNumberStars
            );
            lotto.setMostRepeatedStars( configLotto.sliceCountBallStar );
          }

          lotto.save(( saveError, saveLotto ) => {
            if ( saveError ) {
              console.log( saveError );
            } else {
              console.log( saveLotto, `inside if condition ${lottoID}` );
            }
          });
        }
      }
      setTimeout(() => {
        mongoose.disconnect();
        console.log( `${lottoID} disconnect mongoDB` );
      }, 1000 );
    });
  });
};
