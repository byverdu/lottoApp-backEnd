'use strict';

import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {SchemaHelper} from '../helpers/schemaHelper';
import {GlobalHelper} from '../helpers/globalHelper';
let configBono = require( '../config/config' )().lotto.bonoloto,
  globalHelper = new GlobalHelper(),
  schemaHelper = new SchemaHelper(),
  storage = require( '../config/storage' );

module.exports = () => {

  require('../config/db')();
  let db = mongoose.connection;

  console.log('instances file called bonoloto');

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {

    globalHelper.customFindOneMongoose(Lotto, { lottoID: 'bonoloto' }, (err, lotto) => {
      if ( !err ) {
        console.log(lotto.lastResult, 'outside if condition bonoloto');

          let bonoStorage = storage.getItem('bonoNumbers'),
            DBLastResult = lotto.getLastResult(),
            newPrimiStorage = schemaHelper.setXrayArrayToSave(bonoStorage.numbers);

          console.log(newPrimiStorage, 'newPrimiStorage');
          console.log(DBLastResult, 'DBLastResult');

        if (newPrimiStorage !== DBLastResult) {

          lotto.setNewDate();
          lotto.setLastResult(bonoStorage.numbers);
          lotto.setExtras(bonoStorage.extras);
          lotto.setAllResults(lotto.lastResult);
          lotto.setStatistics(lotto.getAllResults, 'lotto');
          lotto.setMostRepeated(configBono.sliceCountBall);
          lotto.save((err, lotto) => {
            if (err) {
              console.log(err);
            } else {
              console.log(lotto, 'inside if condition bonoloto');
            }
          });
        }
      }
      setTimeout(() => {
        mongoose.disconnect();
      }, 1000);
    });
  });
};
