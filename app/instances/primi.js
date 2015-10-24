'use strict';

import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {GlobalHelper} from '../helpers/globalHelper';
import {SchemaHelper} from '../helpers/schemaHelper';
var configPrimi = require('../config/config')().lotto.primitiva,
storage = require('../config/storage'),
globalHelper = new GlobalHelper(),
schemaHelper = new SchemaHelper();

module.exports = () => {
  require('../config/db')();

  console.log('instances file called primitiva');

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {


    console.log('open connection primitiva');

    globalHelper.customFindOneMongoose(Lotto, {lottoID: 'primitiva'}).then((err, lotto) => {

      if (err) {
        console.log(err);
      } else {
        console.log(lotto.lastResult, 'outside if condition primitiva');

        let primiStorage = storage.getItem('primiNumbers'),
          storedLastResult = lotto.getLastResult(),
          newPrimiStorage = schemaHelper.setXrayArrayToSave(primiStorage.numbers);

        console.log(newPrimiStorage, 'newPrimiStorage');
        console.log(storedLastResult, 'storedLastResult');

        if (newPrimiStorage !== storedLastResult) {

          lotto.setNewDate();
          lotto.setLastResult(primiStorage.numbers);
          lotto.setExtras(primiStorage.extras);
          lotto.setAllResults(lotto.lastResult);
          lotto.setStatistics(lotto.getAllResults, 'lotto');
          lotto.setMostRepeated(configPrimi.sliceCountBall);
          lotto.save((err, lotto) => {
            if (err) {
              console.log(err);
            } else {
              console.log(lotto, 'inside if condition primitiva');
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
