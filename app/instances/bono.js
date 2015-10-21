'use strict';

import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {SchemaHelper} from '../helpers/schemaHelper';
import {GlobalHelper} from '../helpers/globalHelper';
var configBono = require('../config/config')().lotto.bonoloto,
  globalHelper = new GlobalHelper(),
  storage = require('../config/storage'),
  schemaHelper = new SchemaHelper();

module.exports = () => {

  require('../config/db')();
  var db = mongoose.connection;

console.log('instances file called bonoloto');


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('open connection bonoloto');

  globalHelper.customFindOneMongoose(Lotto, { lottoID: 'bonoloto' }, (err, lotto) => {
    if (err) {
      console.log(err);
    } else {
      console.log(lotto.lastResult, 'outside if condition bonoloto');

      let bonoStorage = storage.getItem('bonoNumbers'),
          storedLastResult = lotto.getLastResult(),
          newPrimiStorage = schemaHelper.setXrayArrayToSave(bonoStorage.numbers);

        console.log(newPrimiStorage, 'newPrimiStorage');
        console.log(storedLastResult, 'storedLastResult');

      if (newPrimiStorage !== storedLastResult) {

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
  });
});
setTimeout(() => {
    mongoose.disconnect();
  }, 1000);
};
